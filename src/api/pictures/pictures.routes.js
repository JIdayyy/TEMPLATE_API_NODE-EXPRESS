const { Router } = require('express');


const getAll = require('./controllers/getAll')
const getOne = require('./controllers/getOne')
const post = require('./controllers/post')
const delete_ = require('./controllers/delete')
const update = require('./controllers/update')

const router = Router('')

router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', post)
router.put('/', update)
router.delete('/', delete_)

module.exports = router