let digitList = document.querySelectorAll(".digit");
let result = document.querySelector(".result");
let reset = document.querySelector(".reset");
let backspace = document.querySelector(".backspace");
let mathActionList = document.querySelectorAll(".math-action");
let mathResult = document.querySelector(".math-result");

function checkLength() {
    if (result.textContent.length > 4) {
        result.style.fontSize = "36px";
    } else {
        result.style.fontSize = "96px";
    }
}

digitList.forEach(function(item) {
    item.addEventListener("click", pushDigit); 

    function pushDigit() {
        if (result.textContent === "0") {
            result.textContent = "";
        }

        checkLength();

        result.textContent += item.textContent;
    }
});

reset.addEventListener("click", pushReset);

function pushReset() {
    result.textContent = "0";
    checkLength();
}

backspace.addEventListener("click", pushBackspace);

function pushBackspace() {

    if (result.textContent.length > 1) {
        result.textContent = result.textContent.slice(0, -1);
    } else {
        result.textContent = "0";
    }

    checkLength();
}

mathActionList.forEach(function(item) {
    item.addEventListener("click", nextDigit);

    function nextDigit() {
        result.textContent += item.textContent;
    }
});

mathResult.addEventListener("click", pushMathResult);

function pushMathResult() {
    if (result.textContent.includes("÷") || result.textContent.includes("×")) {
        let re1 = /÷/;
        let re2 = /×/;
        result.textContent = result.textContent.replace(re1, "/");
        result.textContent = result.textContent.replace(re2, "*");
    }

    result.textContent = eval(result.textContent);
    checkLength();
}