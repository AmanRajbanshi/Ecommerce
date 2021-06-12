const router = require('express').Router();
const TVS = require('../../controller/controllerCategories/controllerCategoriesTVS');


router.get('/TVS', TVS.get_TVS);
router.post('/TVS',TVS.post_TVS);
router.put('/TVS/:id',TVS.update_TVS);
router.delete('/TVS/:id',TVS.delete_TVS);

module.exports = router;
