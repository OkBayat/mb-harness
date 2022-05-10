import {DebugElement} from '@angular/core';

export interface Select {
    element: DebugElement,
    submit(eventObj?: any): void;
    style(styleName: string): string;
    innerHTML(): string;
    setValue(value: number | string): void;
    click(eventObj?: any): void;
    hasClass(className: string): boolean;
    hasAttr(attrName: string): boolean;
    getAttr(attrName: string): string;
    value(): string | number;
    thatContains(value: string): Select;
    includes(value: string): boolean;
    exist(): boolean;
}
