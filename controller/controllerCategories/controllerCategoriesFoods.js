const Foods = require('../../models/modelsCategories/modelsCategoriesFoods');

module.exports.get_Foods = (req,res) => {
    Foods.find().sort({date:-1})
    .then(Foods => res.json(Foods))
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}

module.exports.post_Foods = (req,res) => {
    const newFoods = new Foods(req.body);
    newFoods.save()
    .then(Foods => res.json(Foods))
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}

module.exports.update_Foods = (req,res) => {
    Foods.findByIdAndUpdate({_id: req.params.id},req.body.price).then(function(Foods){
        Foods.findOne({_id: req.params.id})
        .then(function(Foods){
            res.json(Foods);
        })
        .catch((error)=> {
            console.log(error.message); // "oh, no!"
          })
    });
}

module.exports.delete_Foods = (req,res) => {
    Foods.findByIdAndDelete({_id: req.params.id})
    .then(function(Foods){
        res.json({success: true});
    })
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}