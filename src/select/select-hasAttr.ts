export function select_hasAttr(attrName: string): boolean {
    return this.__elm.nativeElement.hasAttribute(attrName);
}
