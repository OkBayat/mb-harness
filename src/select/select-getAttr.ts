export function select_getAttr(attrName: string): boolean {
    return this.__elm.nativeElement.getAttribute(attrName);
}
