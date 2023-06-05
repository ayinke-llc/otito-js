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
import { ObservableApplicationApi } from './ObservableAPI';

import { ApplicationApiRequestFactory, ApplicationApiResponseProcessor} from "../apis/ApplicationApi";
export class PromiseApplicationApi {
    private api: ObservableApplicationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationApiRequestFactory,
        responseProcessor?: ApplicationApiResponseProcessor
    ) {
        this.api = new ObservableApplicationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * create a new app
     * @param message Request body
     */
    public applicationsPost(message: ServerCreateApplicationRequest, _options?: Configuration): Promise<ServerAppresp> {
        const result = this.api.applicationsPost(message, _options);
        return result.toPromise();
    }


}



import { ObservableDashboardApi } from './ObservableAPI';

import { DashboardApiRequestFactory, DashboardApiResponseProcessor} from "../apis/DashboardApi";
export class PromiseDashboardApi {
    private api: ObservableDashboardApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DashboardApiRequestFactory,
        responseProcessor?: DashboardApiResponseProcessor
    ) {
        this.api = new ObservableDashboardApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * create access token
     */
    public dashboardAccessPost(_options?: Configuration): Promise<ServerUrlResp> {
        const result = this.api.dashboardAccessPost(_options);
        return result.toPromise();
    }


}



import { ObservableMessageApi } from './ObservableAPI';

import { MessageApiRequestFactory, MessageApiResponseProcessor} from "../apis/MessageApi";
export class PromiseMessageApi {
    private api: ObservableMessageApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MessageApiRequestFactory,
        responseProcessor?: MessageApiResponseProcessor
    ) {
        this.api = new ObservableMessageApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * create messages
     * @param message Request body
     */
    public messagesPost(message: ServerMessageRequest, _options?: Configuration): Promise<ServerAPIStatus> {
        const result = this.api.messagesPost(message, _options);
        return result.toPromise();
    }


}



import { ObservableMessagesApi } from './ObservableAPI';

import { MessagesApiRequestFactory, MessagesApiResponseProcessor} from "../apis/MessagesApi";
export class PromiseMessagesApi {
    private api: ObservableMessagesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MessagesApiRequestFactory,
        responseProcessor?: MessagesApiResponseProcessor
    ) {
        this.api = new ObservableMessagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * list messages
     */
    public messagesGet(_options?: Configuration): Promise<ServerSwaggerMessageResp> {
        const result = this.api.messagesGet(_options);
        return result.toPromise();
    }


}



