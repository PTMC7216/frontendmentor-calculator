const body = document.body;
const currentTheme = document.body.className.slice(-1);
const storedTheme = localStorage.getItem("theme");
const themeSwitch = document.querySelector(".theme__slider") as HTMLDivElement;

const themeChange = (curr: string, next: string) => {
    body.classList.replace(`theme-${curr}`, `theme-${next}`);
    themeSwitch.classList.replace(`theme__slider--${curr}`, `theme__slider--${next}`);
}

themeSwitch.onclick = () => {
    if (body.classList.contains("theme-1")) {
        themeChange("1", "2");
        localStorage.setItem("theme", "2")
    }
    else if (body.classList.contains("theme-2")) {
        themeChange("2", "3");
        localStorage.setItem("theme", "3")
    }
    else if (body.classList.contains("theme-3")) {
        themeChange("3", "1");
        localStorage.setItem("theme", "1")
    }
}

if (storedTheme) {
    themeChange(currentTheme, storedTheme);
}
else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    themeChange(currentTheme, "2");
}
