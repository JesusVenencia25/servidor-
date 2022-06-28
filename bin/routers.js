module.exports = (app) => {
  app.get("/usuarios", (req, res) => {
    res.send(
      [
        {
          nombre: "Juan",
          apellido: "Vega",
          edad: "23"
        },
        {
          nombre: "Andres",
          apellido: "Vergara",
          edad: "19"
        },
        {
          nombre: "Luisa",
          apellido: "Fernandez",
          edad: "23"
        },
        {
          nombre: "Jesus",
          apellido: "Benitez",
          edad: "18"
        },
        {
          nombre: "Andrea",
          apellido: "Padilla",
          edad: "22"
        }
      ]
    )
  })
}