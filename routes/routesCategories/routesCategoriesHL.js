const router = require('express').Router();
const HL = require('../../controller/controllerCategories/controllerCategoriesHL.js');


router.get('/HL', HL.get_HL);
router.post('/HL',HL.post_HL);
router.put('/HL/:id',HL.update_HL);
router.delete('/HL/:id',HL.delete_HL);

module.exports = router;
