/**
 * Otito API documentation
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: contact@ayinke.ventures
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import ServerAPIError from "../model/ServerAPIError";
import ServerSwaggerMessageResp from "../model/ServerSwaggerMessageResp";

/**
 * Messages service.
 * @module api/MessagesApi
 * @version 0.1.0
 */
export default class MessagesApi {
  /**
   * Constructs a new MessagesApi.
   * @alias module:api/MessagesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the messagesGet operation.
   * @callback module:api/MessagesApi~messagesGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ServerSwaggerMessageResp} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * list messages
   * @param {module:api/MessagesApi~messagesGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ServerSwaggerMessageResp}
   */
  messagesGet(callback) {
    let postBody = null;

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["ApiKeyAuth"];
    let contentTypes = [];
    let accepts = ["application/json"];
    let returnType = ServerSwaggerMessageResp;
    return this.apiClient.callApi(
      "/messages",
      "GET",
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      null,
      callback
    );
  }
}
