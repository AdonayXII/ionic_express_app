module.exports = app => {
  const monsters = require("../controllers/monster.controller");
  var upload = require('../multer/upload');

  var router = require("express").Router();

  router.post("/", upload.single('filename'), monsters.create);

  router.get("/", monsters.findAll);

  router.get("/:id", monsters.findOne);

  router.put("/:id", upload.single('filename'), monsters.update);

  router.delete("/:id",  monsters.delete);

  app.use("/api/monsters", router);
}