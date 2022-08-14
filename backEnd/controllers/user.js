const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');



exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'user not found' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'incorrect password' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id,role : user.role  },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
 }



exports.signup = (req, res, next) => {
    if (req.body.password === "") {
        res.status(401).json({ error: "invalid password" })
    }
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                phoneNumber:req.body.phoneNumber,
                address:req.body.address,
                ID_Card:req.body.ID_Card,
                taxRegistrationNumber:req.body.taxRegistrationNumber,
                patent:req.body.patent,
                activityArea : req.body.activityArea,
                role:req.body.role,
                email:req.body.email,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({ message: 'User has been created' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

