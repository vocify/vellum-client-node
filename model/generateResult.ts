/**
 * Vellum Client API
 * Documentation of API endpoints of Vellum
 *
 * The version of the OpenAPI document: 1.0.0 (v1)
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { GenerateResultData } from './generateResultData';
import { GenerateResultError } from './generateResultError';

export class GenerateResult {
    'data'?: GenerateResultData;
    'error'?: GenerateResultError;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "GenerateResultData"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "GenerateResultError"
        }    ];

    static getAttributeTypeMap() {
        return GenerateResult.attributeTypeMap;
    }
}

