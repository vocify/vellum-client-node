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

export class SubmitCompletionActual {
    'id'?: string | null;
    'externalId'?: string | null;
    'text'?: string | null;
    'quality'?: number | null;
    'timestamp'?: Date | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "externalId",
            "baseName": "external_id",
            "type": "string"
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string"
        },
        {
            "name": "quality",
            "baseName": "quality",
            "type": "number"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return SubmitCompletionActual.attributeTypeMap;
    }
}

