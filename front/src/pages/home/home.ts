import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import template from './home.html';
import style from './home.css';
import {ConcatScript} from '../../scripts/concat.script';
@Sim({
    using: [ConcatScript]
})
@Component({
    template,
    styles: [style]
})
export class Home {
    name = 'home';
    toggle = false;
}
