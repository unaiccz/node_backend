//Set up your model
//docs => https://sequelize.org/docs/v6/core-concepts/model-basics/
import db from "../database/db.js";
import { DataTypes } from "sequelize";

const BlogModel = db.define('notas',{
    Title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    contenido:{
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    timestamps: false,  // desactiva los campos createdAt y updatedAt
});

export default BlogModel;
