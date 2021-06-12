const router = require('express').Router();
const FF = require('../../controller/controllerCategories/controllerCategoriesFF');


router.get('/FF', FF.get_FF);
router.post('/FF',FF.post_FF);
router.put('/FF/:id',FF.update_FF);
router.delete('/FF/:id',FF.delete_FF);

module.exports = router;
