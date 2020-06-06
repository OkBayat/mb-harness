import {DebugElement} from '@angular/core';

export interface Select {
    element: DebugElement,
    submit(eventObj?: any): void;
    style(styleName: string): string;
    innerHTML(): string;
    setValue(value: number | string): void;
}
