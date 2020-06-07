export function select_hasClass(className: string): boolean {
    return this.__elm.nativeElement.classList.contains(className);
}
