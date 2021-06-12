const router = require('express').Router();
const Foods = require('../../controller/controllerCategories/controllerCategoriesFoods');


router.get('/Foods', Foods.get_Foods);
router.post('/Foods',Foods.post_Foods);
router.put('/Foods/:id',Foods.update_Foods);
router.delete('/Foods/:id',Foods.delete_Foods);

module.exports = router;
