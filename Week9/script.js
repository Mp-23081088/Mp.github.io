function calculate() {
    var a=parseFloat(document.calcform.txta.value);
    var b=parseFloat(document.calcform.txtb.value);
    var operator=document.calcform.slto.value;
    var result;

    if (operator === "+") {
        result = a + b;
    } else if (operator === "-") {
        result = a - b;
    } else if (operator === "*") {
        result = a * b;
    } else if (operator === "/") {
        result = a / b;
    } else {
        result = "Invalid Operator";
    }

    // getElementById method to set the result
    document.getElementById("lblresult").innerText = result;
}

//innerText: thuộc tính thay đổi/ trả nội dung văn bản bên trong phần tử 
//==result: gán giá trị của biến result vào nội dung văn bản của phần tử đó