import {By} from '@angular/platform-browser';
import {SelectAll} from '../models/select-all';

export function selectAll(selector: string): SelectAll {
    this.__elm = this.fixture.debugElement.queryAll(By.css(selector));

    return {
        elements: this.__elm
    }
}
