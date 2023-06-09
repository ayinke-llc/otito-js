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
import ServerAPIStatus from "../model/ServerAPIStatus";
import ServerMessageRequest from "../model/ServerMessageRequest";

/**
 * Message service.
 * @module api/MessageApi
 * @version 0.1.0
 */
export default class MessageApi {
  /**
   * Constructs a new MessageApi.
   * @alias module:api/MessageApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  constructor(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the messagesPost operation.
   * @callback module:api/MessageApi~messagesPostCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ServerAPIStatus} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * create messages
   * @param {module:model/ServerMessageRequest} message Request body
   * @param {module:api/MessageApi~messagesPostCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ServerAPIStatus}
   */
  messagesPost(message, callback) {
    let postBody = message;
    // verify the required parameter 'message' is set
    if (message === undefined || message === null) {
      throw new Error(
        "Missing the required parameter 'message' when calling messagesPost"
      );
    }

    let pathParams = {};
    let queryParams = {};
    let headerParams = {};
    let formParams = {};

    let authNames = ["ApiKeyAuth"];
    let contentTypes = ["application/json"];
    let accepts = ["application/json"];
    let returnType = ServerAPIStatus;
    return this.apiClient.callApi(
      "/messages",
      "POST",
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
