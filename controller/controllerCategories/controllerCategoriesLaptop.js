const Laptop = require('../../models/modelsCategories/modelsCategoriesLaptop');

module.exports.get_Laptop = (req,res) => {
    Laptop.find().sort({date:-1})
    .then(Laptop => res.json(Laptop))
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}

module.exports.post_Laptop = (req,res) => {
    const newLaptop = new Laptop(req.body);
    newLaptop.save()
    .then(Laptop => res.json(Laptop))
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}

module.exports.update_Laptop = (req,res) => {
    Laptop.findByIdAndUpdate({_id: req.params.id},req.body.price).then(function(Laptop){
        Laptop.findOne({_id: req.params.id})
        .then(function(Laptop){
            res.json(Laptop);
        })
        .catch((error)=> {
            console.log(error.message); // "oh, no!"
          })
    });
}

module.exports.delete_Laptop = (req,res) => {
    Laptop.findByIdAndDelete({_id: req.params.id})
    .then(function(Laptop){
        res.json({success: true});
    })
    .catch((error)=> {
        console.log(error.message); // "oh, no!"
      })
}