const router = require("express").Router();

router.use("/auth", require("./api/auth.routes"));
router.use("/categorias", require("./api/categorias.routes"));
router.use("/facturas", require("./api/facturas.routes"));
router.use("/productos", require("./api/productos.routes"));
router.use("/proveedores", require("./api/proveedores.routes"));
router.use("/usuarios", require("./api/usuarios.routes"));
router.use("/ventas", require("./api/ventas.routes"));

module.exports = router;