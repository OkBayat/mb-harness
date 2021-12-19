export function select_hasAttr(attrName: string): boolean {
    return this.__elm[0].nativeElement.hasAttribute(attrName);
}
