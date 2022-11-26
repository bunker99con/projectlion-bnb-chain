import {ResourceResorver} from 'simple-boot-http-server/resolvers/ResourceResorver';
import {Inject} from 'simple-boot-core/decorators/inject/Inject';
import {HttpServerOption} from 'simple-boot-http-server/option/HttpServerOption';
import {RouterModule} from 'simple-boot-core/route/RouterModule';
import {GET, POST, UrlMappingSituationType} from 'simple-boot-http-server/decorators/MethodMapping';
import {Route, Router} from 'simple-boot-core/decorators/route/Router';
import {RequestResponse} from 'simple-boot-http-server/models/RequestResponse';
import {Mimes} from 'simple-boot-http-server/codes/Mimes';
import {SimpleBootHttpServer} from 'simple-boot-http-server';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {ReqHeader} from 'simple-boot-http-server/models/datas/ReqHeader';
import {Intent} from 'simple-boot-core/intent/Intent';
import path from 'path'
import {ResourceFilter} from 'simple-boot-http-server/filters/ResourceFilter';
import {Resource} from 'simple-boot-http-server/models/datas/Resource';
const frontDist = path.join(require.resolve('front'), '../', 'dist');

@Sim @Router({path: ''})
export class AppRouter {

    @Route({path: ['/', '/w', '/z']}) @GET({res: {contentType: Mimes.ApplicationJson}})
    index2(rr: RequestResponse, header: ReqHeader, routerModule: RouterModule) {
        return {name: 'visualkh99h' + rr.reqUrl}
    }
}


console.log('frontDist', frontDist);
const resourceFilter = new ResourceFilter(frontDist,
    ['\.js$', '\.map$', '\.ico$', '\.png$', '\.jpg$', '\.jpeg$', '\.gif$', '\.css$', '\.html$']
);
const httpServerOption = new HttpServerOption({
    sessionOption: {
        expiredTime: 5000
    },
    filters: [resourceFilter],
    listen: {
        port: Number(process.env.PORT) || 8080,
        listeningListener: (server, httpServer) => {
            console.log('server on', httpServer.address());
        }
    }
});

const app = new SimpleBootHttpServer(AppRouter, httpServerOption);
app.run();