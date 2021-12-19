export function select_submit(eventObj?: any): void {
    this.__elm[0].triggerEventHandler('submit', eventObj);
    this.fixture.detectChanges();
}
