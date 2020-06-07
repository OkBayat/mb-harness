export function select_click(eventObj?: any): void {
    this.__elm.triggerEventHandler('click', eventObj);
    this.fixture.detectChanges();
}
