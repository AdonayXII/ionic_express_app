const db = require("../models");
const Monster = db.monsters;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.name || !req.body.type) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }
  const monster = {
    name: req.body.name,
    type: req.body.type,
    filename: req.file ? req.file.filename : ""
  }

  Monster.create(monster).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the monster"
    })
  });
};

exports.findAll = (req, res) => {
  Monster.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all Monsters"
    })
  })
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Monster.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Monster.findByPk(id).then(monster => {
    const imgMonster = monster.filename
    let updateMonster = {}

      if (monster.filename = req.file) {
        updateMonster = {
          name: req.body.name,
          type: req.body.type,
          filename: req.file ? req.file.filename : ""
        }
        res.send({
          // message: `Cannot update db_monster with id=${id}. Maybe db_monster was not found or req.body is empty!`
          message: 'updated 1'
        });
        return monster.update(updateMonster)
      }
      else if(((req.body.name == monster.name) && (req.body.type == monster.type)) || ((req.body.name != monster.name) && (req.body.type != monster.type))){
        updateMonster = {
          name: req.body.name,
          type: req.body.type,
          filename: imgMonster
        }
        res.send({ message: `update 2` })
        return monster.update(updateMonster)
      }
  }).catch(err => {
    res.status(500).send({
      message: "no se puede cambiar"
    });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Monster.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
        });
      } else {
        res.send({
          message: `Cannot delete the monster with id=${id}. Maybe db_monsters was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete db_monsters with id=" + id
      });
    });
};
