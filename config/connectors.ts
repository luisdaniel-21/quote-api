import { MySQLConnector, MongoDBConnector } 
    from "../dependences.ts";

export const connectorMariaDB = new MySQLConnector({
    database: 'quotes',
    host: 'localhost',
    username: 'devDeno',
    password: 't0ps3cr3t',
    port: 3306, //modificar el puerto segun este en MariaDB
});

export  const connectorMongoDB = new MongoDBConnector({
    //uri:'mongodb://cardoso:t0ps3cr3t@localhost:27017/?authMechanism=SCRAM-SHA-256&authSource=quotes',
    //uri: 'mongodb://daniel:luis1@localhost:27017',
    uri: 'mongodb://daniel:luis1@172.17.0.2:27017',    //Configurar segun MongoDB
    database: 'quotes',
});
