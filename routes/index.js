const aControllers = require('../controllers/adult')
const kControllers = require('../controllers/kid')
const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/kids', kControllers.createKid)

router.get('/kids', kControllers.getAllKids)

router.get('/kids/:id', kControllers.getKidById)

router.delete('/kids/:id', kControllers.deleteKid)

router.post('/adults', aControllers.createAdult)

router.get('/adults', aControllers.getAllAdults)

router.get('/adults/:id', aControllers.getAdultById)

router.delete('/adults/:id', aControllers.deleteAdult)

module.exports = router
