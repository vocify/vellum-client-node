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
import { FinishReasonEnum } from './finishReasonEnum';
import { NormalizedLogProbs } from './normalizedLogProbs';

export class NormalizedCompletion {
    'id': string;
    'externalId'?: string | null;
    'text': string;
    'finishReason': FinishReasonEnum;
    'logprobs': NormalizedLogProbs;
    'modelVersionId': string;

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
            "name": "finishReason",
            "baseName": "finish_reason",
            "type": "FinishReasonEnum"
        },
        {
            "name": "logprobs",
            "baseName": "logprobs",
            "type": "NormalizedLogProbs"
        },
        {
            "name": "modelVersionId",
            "baseName": "model_version_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return NormalizedCompletion.attributeTypeMap;
    }
}

export namespace NormalizedCompletion {
}
