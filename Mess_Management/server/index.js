const express = require('express')

const mongoose = require('mongoose')

const cors = require('cors')

const EmployeeModel = require('./models/Employee')

// const MenuModel=require('./models/Employee')

const app = express()

app.use(express.json()) 

app.use(cors())

// app.use((req,res,next)=>{
//     console.log('start')
//     res.express.json()
//     next()
// })



mongoose.connect("mongodb://localhost:27017/employee");
// mongoose.connect("mongodb://localhost:27017/menutable");

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The Password is Incorrect ")
            }
        }else{
            res.json("No Record Existed")
        }
    })
} )

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
} )

// app.post('/menu', (req, res) => {
//     MenuModel.create(req.body)
//     .then(menus => res.json(menus))
//     .catch(err => res.json(err))
// } )

app.listen(3001, () => {
    console.log("server is running")
})
