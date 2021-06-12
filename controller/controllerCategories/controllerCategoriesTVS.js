const TVS = require('../../models/modelsCategories/modelsCategoriesTVS');

module.exports.get_TVS = (req,res) => {
    TVS.find().sort({date:-1})
    .then(TVS => res.json(TVS))
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}

module.exports.post_TVS = (req,res) => {
    const newTVS = new TVS(req.body);
    newTVS.save()
    .then(TVS => res.json(TVS))
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}

module.exports.update_TVS = (req,res) => {
    TVS.findByIdAndUpdate({_id: req.params.id},req.body.price).then(function(TVS){
    TVS.findOne({_id: req.params.id})
        .then(function(TVS){
            res.json(TVS);
        })
        .catch((error)=> {
            console.log(error.message); // "oh, no!"
          })
    });
}

module.exports.delete_TVS = (req,res) => {
    TVS.findByIdAndDelete({_id: req.params.id})
    .then(function(TVS){
        res.json({success: true});
    })
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}