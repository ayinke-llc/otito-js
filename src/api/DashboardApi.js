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
import ServerAPIError from '../model/ServerAPIError';
import ServerUrlResp from '../model/ServerUrlResp';

/**
* Dashboard service.
* @module api/DashboardApi
* @version 0.1.0
*/
export default class DashboardApi {

    /**
    * Constructs a new DashboardApi. 
    * @alias module:api/DashboardApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the dashboardAccessPost operation.
     * @callback module:api/DashboardApi~dashboardAccessPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServerUrlResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create access token
     * @param {module:api/DashboardApi~dashboardAccessPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServerUrlResp}
     */
    dashboardAccessPost(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ServerUrlResp;
      return this.apiClient.callApi(
        '/dashboard_access', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
