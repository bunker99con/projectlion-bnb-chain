import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {Subject} from 'rxjs';
import {ModalParam} from '../components/modals/modal';
import {RandomUtils} from 'simple-boot-core/utils/random/RandomUtils';
@Sim
export class ModalService {
    private subject = new Subject<ModalParam>();

    get observable() {
        return this.subject.asObservable();
    }

    next(data: Omit<ModalParam, 'uuid'>) {
        this.subject.next({...data, uuid: RandomUtils.uuid()});
    }


}