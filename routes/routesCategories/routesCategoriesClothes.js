const router = require('express').Router();
const Clothes = require('../../controller/controllerCategories/controllerCategoriesClothes');


router.get('/Clothes', Clothes.get_Clothes);
router.post('/Clothes',Clothes.post_Clothes);
router.put('/Clothes/:id',Clothes.update_Clothes);
router.delete('/Clothes/:id',Clothes.delete_Clothes);

module.exports = router;
