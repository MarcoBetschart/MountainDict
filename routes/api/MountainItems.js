const { Router } = require('express')
const MountainItem = require('../../models/MountainItem')

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

router.post('/', async (req, res) => {
    const newMountain = new MountainItem(req.body)
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