const User = require('../../models/User');
const { Router } = require('express');
const jwt = require('jsonwebtoken');

const router = Router();

router.post('/register', async (req, res) => {
  try {
    let isUser = await User.find({ email: req.body.email });
		if (isUser.length >= 1) {
			return res.status(409).json({
				message: 'email already in use'
			});
		}
		const user = new User({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password
		});
		let data = await user.save();
		const token = await user.generateAuthToken(); // here it is calling the method that we created in the model
		res.status(201).json({ data, token });
	} catch (err) {
		res.status(400).json({ err: err });
	}
});
router.post('/login', async (req, res) => {
	try {
		const email = req.body.email;
		const password = req.body.password;
		const user = await User.findByCredentials(email, password);
		if (!user) {
			return res.status(401).json({ error: 'Login failed! Check authentication credentials' });
		}
		const token = await user.generateAuthToken();
		res.status(201).json({ user, token });
	} catch (err) {
		res.status(400).json({ err: err });
	}
});

router.get(
	'/me',
	(req, res, next) => {
		try {
			const token = req.headers.authorization.replace('Bearer ', '');
			const decoded = jwt.verify(token, 'secret');
			req.userData = decoded;
			// console.log(req.userData);
			next();
		} catch (err) {
			return res.status(401).json({
				message: 'Authentification Failed'
			});
		}
	},
	async (req, res) => {
		await res.json(req.userData);
	}
);

module.exports = router;
