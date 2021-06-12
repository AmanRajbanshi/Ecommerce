const HB = require('../../models/modelsCategories/modelsCategoriesHB');

module.exports.get_HB = (req,res) => {
    HB.find().sort({date:-1})
    .then( HB=> res.json(HB))
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}

module.exports.post_HB = (req,res) => {
    const newHB = new HB(req.body);
    newHB.save()
    .then(HB => res.json(HB))
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}

module.exports.update_HB = (req,res) => {
    HB.findByIdAndUpdate({_id: req.params.id},req.body.price).then(function(HB){
        HB.findOne({_id: req.params.id})
        .then(function(HB){
            res.json(HB);
        })
        .catch((error)=> {
            console.log(error.message); // "oh, no!"
          })
    });
}

module.exports.delete_HB = (req,res) => {
    HB.findByIdAndDelete({_id: req.params.id})
    .then(function(HB){
        res.json({success: true});
    })
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}