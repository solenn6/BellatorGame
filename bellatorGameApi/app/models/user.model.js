module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      date_of_birth: {
          type: Sequelize.DATE
      },
        date_of_inscription: {
          type: Sequelize.DATE
      },
    });
  
    return User;
  };
