import {ComponentFixture, TestBed, TestBedStatic} from '@angular/core/testing';
import {select} from './select/select';
import {selectAll} from './select-all/select-all';
import {dispatchKeyboardEvent} from './dispatch-events/dispatch-keyboard-event';

export function MbHarness(component) {
    return (target) => {
        const self = target.prototype;
        self.__component = component;
        self.__elm = null;
    }
}

export class Harness<T> {
    fixture: ComponentFixture<T>;
    component: T;
    select = select;
    selectAll = selectAll;
    dispatchKeyboardEvent = dispatchKeyboardEvent;

    /* tslint:disable:variable-name */
    private __component;
    private __elm;

    constructor(public testBed: TestBedStatic, skipDetectChanges?: boolean) {
        this.init(skipDetectChanges);
    }

    private init(skipDetectChanges: boolean): void {
        this.select = select.bind(this);
        this.selectAll = selectAll.bind(this);
        this.dispatchKeyboardEvent = dispatchKeyboardEvent.bind(this);

        this.fixture = this.testBed.createComponent(this.__component);
        this.component = this.fixture.componentInstance;
        if (skipDetectChanges) { return; }
        this.fixture.detectChanges();
    }
}
