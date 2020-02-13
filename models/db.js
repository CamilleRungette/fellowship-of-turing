var mongoose = require('mongoose');
var options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true
}


mongoose.connect("mongodb+srv://Camille:Camille@cluster0-ddzx5.mongodb.net/lacommunaute?retryWrites=true&w=majority", options, error =>{
	if (error) {
   console.log("ATTENTION ERREUR:", error);
  } else {
  	console.log("Serveur BDD connecté")
  }
});

module.exports = mongoose;