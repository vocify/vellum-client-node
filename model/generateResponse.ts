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
import { NormalizedCompletion } from './normalizedCompletion';
import { ProviderEnum } from './providerEnum';

export class GenerateResponse {
    'provider': ProviderEnum;
    'completions': Array<Array<NormalizedCompletion>>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "ProviderEnum"
        },
        {
            "name": "completions",
            "baseName": "completions",
            "type": "Array<Array<NormalizedCompletion>>"
        }    ];

    static getAttributeTypeMap() {
        return GenerateResponse.attributeTypeMap;
    }
}

export namespace GenerateResponse {
}