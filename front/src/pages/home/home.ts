import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { OnInitRender } from 'dom-render/lifecycle/OnInitRender';
import { OnCreateRender } from 'dom-render/lifecycle/OnCreateRender';
import template from './home.html';
import style from './home.css';
import {ConcatScript} from '../../scripts/concat.script';
import {AvatarService, Profile} from '../../services/AvatarService';
import {OnSimCreate} from 'simple-boot-core/lifecycle/OnSimCreate';
@Sim({
    using: [ConcatScript]
})
@Component({
    template,
    styles: [style]
})
export class Home implements OnInitRender, OnCreateRender, OnSimCreate {
    private profiles?: Profile[];
    constructor(private avatarService: AvatarService) {
    }

    onSimCreate(): void {
        this.avatarService.randomProfiles(10).then(it => {
            this.profiles = it.results;
            console.log('profiles', this.profiles)
        })
    }

    onCreateRender(...param: any[]): void {
        console.log('!')
    }

    onInitRender(...param: any[]): void {
        console.log('--------------')
    }



}
