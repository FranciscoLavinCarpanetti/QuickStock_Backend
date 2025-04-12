const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ message: "Lista de ventas" });
});

module.exports = router;
