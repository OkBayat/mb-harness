export function select_includes(value: string): boolean {
    for (let item of this.element) {
        if (item.nativeElement.innerText.includes(value)) {
            return true
        }
    }

    return false;
}
