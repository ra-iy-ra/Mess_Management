const mongoose = require('mongoose')


const EmployeeSchema = new mongoose.Schema({

    name: String,
    email: String,
    password: String,
    cluster:String
    
})

// const MenuTableSchema = new mongoose.Schema({

//     day: String,
//     breakfast: String,
//     lunch: String,
//     dinner:String
    
// })

const EmployeeModel = mongoose.model("employees",EmployeeSchema)
module.exports = EmployeeModel

// const MenuModel = mongoose.model("menus",MenuTableSchema)
// module.exports = MenuModel
 
// const MenuTableSchema = new mongoose.Schema({

//     day: String,
//     breakfast: String,
//     lunch: String,
//     dinner:String
    
// })


