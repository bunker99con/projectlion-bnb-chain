import path from 'path'
import {HttpServerOption} from 'simple-boot-http-server/option/HttpServerOption';
import {RouterModule} from 'simple-boot-core/route/RouterModule';
import {GET} from 'simple-boot-http-server/decorators/MethodMapping';
import {Route, Router} from 'simple-boot-core/decorators/route/Router';
import {RequestResponse} from 'simple-boot-http-server/models/RequestResponse';
import {Mimes} from 'simple-boot-http-server/codes/Mimes';
import {SimpleBootHttpServer} from 'simple-boot-http-server';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {ReqHeader} from 'simple-boot-http-server/models/datas/ReqHeader';
import {ResourceFilter} from 'simple-boot-http-server/filters/ResourceFilter';
import {Resource} from 'simple-boot-http-server/models/datas/Resource';
import {DB} from '../db/db';

const frontDist = path.join(require.resolve('front'), '../', 'dist');

@Sim @Router({path: ''})
export class AppRouter {

    constructor(private db: DB) {
        console.log('---', db)
    }

    @GET @Route({path: '/'})
    index(rr: RequestResponse, header: ReqHeader, routerModule: RouterModule) {
        const resource = new Resource('index.html', path.join(frontDist));
        return resource.write(rr);
    }

    // @Route({path: '/'}) @GET({resolver: ResourceResorver})
    // gdata(rr: RequestResponse, header: ReqHeader, routerModule: RouterModule) {
    //     return 'index.html'
    // }
    //
    // @Route({path: '/resources/index.css'}) @GET
    // css(rr: RequestResponse, header: ReqHeader, routerModule: RouterModule) {
    //     const resource = new Resource(rr);
    //     console.log('------>', resource.absolutePath)
    //     return resource.write(rr);
    // }
    //
    // @Route({path: '/resources/img.png'}) @GET
    // img(rr: RequestResponse, header: ReqHeader, routerModule: RouterModule) {
    //     const resource = new Resource(rr);
    //     console.log('------>', resource.absolutePath)
    //     return resource.write(rr);
    // }
    // @Route({
    //     path: '/', filters: [{
    //         isAccept(intent: Intent): boolean {
    //             return true;
    //         }
    //     }]
    // }) @GET({resolver: ResourceResorver})
    // @Route({path: '/good'})
    // index(rr: RequestResponse, header: ReqHeader, routerModule: RouterModule) {
    //     return 'index.html'
    // }
    //
    // @Route({path: '/data'}) @GET({resolver: ResourceResorver})
    // gdata(rr: RequestResponse, header: ReqHeader, routerModule: RouterModule) {
    //     return 'index.html'
    // }
    //
    // @Route({path: '/data'}) @POST
    // data(rr: RequestResponse, header: ReqHeader, routerModule: RouterModule, @Inject({situationType: UrlMappingSituationType.REQ_FORM_URL_BODY}) data: {}) {
    //     return data
    // }
    //
    // @Route({path: '/resources/index.css'}) @GET({resolver: ResourceResorver})
    // css(rr: RequestResponse, header: ReqHeader, routerModule: RouterModule) {
    // }
    //
    // @Route({path: '/resources/img.png'}) @GET({resolver: ResourceResorver})
    // img(rr: RequestResponse, header: ReqHeader, routerModule: RouterModule) {
    // }
    //
    // @Route({path: '/json'}) @GET({res: {contentType: Mimes.ApplicationJson}})
    // json(rr: RequestResponse, header: ReqHeader, routerModule: RouterModule) {
    //     return {name: 'visualkhh222'}
    // }
    //
    @Route({path: ['/w', '/z']}) @GET({res: {contentType: Mimes.ApplicationJson}})
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
        hostname: '0.0.0.0',
        port: Number(process.env.PORT) || 8080,
        listeningListener: (server, httpServer) => {
            console.log('server on', httpServer.address())
        }
    }
});

const app = new SimpleBootHttpServer(AppRouter, httpServerOption);
app.run();


