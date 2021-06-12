const router = require('express').Router();
const Electronic = require('../../controller/controllerCategories/controllerCategoriesElectronic');


router.get('/Electronic', Electronic.get_Electronic);
router.post('/Electronic',Electronic.post_Electronic);
router.put('/Electronic/:id',Electronic.update_Electronic);
router.delete('/Electronic/:id',Electronic.delete_Electronic);

module.exports = router;
