export function select_includes(value: string): boolean {
    return this.element[0].nativeElement.innerText.includes(value);
}
