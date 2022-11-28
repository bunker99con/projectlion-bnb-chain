import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import {ProfileComponent} from '../components/profile/profile.component';
import template from './user.html';
@Sim({
    using: [ProfileComponent]
})
@Component({
    template
})
export class User {
    name = 'User';
    toggle = true;
}
