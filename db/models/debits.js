"use strict";

const Sequelize = require("sequelize");
const db = require("../index.js");
const people = require("./people");

const Debits = db.define("debits", {
  transaction_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  person_id: {
    type: Sequelize.INTEGER,
    references: {
      model: people,
      key: "person_id",
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  post: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  created_at: {
    type: Sequelize.DATE
  },
  updated_at: {
    type: Sequelize.DATE
  }
});

module.exports = Debits;
