const router = require('express').Router();
const Contact = require('../../controller/controllerCategories/controllerCategoriesContact.js');


router.get('/Contact', Contact.get_Contact);
router.post('/Contact',Contact.post_Contact);
//router.put('/Contact/:id',Contact.update_Contact);
//router.delete('/Contact/:id',Contact.delete_Contact);

module.exports = router;
