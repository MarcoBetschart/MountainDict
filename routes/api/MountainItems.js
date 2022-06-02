const { Router } = require('express')
const MountainItem = require('../../models/MountainItem')
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
  });
  
  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
  });

const router = Router()

router.get('/', async (req, res) => {
    try {
        const mountains = await MountainItem.find()
        if (!mountains) throw new Error('No mountains')
        const sorted = mountains.sort((a) => {
            return a.name
        })
        res.status(200).json(sorted)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  MountainItem.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Mountain with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Mountain with id=" + id });
    });
})

router.post('/', upload.single('img'), async (req, res) => {
    const newMountain = new MountainItem(req.body)
    newMountain.img.data = req.file.path
    try {
        const mountain = await newMountain.save()
        if (!mountain) throw new Error('Something went wrong saving the mountain')
        res.status(200).json(mountain)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const response = await MountainItem.findByIdAndUpdate(id, req.body)
        if (!response) throw Error('Something went wrong ')
        const updated = { ...response._doc, ...req.body }
        res.status(200).json(updated)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const removed = await MountainItem.findByIdAndDelete(id)
        if (!removed) throw Error('Something went wrong ')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router