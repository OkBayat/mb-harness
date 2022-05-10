import {Select} from '../models/select';

export function select_thatContains(value: string): Select {
    const items = [];

    for (let item of this.element) {
        if (item.nativeElement.innerText.includes(value)) {
            items.push(item);
        }
    }

    this.element.splice(0);
    this.element.unshift(...items);

    return this;
}
