export function select_style(styleName: string): string {
    return window.getComputedStyle(this.__elm.nativeElement)[styleName];
}
