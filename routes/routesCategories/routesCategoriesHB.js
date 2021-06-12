const router = require('express').Router();
const HB = require('../../controller/controllerCategories/controllerCategoriesHB');


router.get('/HB', HB.get_HB);
router.post('/HB',HB.post_HB);
router.put('/HB/:id',HB.update_HB);
router.delete('/HB/:id',HB.delete_HB);

module.exports = router;
