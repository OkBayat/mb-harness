import {By} from '@angular/platform-browser';
import {select_style} from './select-style';
import {select_submit} from './select-submit';
import {Select} from '../models/select';

export function select(selector: string): Select {
    this.__elm = this.fixture.debugElement.query(By.css(selector));

    return {
        submit: select_submit.bind(this),
        style: select_style.bind(this)
    }
}
