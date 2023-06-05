// TODO: better import syntax?
import {
  BaseAPIRequestFactory,
  RequiredError,
  COLLECTION_FORMATS,
} from "./baseapi";
import { Configuration } from "../configuration";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
  HttpFile,
} from "../http/http";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "./exception";
import { canConsumeForm, isCodeInRange } from "../util";
import { SecurityAuthentication } from "../auth/auth";

import { ServerAPIError } from "../models/ServerAPIError";
import { ServerAppresp } from "../models/ServerAppresp";
import { ServerCreateApplicationRequest } from "../models/ServerCreateApplicationRequest";

/**
 * no description
 */
export class ApplicationApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * create a new app
   * @param message Request body
   */
  public async applicationsPost(
    message: ServerCreateApplicationRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'message' is not null or undefined
    if (message === null || message === undefined) {
      throw new RequiredError("ApplicationApi", "applicationsPost", "message");
    }

    // Path Params
    const localVarPath = "/applications";

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(message, "ServerCreateApplicationRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["ApiKeyAuth"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }
}

export class ApplicationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to applicationsPost
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async applicationsPost(
    response: ResponseContext
  ): Promise<ServerAppresp> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: ServerAppresp = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ServerAppresp",
        ""
      ) as ServerAppresp;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: ServerAPIError = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ServerAPIError",
        ""
      ) as ServerAPIError;
      throw new ApiException<ServerAPIError>(
        response.httpStatusCode,
        "Bad Request",
        body,
        response.headers
      );
    }
    if (isCodeInRange("401", response.httpStatusCode)) {
      const body: ServerAPIError = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ServerAPIError",
        ""
      ) as ServerAPIError;
      throw new ApiException<ServerAPIError>(
        response.httpStatusCode,
        "Unauthorized",
        body,
        response.headers
      );
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: ServerAPIError = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ServerAPIError",
        ""
      ) as ServerAPIError;
      throw new ApiException<ServerAPIError>(
        response.httpStatusCode,
        "Not Found",
        body,
        response.headers
      );
    }
    if (isCodeInRange("500", response.httpStatusCode)) {
      const body: ServerAPIError = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ServerAPIError",
        ""
      ) as ServerAPIError;
      throw new ApiException<ServerAPIError>(
        response.httpStatusCode,
        "Internal Server Error",
        body,
        response.headers
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ServerAppresp = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ServerAppresp",
        ""
      ) as ServerAppresp;
      return body;
    }

    throw new ApiException<string | Blob | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers
    );
  }
}
