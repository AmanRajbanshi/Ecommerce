const router = require('express').Router();
const Phone = require('../../controller/controllerCategories/controllerCategoriesPhone');


router.get('/Phone', Phone.get_Phone);
router.post('/Phone',Phone.post_Phone);
router.put('/Phone/:id',Phone.update_Phone);
router.delete('/Phone/:id',Phone.delete_Phone);

module.exports = router;
