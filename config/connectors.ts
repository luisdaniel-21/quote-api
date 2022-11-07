
import { MongoClient, ClientMariaDB } 
    from "../dependences.ts";


const mongoClient = new MongoClient();
const URI_MONGO="mongodb://daniel:12345@127.0.0.1:27017/quotes?authMechanism=SCRAM-SHA-256&authSource=admin";
export const connectorMongoDB = await mongoClient.connect(URI_MONGO);

const CONN_MARIADB = {
    hostname: "127.0.0.1",
    port: 3306,
    username: "devDeno",
    password: "t0ps3cr3t",
    db: "quotes",
    poolSize: 10};

export const connectorMariaDB = await new ClientMariaDB().connect(CONN_MARIADB);

