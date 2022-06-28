const mongoose = require("mongoose");
//usuraio:jvega
//contraseña:ervIh8SNm8APZObr
//intenbtamos conectarnos
try {
  //se intenta establecer una conexion con los datos de conexion
  mongoose.connect("mongodb+srv://jvega:ervIh8SNm8APZObr@cluster0.xpxkzmc.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true }
  );
  //en caso de astablecer la conexion, se muestra en consola ente mensaje
  console.log("connected databases.");
} catch (e){
  //en caso de haer un error se muestra en consola el error
  console.error(e);
}