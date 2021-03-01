import * as elements from "./elements";

export default class Calculator {
    constructor() {
        this.activeResult = false;
    }

    init() {
        elements.EL_NUMBERS.forEach(buttonEl => {
            buttonEl.addEventListener("click", () => {
                this.appendNumber(buttonEl);
            });
        });

        elements.EL_OPERATORS.forEach((operatorEl) => {
            operatorEl.addEventListener("click", () => {
                this.appendOperator(operatorEl);
            });
        });

        elements.EL_ZERO.addEventListener("click", () => {
            this.appendZero();
        });

        elements.EL_DOT.addEventListener("click", () => {
            this.appendDot();
        });

        elements.EL_EQUAL.addEventListener("click", () => {
            this.showResult();
        });

        elements.EL_REMOVE.addEventListener("click", () => {
            this.clear();
        });
    }

    appendNumber(button) {
        if (this.activeResult) {
            elements.EL_RESULT.value = button.value;
            this.activeResult = false;
        } else {
            elements.EL_RESULT.value += button.value;
        }
    }

    appendZero() {
        if (elements.EL_RESULT.value !== "0") {
            elements.EL_RESULT.value += elements.EL_ZERO.value;
        }
    }

    appendDot() {
        if (elements.EL_RESULT.value === "") {
            elements.EL_RESULT.value = "0.";
        } else {
            elements.EL_RESULT.value += ".";
        }
    }

    appendOperator(operator) {
        if (elements.EL_RESULT.value !== "") {
            elements.EL_RESULT.value += operator.value;
        }
    }

    showResult () {
        if (elements.EL_RESULT.value !== "") {
            elements.EL_RESULT.value = eval(elements.EL_RESULT.value);
            this.activeResult = true;
        }
    }

    clear () {
        this.activeResult = false;
        elements.EL_RESULT.value = "";
    }

}
