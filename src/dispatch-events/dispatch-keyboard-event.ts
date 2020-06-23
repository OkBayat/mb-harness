export function dispatchKeyboardEvent(type: string, option: string | object): void {
    if (typeof option === 'string') {
        option = {code: option};
    }

    document.dispatchEvent(new KeyboardEvent(type, option))
    this.fixture.detectChanges();
}