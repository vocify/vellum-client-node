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
import { GenerateOptionsRequest } from './generateOptionsRequest';
import { GenerateRequestRequest } from './generateRequestRequest';

export class GenerateRequestBodyRequest {
    'deploymentId'?: string | null;
    'deploymentName'?: string | null;
    'requests': Array<GenerateRequestRequest>;
    'options'?: GenerateOptionsRequest | null;

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
            "name": "requests",
            "baseName": "requests",
            "type": "Array<GenerateRequestRequest>"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "GenerateOptionsRequest"
        }    ];

    static getAttributeTypeMap() {
        return GenerateRequestBodyRequest.attributeTypeMap;
    }
}

