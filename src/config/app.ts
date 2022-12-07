import express, {Application} from 'express';
import 'express-async-errors';
const app:Application = express();
import bodyParser from 'body-parser';
import enviroment from 'dotenv-flow';
import cors from 'cors';
enviroment.config();

//Config Cors
app.use(cors());

//Config BodyParser
app.use(bodyParser.json({ limit: '5mb', type: 'application/json' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));

export default app;