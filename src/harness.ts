import {ComponentFixture, TestBedStatic} from '@angular/core/testing';
import {select} from './select/select';
import {selectAll} from './select-all/select-all';

function init<T>(testBed: TestBedStatic): Harness<T> {
    this.fixture = testBed.createComponent(this.__component);
    this.component = this.fixture.componentInstance;
    this.fixture.detectChanges();
    this.select = select.bind(this)
    this.selectAll = selectAll.bind(this)

    return this;
}

export function MbHarness(component) {
    return (target) => {
        const self = target.prototype;
        self.__component = component;
        self.__elm = null;
        self.init = init.bind(self);
    }
}

export class Harness<T> {
    fixture: ComponentFixture<T>;
    component: T;
    init = init;
    select = select;
    selectAll = selectAll;
}
