export function select_setValue(value: string | number): void {
    const elm = this.__elm.nativeElement;
    elm.value = value;
    this.__elm.triggerEventHandler('input', { target: elm });
    this.fixture.detectChanges();
}
