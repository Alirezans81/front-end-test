var sel = document.getElementById('fiatSelect');
var opt = sel.options[sel.selectedIndex];

function typeChanged() {
    if (sel.value == "USD") {
        document.getElementById('type1').textContent = "USD";
        document.getElementById('type2').textContent = "USD";
        document.getElementById('flagImg').src = './moneySymbols/USD.png';
    }
    else if (sel.value == "CAD") {
        document.getElementById('type1').textContent = "CAD";
        document.getElementById('type2').textContent = "CAD";
        document.getElementById('flagImg').src = './moneySymbols/USD.png';
    }
    else if (sel.value == "EUR") {
        document.getElementById('type1').textContent = "EUR";
        document.getElementById('type2').textContent = "EUR";
        document.getElementById('flagImg').src = './moneySymbols/EURO.png';
    }
    else if (sel.value == "IRR") {
        document.getElementById('type1').textContent = "IRR";
        document.getElementById('type2').textContent = "IRR";
        document.getElementById('flagImg').src = './moneySymbols/IRR.png';
    }
    else if (sel.value == "AFN") {
        document.getElementById('type1').textContent = "AFN";
        document.getElementById('type2').textContent = "AFN";
        document.getElementById('flagImg').src = './moneySymbols/AFN.png';
    }
    else if (sel.value == "TLR") {
        document.getElementById('type1').textContent = "TLR";
        document.getElementById('type2').textContent = "TLR";
        document.getElementById('flagImg').src = './moneySymbols/TLR.png';
    }
}