const FF = require('../../models/modelsCategories/modelsCategoriesFF');

module.exports.get_FF = (req,res) => {
    FF.find().sort({date:-1})
    .then( FF=> res.json(FF))
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}

module.exports.post_FF = (req,res) => {
    const newFF = new FF(req.body);
    newFF.save()
    .then(FF => res.json(FF))
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}

module.exports.update_FF = (req,res) => {
    FF.findByIdAndUpdate({_id: req.params.id},req.body.price).then(function(FF){
        FF.findOne({_id: req.params.id})
        .then(function(FF){
            res.json(FF);
        })
        .catch((error)=> {
            console.log(error.message); // "oh, no!"
          })
    });
}

module.exports.delete_FF = (req,res) => {
    FF.findByIdAndDelete({_id: req.params.id})
    .then(function(FF){
        res.json({success: true});
    })
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}