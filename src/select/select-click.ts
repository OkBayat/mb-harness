export function select_click(eventObj?: any): void {
    this.__elm[0].triggerEventHandler('click', eventObj);
    this.fixture.detectChanges();
}
