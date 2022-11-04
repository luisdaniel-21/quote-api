import { DataTypes, Database, Model } 
    from "../dependences.ts";

import { connectorMariaDB } 
    from "../config/connectors.ts";    


      
const mariaDB = new Database(connectorMariaDB);  

class UserModel extends Model { 
    static table = "user"; 
    static fields = { 
        _id: {
            primaryKey: true,
        }, 
        id: { 
            type: DataTypes.INTEGER, 
            primaryKey: true, autoIncrement: true, 
        }, 
        account: { 
            type: DataTypes.STRING,
            length: 20,
            unique:true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            length: 128,
            allowNull: false,
        }
    };
    //--- ! indica no-null 
    id!: number; 
    account!: string; 
    password!: string; 

};

mariaDB.link([UserModel]); 

export { UserModel }; 

