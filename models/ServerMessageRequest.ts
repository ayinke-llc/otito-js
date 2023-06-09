/**
 * Otito API documentation
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.1.0
 * Contact: contact@ayinke.ventures
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ServerMRequest } from '../models/ServerMRequest';
import { HttpFile } from '../http/http';

export class ServerMessageRequest {
    'messages'?: Array<ServerMRequest>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "messages",
            "baseName": "messages",
            "type": "Array<ServerMRequest>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ServerMessageRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

