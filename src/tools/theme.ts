export namespace Theme {
    const SELECTOR_HTML = "html"
    const CLASS_NAME_DISABLE_LIGHT_MODE = "disable-light-mode"
    const CLASS_NAME_DISABLE_DARK_MODE = "disable-dark-mode"

    export enum Options {
        Dark = "dark",
        Light = "light",
        System = "system",
    }

    export function Current(): string {
        const root = document.querySelector(SELECTOR_HTML)
        if (!root) {
            return Options.System
        }

        if (root.classList.contains(CLASS_NAME_DISABLE_DARK_MODE)) {
            return Options.Light
        }

        if (root.classList.contains(CLASS_NAME_DISABLE_LIGHT_MODE)) {
            return Options.Dark
        }

        return Options.System
    }

    export function Apply(theme: Options): void {
        switch (theme) {
            case Options.Dark:
                ApplyDark()
                break
            case Options.Light:
                ApplyLight()
                break
            default:
                Reset()
        }
    }

    export function ApplyDark(): void {
        const root = document.querySelector(SELECTOR_HTML)
        if (!root) {
            return
        }

        root.classList.add(CLASS_NAME_DISABLE_LIGHT_MODE)
        root.classList.remove(CLASS_NAME_DISABLE_DARK_MODE)
    }

    export function ApplyLight(): void {
        const root = document.querySelector(SELECTOR_HTML)
        if (!root) {
            return
        }

        root.classList.remove(CLASS_NAME_DISABLE_LIGHT_MODE)
        root.classList.add(CLASS_NAME_DISABLE_DARK_MODE)
    }

    export function Reset(): void {
        const root = document.querySelector(SELECTOR_HTML)
        if (!root) {
            return
        }

        root.classList.remove(CLASS_NAME_DISABLE_LIGHT_MODE)
        root.classList.remove(CLASS_NAME_DISABLE_DARK_MODE)
    }

    export function Toggle(): void {
        switch (Current()) {
            case Options.Dark:
                ApplyLight()
                break;
            case Options.Light:
                ApplyDark()
                break;
            default:
                Reset()
                break
        }
    }
}
