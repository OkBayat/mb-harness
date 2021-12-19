import {By} from '@angular/platform-browser';
import {select_style} from './select-style';
import {select_submit} from './select-submit';
import {Select} from '../models/select';
import {select_innerHTML} from './select-innerHTML';
import {select_setValue} from './select-setValue';
import {select_click} from './select-click';
import {select_hasClass} from './select-hasClass';
import {select_hasAttr} from './select-hasAttr';
import {select_getAttr} from './select-getAttr';
import {select_value} from './select-value';
import {select_contains} from './select-contains';
import {select_exist} from './select-exist';

export function select(selector: any): Select {
    const query = typeof selector === 'string'
        ? By.css(selector)
        : selector;

    this.__elm = this.fixture.debugElement.queryAll(query);

    return {
        element: this.__elm,
        submit: select_submit.bind(this),
        style: select_style.bind(this),
        innerHTML: select_innerHTML.bind(this),
        setValue: select_setValue.bind(this),
        click: select_click.bind(this),
        hasClass: select_hasClass.bind(this),
        hasAttr: select_hasAttr.bind(this),
        getAttr: select_getAttr.bind(this),
        value: select_value.bind(this),
        contains: select_contains,
        exist: select_exist.bind(this)
    };
}
