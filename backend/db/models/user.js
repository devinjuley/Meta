'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    // username: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [3, 30],
    //     isNotEmail(value) {
    //       if (Validator.isEmail(value)) {
    //         throw new Error('Cannot be an email.');
    //       }
    //     },
    //   },
    // },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 256]
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 256]
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 256]
      },
    },
    workplace: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 256]
      },
    },
    city: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 256]
      },
    },
    state: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 256]
      },
    },
    birthCity: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 256]
      },
    },
    birthState: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 256]
      },
    },
    profileImageUrl: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 256]
      },
    },
    backgroundImageUrl: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 256]
      },
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      },
    },
  },
    {
      defaultScope: {
        attributes: {
          exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt'],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ['hashedPassword'] },
        },
        loginUser: {
          attributes: {},
        },
      },
    });

  User.prototype.toSafeObject = function () { // remember, this cannot be an arrow function
    const { id, username, email } = this; // context will be the User instance
    return { id, username, email };
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };

  User.login = async function ({ email, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        email: email
      }
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.signup = async function ({ firstName, lastName, email, workplace, city, state, birthCity, birthState, profileImageUrl, backgroundImageUrl, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      firstName,
      lastName,
      email,
      workplace,
      city,
      state,
      birthCity,
      birthState,
      profileImageUrl,
      backgroundImageUrl,
      hashedPassword,
    });
    return await User.scope('currentUser').findByPk(user.id);
  };

  User.associate = function (models) {
    // associations can be defined here
  };

  return User;
};
