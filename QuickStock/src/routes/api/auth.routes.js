const router = require("express").Router();

// Rutas de autenticación
router.post("/login", (req, res) => {
  res.json({ message: "Ruta de login" });
});

router.post("/register", (req, res) => {
  res.json({ message: "Ruta de registro" });
});

module.exports = router;
