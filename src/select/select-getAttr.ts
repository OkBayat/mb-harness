export function select_getAttr(attrName: string): boolean {
    return this.__elm[0].nativeElement.getAttribute(attrName);
}
