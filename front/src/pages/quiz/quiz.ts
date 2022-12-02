import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import template from './quiz.html';
import style from './quiz.css';
import { OnInitRender } from 'dom-render/lifecycle/OnInitRender';
import { OnCreateRender } from 'dom-render/lifecycle/OnCreateRender';

@Sim
@Component({
    template,
    styles: [style]
})
export class Quiz implements OnInitRender, OnCreateRender {
    name = 'Quiz';
    toggle = true;
    constructor() {
        console.log('Quiz constructor home')
    }
    onCreateRender(...param: any[]): void {
        console.log('Quiz!')
    }
    onInitRender(...param: any[]): void {
        console.log('Quiz--------------')
    }
}
