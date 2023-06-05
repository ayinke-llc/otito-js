import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { ServerAPIError } from '../models/ServerAPIError';
import { ServerAPIStatus } from '../models/ServerAPIStatus';
import { ServerAppresp } from '../models/ServerAppresp';
import { ServerApprespApplication } from '../models/ServerApprespApplication';
import { ServerCreateApplicationRequest } from '../models/ServerCreateApplicationRequest';
import { ServerMRequest } from '../models/ServerMRequest';
import { ServerMessageHTTPDefinition } from '../models/ServerMessageHTTPDefinition';
import { ServerMessageRequest } from '../models/ServerMessageRequest';
import { ServerSwaggerMessageResp } from '../models/ServerSwaggerMessageResp';
import { ServerSwaggerMessageRespMessagesInner } from '../models/ServerSwaggerMessageRespMessagesInner';
import { ServerUrlResp } from '../models/ServerUrlResp';

import { ObservableApplicationApi } from "./ObservableAPI";
import { ApplicationApiRequestFactory, ApplicationApiResponseProcessor} from "../apis/ApplicationApi";

export interface ApplicationApiApplicationsPostRequest {
    /**
     * Request body
     * @type ServerCreateApplicationRequest
     * @memberof ApplicationApiapplicationsPost
     */
    message: ServerCreateApplicationRequest
}

export class ObjectApplicationApi {
    private api: ObservableApplicationApi

    public constructor(configuration: Configuration, requestFactory?: ApplicationApiRequestFactory, responseProcessor?: ApplicationApiResponseProcessor) {
        this.api = new ObservableApplicationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * create a new app
     * @param param the request object
     */
    public applicationsPost(param: ApplicationApiApplicationsPostRequest, options?: Configuration): Promise<ServerAppresp> {
        return this.api.applicationsPost(param.message,  options).toPromise();
    }

}

import { ObservableDashboardApi } from "./ObservableAPI";
import { DashboardApiRequestFactory, DashboardApiResponseProcessor} from "../apis/DashboardApi";

export interface DashboardApiDashboardAccessPostRequest {
}

export class ObjectDashboardApi {
    private api: ObservableDashboardApi

    public constructor(configuration: Configuration, requestFactory?: DashboardApiRequestFactory, responseProcessor?: DashboardApiResponseProcessor) {
        this.api = new ObservableDashboardApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * create access token
     * @param param the request object
     */
    public dashboardAccessPost(param: DashboardApiDashboardAccessPostRequest = {}, options?: Configuration): Promise<ServerUrlResp> {
        return this.api.dashboardAccessPost( options).toPromise();
    }

}

import { ObservableMessageApi } from "./ObservableAPI";
import { MessageApiRequestFactory, MessageApiResponseProcessor} from "../apis/MessageApi";

export interface MessageApiMessagesPostRequest {
    /**
     * Request body
     * @type ServerMessageRequest
     * @memberof MessageApimessagesPost
     */
    message: ServerMessageRequest
}

export class ObjectMessageApi {
    private api: ObservableMessageApi

    public constructor(configuration: Configuration, requestFactory?: MessageApiRequestFactory, responseProcessor?: MessageApiResponseProcessor) {
        this.api = new ObservableMessageApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * create messages
     * @param param the request object
     */
    public messagesPost(param: MessageApiMessagesPostRequest, options?: Configuration): Promise<ServerAPIStatus> {
        return this.api.messagesPost(param.message,  options).toPromise();
    }

}

import { ObservableMessagesApi } from "./ObservableAPI";
import { MessagesApiRequestFactory, MessagesApiResponseProcessor} from "../apis/MessagesApi";

export interface MessagesApiMessagesGetRequest {
}

export class ObjectMessagesApi {
    private api: ObservableMessagesApi

    public constructor(configuration: Configuration, requestFactory?: MessagesApiRequestFactory, responseProcessor?: MessagesApiResponseProcessor) {
        this.api = new ObservableMessagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * list messages
     * @param param the request object
     */
    public messagesGet(param: MessagesApiMessagesGetRequest = {}, options?: Configuration): Promise<ServerSwaggerMessageResp> {
        return this.api.messagesGet( options).toPromise();
    }

}
