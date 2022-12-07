/**
 * @type {object} ValidateErrorEndpoint - Estructura de validación de error de endpoint
 * @property {string} - Es la url del endpoint
 * @property {number} - Es el status de error del endpoint
 */
export type ValidateErrorEndpoint = {
    url: string;
    status: number;
}