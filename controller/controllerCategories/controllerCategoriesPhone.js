const Phone = require('../../models/modelsCategories/modelsCategoriesPhone');

module.exports.get_Phone = (req,res) => {
    Phone.find().sort({date:-1})
    .then(Phone => res.json(Phone))
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}

module.exports.post_Phone = (req,res) => {
    const newPhone = new Phone(req.body);
    newPhone.save()
    .then(Phone => res.json(Phone))
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}

module.exports.update_Phone = (req,res) => {
    Phone.findByIdAndUpdate({_id: req.params.id},req.body.price).then(function(Phone){
    Phone.findOne({_id: req.params.id})
        .then(function(Phone){
            res.json(Phone);
        })
        .catch((error)=> {
            console.log(error.message); // "oh, no!"
          })
    });
}

module.exports.delete_Phone = (req,res) => {
    Phone.findByIdAndDelete({_id: req.params.id})
    .then(function(Phone){
        res.json({success: true});
    })
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}