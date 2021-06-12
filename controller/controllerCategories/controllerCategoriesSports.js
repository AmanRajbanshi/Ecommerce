const Sports = require('../../models/modelsCategories/modelsCategoriesSports');

module.exports.get_Sports = (req,res) => {
    Sports.find().sort({date:-1})
    .then(Sports => res.json(Sports))
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}

module.exports.post_Sports = (req,res) => {
    const newSports = new Sports(req.body);
    newSports.save()
    .then(Sports => res.json(Sports))
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}

module.exports.update_Sports = (req,res) => {
    Sports.findByIdAndUpdate({_id: req.params.id},req.body).then(function(Sports){
    Sports.findOne({_id: req.params.id})
        .then(function(Sports){
            res.json(Sports);
        })
        .catch((error)=> {
            console.log(error.message); // "oh, no!"
          })
    });
}

module.exports.delete_Sports = (req,res) => {
    Sports.findByIdAndDelete({_id: req.params.id})
    .then(function(Sports){
        res.json({success: true});
    })
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}