const router = require('express').Router();
const MF = require('../../controller/controllerCategories/controllerCategoriesMF');


router.get('/MF', MF.get_MF);
router.post('/MF',MF.post_MF);
router.put('/MF/:id',MF.update_MF);
router.delete('/MF/:id',MF.delete_MF);

module.exports = router;
