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

import { ServerMessageHTTPDefinition } from '../models/ServerMessageHTTPDefinition';
import { HttpFile } from '../http/http';

export class ServerMRequest {
    /**
    * The app reference of the user/organisation
    */
    'app'?: string;
    /**
    * if empty, the current timestamp when the message was received would be used
    */
    'createdAt'?: number;
    /**
    * IPAddress is used to identify the iP of the user. this is optional and can be left
    */
    'ipAddress'?: string;
    'method'?: string;
    'path'?: string;
    'request'?: ServerMessageHTTPDefinition;
    'response'?: ServerMessageHTTPDefinition;
    'statusCode'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "app",
            "baseName": "app",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "ipAddress",
            "baseName": "ip_address",
            "type": "string",
            "format": ""
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "string",
            "format": ""
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "request",
            "baseName": "request",
            "type": "ServerMessageHTTPDefinition",
            "format": ""
        },
        {
            "name": "response",
            "baseName": "response",
            "type": "ServerMessageHTTPDefinition",
            "format": ""
        },
        {
            "name": "statusCode",
            "baseName": "status_code",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ServerMRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
