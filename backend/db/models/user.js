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
        len: [1, 100]
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 500]
      },
    },
    workplace: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 100]
      },
    },
    city: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 200]
      },
    },
    state: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 200]
      },
    },
    birthCity: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 200]
      },
    },
    birthState: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 200]
      },
    },
    profileImageUrl: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 3000]
      },
    },
    backgroundImageUrl: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 3000]
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
    const { id, email } = this; // context will be the User instance
    return { id, email };
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
    User.belongsToMany(models.User, {
      as: 'Friend',
      through: 'Friends',
      otherKey: 'id',
      foreignKey: 'friendId'
    })
    User.belongsToMany(models.User, {
      as: 'Self',
      through: 'Friends',
      otherKey: 'id',
      foreignKey: 'sessionUserId'
    })

    User.belongsToMany(models.User, {
      as: 'FriendRequest',
      through: 'FriendRequests',
      otherKey: 'id',
      foreignKey: 'friendId'
    })
    User.belongsToMany(models.User, {
      as: 'Requester',
      through: 'FriendRequests',
      otherKey: 'id',
      foreignKey: 'sessionUserId'
    })

    User.hasMany(models.Post, { foreignKey: 'userId' })
    User.hasMany(models.Comment, { foreignKey: 'userId' })

  };

  return User;
};
