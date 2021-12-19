export function select_setValue(value: string | number): void {
    const elm = this.__elm[0].nativeElement;
    elm.value = value;
    this.__elm[0].triggerEventHandler('input', { target: elm });
    this.fixture.detectChanges();
}
