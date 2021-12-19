export function select_hasClass(className: string): boolean {
    return this.__elm[0].nativeElement.classList.contains(className);
}
