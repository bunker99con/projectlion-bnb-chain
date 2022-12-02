import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import template from './profile.html';
import style from './profile.css';
import { OnInitRender } from 'dom-render/lifecycle/OnInitRender';
import { OnCreateRender } from 'dom-render/lifecycle/OnCreateRender';
import {AvatarService} from '../../services/AvatarService';

@Sim({
})
@Component({
    template,
    styles: [style]
})
export class Profile implements OnInitRender, OnCreateRender {
    name = 'Profile';
    toggle = true;
    constructor(public avatarService: AvatarService) {
        console.log('Profile constructor home')
    }
    onCreateRender(...param: any[]): void {
        console.log('Profile!')
    }
    onInitRender(...param: any[]): void {
        console.log('Profile--------------')
    }
}
