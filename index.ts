import {Request, Response} from "express";

//**************** Configuración ******************************//
import app from "./src/config/app";
import { SwaggerSpec } from "./src/config/swagger/swagger";
import { DBMysql } from "./src/config/mysql/mysqlConnection";
import { HandlerException } from "./src/config/handlerException/handlerException";

const port = process.env.PORT;

//Handler de excepciones
app.use(HandlerException);

//MySQL
DBMysql();

//Swagger
SwaggerSpec(app);

app.listen(port, () => {
    console.log(`[Server]: Server running at http://localhost:${port}`);
});