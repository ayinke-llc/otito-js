import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { ApplicationApiRequestFactory, ApplicationApiResponseProcessor} from "../apis/ApplicationApi";
export class ObservableApplicationApi {
    private requestFactory: ApplicationApiRequestFactory;
    private responseProcessor: ApplicationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApplicationApiRequestFactory,
        responseProcessor?: ApplicationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApplicationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApplicationApiResponseProcessor();
    }

    /**
     * create a new app
     * @param message Request body
     */
    public applicationsPost(message: ServerCreateApplicationRequest, _options?: Configuration): Observable<ServerAppresp> {
        const requestContextPromise = this.requestFactory.applicationsPost(message, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.applicationsPost(rsp)));
            }));
    }

}

import { DashboardApiRequestFactory, DashboardApiResponseProcessor} from "../apis/DashboardApi";
export class ObservableDashboardApi {
    private requestFactory: DashboardApiRequestFactory;
    private responseProcessor: DashboardApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DashboardApiRequestFactory,
        responseProcessor?: DashboardApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DashboardApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DashboardApiResponseProcessor();
    }

    /**
     * create access token
     */
    public dashboardAccessPost(_options?: Configuration): Observable<ServerUrlResp> {
        const requestContextPromise = this.requestFactory.dashboardAccessPost(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dashboardAccessPost(rsp)));
            }));
    }

}

import { MessageApiRequestFactory, MessageApiResponseProcessor} from "../apis/MessageApi";
export class ObservableMessageApi {
    private requestFactory: MessageApiRequestFactory;
    private responseProcessor: MessageApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MessageApiRequestFactory,
        responseProcessor?: MessageApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MessageApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MessageApiResponseProcessor();
    }

    /**
     * create messages
     * @param message Request body
     */
    public messagesPost(message: ServerMessageRequest, _options?: Configuration): Observable<ServerAPIStatus> {
        const requestContextPromise = this.requestFactory.messagesPost(message, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.messagesPost(rsp)));
            }));
    }

}

import { MessagesApiRequestFactory, MessagesApiResponseProcessor} from "../apis/MessagesApi";
export class ObservableMessagesApi {
    private requestFactory: MessagesApiRequestFactory;
    private responseProcessor: MessagesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MessagesApiRequestFactory,
        responseProcessor?: MessagesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MessagesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MessagesApiResponseProcessor();
    }

    /**
     * list messages
     */
    public messagesGet(_options?: Configuration): Observable<ServerSwaggerMessageResp> {
        const requestContextPromise = this.requestFactory.messagesGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.messagesGet(rsp)));
            }));
    }

}
