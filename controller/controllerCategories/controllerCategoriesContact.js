const Contact = require('../../models/modelsCategories/modelsCategoriesContact');

module.exports.get_Contact = (req,res) => {
    Contact.find().sort({date:-1})
    .then( Contact=> res.json(Contact))
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}

module.exports.post_Contact = (req,res) => {
    const newContact = new Contact(req.body);
    newContact.save()
    .then(Contact => res.json(Contact))
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}

module.exports.update_Contact = (req,res) => {
    Contact.findByIdAndUpdate({_id: req.params.id},req.body).then(function(Contact){
        Contact.findOne({_id: req.params.id})
        .then(function(Contact){
            res.json(HL);
        })
        .catch((error)=> {
            console.log(error.message); // "oh, no!"
          })
    });
}

module.exports.delete_Contact = (req,res) => {
    Contact.findByIdAndDelete({_id: req.params.id})
    .then(function(Contact){
        res.json({success: true});
    })
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}