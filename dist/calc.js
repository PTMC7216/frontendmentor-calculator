"use strict";
const display = document.querySelector(".display");
const keys = document.querySelectorAll(".key");
const sanitize = (x) => x.replace(/[^\d/*+-.]/g, '');
const error = () => display.innerText === "ERROR" || display.innerText === "undefined";
let flag = false;
keys.forEach(key => {
    key.addEventListener("click", () => {
        switch (key.textContent) {
            case "DEL":
                flag = false;
                if (error()) {
                    display.innerText = "";
                }
                display.innerText = display.innerText.slice(0, -1);
                break;
            case "RESET":
                display.innerText = "";
                break;
            case "=":
                flag = true;
                try {
                    display.innerText = eval(sanitize(display.innerText));
                }
                catch (_a) {
                    display.innerText = "ERROR";
                }
                break;
            case "+":
            case "-":
            case "x":
                flag = false;
                if (error()) {
                    display.innerText = key.textContent;
                }
                else {
                    display.innerText += key.textContent;
                }
                break;
            default:
                if (flag || error()) {
                    flag = false;
                    display.innerText = "";
                }
                display.innerText += key.textContent;
                break;
        }
    });
});
