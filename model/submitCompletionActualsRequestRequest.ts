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
import { SubmitCompletionActualRequest } from './submitCompletionActualRequest';

export class SubmitCompletionActualsRequestRequest {
    'deploymentId'?: string | null;
    'deploymentName'?: string | null;
    'actuals': Array<SubmitCompletionActualRequest>;

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
            "name": "actuals",
            "baseName": "actuals",
            "type": "Array<SubmitCompletionActualRequest>"
        }    ];

    static getAttributeTypeMap() {
        return SubmitCompletionActualsRequestRequest.attributeTypeMap;
    }
}
