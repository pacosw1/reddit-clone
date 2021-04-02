import express = require('express');
import { plainToClass } from 'class-transformer';
import { validateBody } from '../utils/';
import { CreateUserRequest } from '../model';

const router = express.Router();

router.route('/')
    .post(async (req, res) => {
        const body: Object = req.body
        //convert to class and validate
        let userReq = plainToClass(CreateUserRequest, body)
        await validateBody(userReq, res)
        //save to database
        res.status(200).send(`User with email ${userReq.email} was created successfully!`)
    })
    .get((req, res) => {
        const age = req.query.age

        if (!age) {
            res.status(400).send(JSON.stringify({
                errors: [{ message: "No age parameter is specified" }]
            }))
        }
        res.status(200).send(`The user is ${age} years old`)
    })
module.exports = router;
