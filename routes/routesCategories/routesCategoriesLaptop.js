const router = require('express').Router();
const Laptop = require('../../controller/controllerCategories/controllerCategoriesLaptop');


router.get('/Laptop', Laptop.get_Laptop);
router.post('/Laptop',Laptop.post_Laptop);
router.put('/Laptop/:id',Laptop.update_Laptop);
router.delete('/Laptop/:id',Laptop.delete_Laptop);

module.exports = router;
