import {SimFrontOption, UrlType} from 'simple-boot-front/option/SimFrontOption';
import {SimpleBootFront} from 'simple-boot-front/SimpleBootFront';
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {Router} from 'simple-boot-core/decorators/route/Router';
import {Component} from 'simple-boot-front/decorators/Component';
import template from './index.html'
import style from './index.css'
import {Profile} from './pages/profile/profile';
import {RouterAction} from 'simple-boot-core/route/RouterAction';
import {ItemComponent} from './components/item/item.component';
import {ModalService} from './services/ModalService';
import {OnInit} from 'simple-boot-front/lifecycle/OnInit';
import {OnSimCreate} from 'simple-boot-core/lifecycle/OnSimCreate';
import {StorageUtils} from 'dom-render/utils/storage/StorageUtils';
import {Modal, ModalParam} from './components/modals/modal';
import {Home} from './pages/home/home';
import {Quiz} from './pages/quiz/quiz';
import {Market} from './pages/market/market';
import {MarketDetail} from './pages/market/detail/market-detail';
import {QuizDetail} from './pages/quiz/detail/quiz-detail';
@Sim({
    using: [Modal]
})
@Router({
    path: '',
    route: {
        '/': Home,
        '/quiz': Quiz,
        '/quiz/{id}': QuizDetail,
        '/market': Market,
        '/market/{id}': MarketDetail,
        '/profile/{id}': Profile
    }
})
@Component({
    template,
    styles: [style]
})
export class Index implements OnSimCreate, RouterAction {
    child?: any;
    modals: ModalParam[] = [];
    address = StorageUtils.getLocalStorageItem('auth', window) ?? '';
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
    //
    connectWallet() {
        if (this.address?.length <= 0) {
            if (typeof window.ethereum !== 'undefined') {
                window.ethereum.request({ method: 'eth_requestAccounts' }).then((i: any[]) => {
                    this.address = i[0];
                    StorageUtils.setLocalStorageItem('auth', this.address, window);
                });
            } else {
                this.modalService.next({
                    icon: 'danger', title: '메타마스크 설치 필요', content: '메타마스크 설치가 필요합니다.', buttons: [
                        {text: '설치하기', onClick: () => window.open('https://metamask.io/download.html', '_blank')},
                        {text: '닫기', classNames:'text-white bg-red-600', onClick: (modal) => {modal.close(); }}
                    ]
                });
            }
        } else {
            this.address = '';
            StorageUtils.removeLocalStorageItem('auth', window);
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
