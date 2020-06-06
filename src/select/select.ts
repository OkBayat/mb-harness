import {By} from '@angular/platform-browser';
import {select_style} from './select-style';
import {select_submit} from './select-submit';
import {Select} from '../models/select';
import {select_innerHTML} from './select-innerHTML';

export function select(selector: string): Select {
    this.__elm = this.fixture.debugElement.query(By.css(selector));

    return {
        element: this.__elm,
        submit: select_submit.bind(this),
        style: select_style.bind(this),
        innerHTML: select_innerHTML.bind(this)
    }
}