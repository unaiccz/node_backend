*Set up your model*
import db from "../database/db.js";
import { DataTypes } from "sequelize";

const BlogModel = db.define('messages',{
    emisor:{
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
