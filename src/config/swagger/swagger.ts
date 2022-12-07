import expressJSDocSwagger, { Options } from "express-jsdoc-swagger";

import { Request, Response, Application } from "express";

const options: Options = {
  info: {
    title: "API - NAME",
    version: "1.0.0",
    description: "api rest de prueba",
  },
  security: {
    BearerAuth: {
      type: "http",
      scheme: "bearer",
    },
  },
  baseDir: __dirname,
  filesPattern: ["../../../src/**/*.ts", "../../../dist/src/**/*.js"],
  swaggerUIPath: "/api-docs",
  exposeSwaggerUI: true,
  exposeApiDocs: false,
  apiDocsPath: "/v3/api-docs",
  notRequiredAsNullable: false,
};

/**
 * Preconfiguración de swagger
 */
export const SwaggerSpec = async (app: Application) => {
  expressJSDocSwagger(app)(options);
};
