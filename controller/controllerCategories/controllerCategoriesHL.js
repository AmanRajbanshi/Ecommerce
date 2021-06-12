const HL = require('../../models/modelsCategories/modelsCategoriesHL');

module.exports.get_HL = (req,res) => {
    HL.find().sort({date:-1})
    .then( HL=> res.json(HL))
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}

module.exports.post_HL = (req,res) => {
    const newHL = new HL(req.body);
    newHL.save()
    .then(HL => res.json(HL))
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}

module.exports.update_HL = (req,res) => {
    HL.findByIdAndUpdate({_id: req.params.id},req.body.price).then(function(HL){
        HL.findOne({_id: req.params.id})
        .then(function(HL){
            res.json(HL);
        })
        .catch((error)=> {
            console.log(error.message); // "oh, no!"
          })
    });
}

module.exports.delete_HL = (req,res) => {
    HL.findByIdAndDelete({_id: req.params.id})
    .then(function(HL){
        res.json({success: true});
    })
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}