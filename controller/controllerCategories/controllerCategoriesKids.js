const Kids = require('../../models/modelsCategories/modelsCategoriesKids');

module.exports.get_Kids = (req,res) => {
    Kids.find().sort({date:-1})
    .then(Kids => res.json(Kids))
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}

module.exports.post_Kids = (req,res) => {
    const newKids = new Kids(req.body);
    newKids.save()
    .then(Kids => res.json(Kids))
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}

module.exports.update_Kids = (req,res) => {
    Kids.findByIdAndUpdate({_id: req.params.id},req.body.price).then(function(Kids){
    Kids.findOne({_id: req.params.id})
        .then(function(Kids){
            res.json(Kids);
        })
        .catch((error)=> {
            console.log(error.message); // "oh, no!"
          })
    });
}

module.exports.delete_Kids = (req,res) => {
    Kids.findByIdAndDelete({_id: req.params.id})
    .then(function(Kids){
        res.json({success: true});
    })
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}