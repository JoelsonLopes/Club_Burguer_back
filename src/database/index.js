import Sequelize from "sequelize";
import mongoose from "mongoose";

import User from "../app/models/User";
import Product from "../app/models/Product";
import Category from "../app/models/Category";

// import configDatabase from "../config/database";

const models = [User, Product, Category];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize('postgresql://postgres:lhQtaPxJxY6V1wpy5UZe@containers-us-west-166.railway.app:5564/railway');
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      );
  }

  mongo() {
    mongoose.set("strictQuery", false);
    this.mongoConnection = mongoose.connect(
      "mongodb://mongo:32GkefTWGZbFSuiZSXot@containers-us-west-182.railway.app:5732",
      {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
      },
    );
  }
}

export default new Database();
