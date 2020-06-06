export function select_submit(eventObj?: any): void {
    this.__elm.triggerEventHandler('submit', eventObj);
    this.fixture.detectChanges();
}
