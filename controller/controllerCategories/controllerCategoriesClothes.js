const Clothes = require('../../models/modelsCategories/modelsCategoriesClothes');

module.exports.get_Clothes = (req,res) => {
    Clothes.find().sort({date:-1})
    .then(Clothes => res.json(Clothes))
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}

module.exports.post_Clothes = (req,res) => {
    const newClothes = new Clothes(req.body);
    newClothes.save()
    .then(Clothes => res.json(Clothes))
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}

module.exports.update_Clothes = (req,res) => {
    Clothes.findByIdAndUpdate({_id: req.params.id},req.body.price).then(function(Clothes){
        Clothes.findOne({_id: req.params.id})
        .then(function(Clothes){
            res.json(Clothes);
        })
        .catch((error)=> {
            console.log(error.message); // "oh, no!"
          })
    });
}

module.exports.delete_Clothes = (req,res) => {
    Clothes.findByIdAndDelete({_id: req.params.id})
    .then(function(Clothes){
        res.json({success: true});
    })
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}