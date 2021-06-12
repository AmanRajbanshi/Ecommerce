const MF = require('../../models/modelsCategories/modelsCategoriesMF');

module.exports.get_MF = (req,res) => {
    MF.find().sort({date:-1})
    .then( MF=> res.json(MF))
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}

module.exports.post_MF = (req,res) => {
    const newMF = new MF(req.body);
    newMF.save()
    .then(MF => res.json(MF))
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}

module.exports.update_MF = (req,res) => {
    MF.findByIdAndUpdate({_id: req.params.id},req.body.price).then(function(Electonic){
        MF.findOne({_id: req.params.id})
        .then(function(MF){
            res.json(MF);
        })
        .catch((error)=> {
            console.log(error.message); // "oh, no!"
          })
    });
}

module.exports.delete_MF = (req,res) => {
    MF.findByIdAndDelete({_id: req.params.id})
    .then(function(MF){
        res.json({success: true});
    })
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}