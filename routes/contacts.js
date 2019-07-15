const express = require('express');
const router = express.Router()

const ContactController = require('../controllers/ContactController')

router.post('/', ContactController.create)
router.get('/', ContactController.getdata)
router.get('/id/:id', ContactController.getdataByid)
router.put('/id/:id', ContactController.updatedataByid)

// router.get('/', (req, res) => {
//     res.send('Hallo ini routes contacts')
// })

module.exports = router