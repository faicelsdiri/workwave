const mongoose = require("mongoose");

const SocieteSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
    },
    domaine: {
        type: String,
        required: true,
    } 
});

const EmployeSchema = new mongoose.Schema({
    nom: {
        type: String, 
        required: true,
    },
    prenom: {
        type: String,
        required: true,
    },
    sexe: {
        type: String,
        required: true,
    },
    age: {
        type: Number, // Change type to Number for age
        required: true,
    },
    certificat: {
        type: String,
        required: true,
    },
    skills: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    langue: { 
        type: String,
        required: true,
    }, 
});

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    motDePasse: {
        type: String,
        required: true,
    },
    profilPicture: {
        type: String,
       
    },
    typeuser: {
        type: String,
        enum: ['societe', 'candidat', 'admin'],
        required: true,
    },
    phoneNumbre: {
        type: Number, // Corrected typo
        required: true,
    },
    Adress: {
        type: String,
        required: true,
    },
    societe: {
        type: SocieteSchema,
        required: function () {
            return this.typeuser === 'societe';
        },
    },
    employe: {
        type: EmployeSchema,
        required: function () {
            return this.typeuser === 'candidat';
        },
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;




// const mongoose = require("mongoose")
// const schema = mongoose.Schema

// const userSchema = new schema({
//     fullName: {
//         type: String,
//         require: true
//     },
//     email: {
//         type: String,
//         require: true
//     },
//     password: {
//         type:  String,
//         require: true
//     }
// })

// const User = mongoose.model("users", userSchema)
// module.exports = User 

