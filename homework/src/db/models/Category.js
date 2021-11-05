import sequelize from "../index.js";
import x from "sequelize";

const { DataTypes } = x;

const Category = sequelize.define(
  "category",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isElectronics: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

export default Category;
