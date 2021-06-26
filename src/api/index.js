const { Router } = require('express');
const pictures = require('./pictures/pictures.routes')
const router = Router()


router.use('/pictures', pictures);



module.exports = router