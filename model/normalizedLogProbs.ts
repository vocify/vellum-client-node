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
import { NormalizedTokenLogProbs } from './normalizedTokenLogProbs';

export class NormalizedLogProbs {
    'tokens': Array<NormalizedTokenLogProbs>;
    'likelihood': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "tokens",
            "baseName": "tokens",
            "type": "Array<NormalizedTokenLogProbs>"
        },
        {
            "name": "likelihood",
            "baseName": "likelihood",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return NormalizedLogProbs.attributeTypeMap;
    }
}

