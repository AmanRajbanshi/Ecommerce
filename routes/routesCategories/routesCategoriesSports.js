const router = require('express').Router();
const Sports = require('../../controller/controllerCategories/controllerCategoriesSports');


router.get('/Sports', Sports.get_Sports);
router.post('/Sports',Sports.post_Sports);
router.put('/Sports/:id',Sports.update_Sports);
router.delete('/Sports/:id',Sports.delete_Sports);

module.exports = router;
