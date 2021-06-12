const Electronic = require('../../models/modelsCategories/modelsCategoriesElectronic');

module.exports.get_Electronic = (req,res) => {
    Electronic.find().sort({date:-1})
    .then( Electronic=> res.json(Electronic))
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}

module.exports.post_Electronic = (req,res) => {
    const newElectronic = new Electronic(req.body);
    newElectronic.save()
    .then(Electronic => res.json(Electronic))
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}

module.exports.update_Electronic = (req,res) => {
    Electronic.findByIdAndUpdate({_id: req.params.id},req.body.price).then(function(Electronic){
        Electronic.findOne({_id: req.params.id})
        .then(function(Electronic){
            res.json(Electronic);
        })
        .catch((error)=> {
            console.log(error.message); // "oh, no!"
          })
    });
}

module.exports.delete_Electronic = (req,res) => {
    Electronic.findByIdAndDelete({_id: req.params.id})
    .then(function(Electronic){
        res.json({success: true});
    })
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}