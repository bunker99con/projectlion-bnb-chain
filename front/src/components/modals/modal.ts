import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {Component} from 'simple-boot-front/decorators/Component';
import {OnCreateRender} from 'dom-render/lifecycle/OnCreateRender';
import template from './modal.html'

export type ButtonParam = {
    text: string;
    onClick?: (modal: Modal) => void;
    classNames?: string;
}
export type ModalParam = {
    uuid: string;
    title: string;
    icon?: 'danger' | 'info' | 'success' | 'warning';
    content?: string;
    buttons?: ButtonParam[]
    close?: () => void;

}

@Sim
@Component({
    selector: 'modal',
    template
})
export class Modal implements OnCreateRender {
    private param?: ModalParam;

    onCreateRender(param: ModalParam): void {
        param.icon ??= 'info';
        param.buttons =  (param.buttons ?? []).reverse();
        this.param = param;
        console.log('------', param)
    }

    close() {
        this.param?.close?.();
    }

}