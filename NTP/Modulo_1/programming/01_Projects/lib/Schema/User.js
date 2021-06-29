const joi = require('joi');

const User = joi.object({
    nombre: joi.string().min(2).max(50).empty().required(),
    apellido: joi.string().min(2).max(50).empty().required()
})


module.exports ={
    User,
}