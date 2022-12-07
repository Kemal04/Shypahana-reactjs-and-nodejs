const { DataTypes } = require('sequelize');
const sequelize = require("../data/db");

const Users = sequelize.define("users", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

const Resorts = sequelize.define("resorts", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

const Rooms = sequelize.define("rooms", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    capacity: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    size: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

const Booking = sequelize.define("booking", {
    checkIn: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    checkOut: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mark: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

Resorts.hasMany(Rooms, { onDelete: "cascade" });
Rooms.belongsTo(Resorts)

Movie.belongsToMany(Actor, { through: ActorMovies });
Actor.belongsToMany(Movie, { through: ActorMovies });

module.exports = {
    Users,
    Resorts,
    Rooms,
    Booking,
};