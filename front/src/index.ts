import {SimFrontOption, UrlType} from 'simple-boot-front/option/SimFrontOption';
import {SimpleBootFront} from 'simple-boot-front/SimpleBootFront';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {Router} from 'simple-boot-core/decorators/route/Router';
import {Component} from 'simple-boot-front/decorators/Component';
import template from './index.html'
import style from './index.css'
import {Home} from './pages/home/home';
import {User} from './pages/user';
import {RouterAction} from 'simple-boot-core/route/RouterAction';
import {ItemComponent} from './components/item/item.component';
import {ModalService} from './services/ModalService';
import {OnInit} from 'simple-boot-front/lifecycle/OnInit';
import {OnSimCreate} from 'simple-boot-core/lifecycle/OnSimCreate';
import {Modal, ModalParam} from './components/modals/modal';
@Sim({
    using: [Modal]
})
@Router({
    path: '',
    route: {
        '/': Home,
        '/user': User
    }
})
@Component({
    template,
    styles: [style]
})
export class Index implements OnSimCreate, RouterAction {
    child?: any;
    modals: ModalParam[] = [];
    address = ''
    constructor(private modalService: ModalService) {
    }

    onSimCreate(): void {
        this.modalService.observable.subscribe(it => {
            this.modals.push(it);
            it.close = () => {
                this.modals = this.modals.filter(i => i.uuid !== it.uuid);
            }
        })
    }

    connectWallet() {
        if (typeof window.ethereum !== 'undefined') {
            window.ethereum.request({ method: 'eth_requestAccounts' }).then((i: any[]) => {
                console.log('---',i)
                this.address = i[0];
            });
        } else {
            this.modalService.next({
                icon: 'danger', title: '메타마스크 설치 필요', content: '메타마스크 설치가 필요합니다.', buttons: [
                    {text: '설치하기', onClick: () => window.open('https://metamask.io/download.html', '_blank')},
                    {text: '닫기', classNames:'text-white bg-red-600', onClick: (modal) => {modal.close(); }}
                ]
            });
        }
    }

    async canActivate(url: any, module: any) {
        this.child = module;
        console.log('route->', url, module);
    }

}

const config = new SimFrontOption(window).setUrlType(UrlType.hash);
// const config = new SimFrontOption(window).setUrlType(UrlType.path);
const simpleApplication = new SimpleBootFront(Index, config);
simpleApplication.run();
