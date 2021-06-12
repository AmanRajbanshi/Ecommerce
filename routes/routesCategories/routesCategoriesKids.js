const router = require('express').Router();
const Kids = require('../../controller/controllerCategories/controllerCategoriesKids');


router.get('/Kids', Kids.get_Kids);
router.post('/Kids',Kids.post_Kids);
router.put('/Kids/:id',Kids.update_Kids);
router.delete('/Kids/:id',Kids.delete_Kids);

module.exports = router;
