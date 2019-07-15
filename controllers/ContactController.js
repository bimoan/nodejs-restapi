const Contact = require('../modules/ContactModule')

class ContactController{

    static create(req, res){
        res.send('Halo ini respon dari controller')

//         const NewData = {
//             name: req.body.name,
//             phone: req.body.phone,
//             company: req.body.company,
//             active: Boolean(req.body.active) || true
//         }

//         Contact.create(NewData)
//             .then(response => {
//                 res.status(200).json({
//                     message: 'Contact berhasil ditambahkan',
//                     response
//                 })
//             })
//             .catch(err => {
//                 res.sendstatus(500)
//             })
//     }

    static updatedataByid(req, res){

        const NewData = {
            name: req.body.name,
            phone: req.body.phone,
            company: req.body.company,
            activate: Boolean(req.body.activate)
        }

        const contactid = req.params.id
        Contact.findByIdAndUpdate(contactid, NewData)
            .then(response => {
                res.status(200).send({
                    message: 'Data Sukses Di rubah',
                    data: response
                })
            })
            // .catch(err => {
            //     res.sendstatus(500)
            // })  
    }

    static getdata (req, res){
        Contact.find()
            .then(response => {
                res.status(200).json({
                    message: "Data berhasil di load",
                    data: response
                })
            }) 
            .catch(err => {
                res.sendstatus(500)
            })

    }

    static getdataByid (req, res){
        const contactid = req.params.id
        Contact.findById(contactid)
            .then(response => {
                res.status(200).json({
                    message: " Data berhasil ditemukan ",
                    data: response
                })
            })
            .catch(err => {
                res.sendstatus(500)
            })
    }

}

module.exports = ContactController;
