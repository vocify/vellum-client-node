/**
 * Vellum Predict API
 * Documentation of API endpoints used to make predictions through Vellum
 *
 * The version of the OpenAPI document: 1.0.0 (v1)
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class GenerateRequest {
    'deploymentId'?: string | null;
    'deploymentName'?: string | null;
    'inputValues': Array<{ [key: string]: any; }>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "deploymentId",
            "baseName": "deployment_id",
            "type": "string"
        },
        {
            "name": "deploymentName",
            "baseName": "deployment_name",
            "type": "string"
        },
        {
            "name": "inputValues",
            "baseName": "input_values",
            "type": "Array<{ [key: string]: any; }>"
        }    ];

    static getAttributeTypeMap() {
        return GenerateRequest.attributeTypeMap;
    }
}

