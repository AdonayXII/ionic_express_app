module.exports = (sequelize, Sequelize) => {
  const Monster = sequelize.define("monster", {
    name: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    },
    filename: {
      type: Sequelize.STRING
    }
  });

  return Monster;
}