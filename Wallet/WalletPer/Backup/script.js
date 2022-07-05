var sel = document.getElementById('fiatSelect');
var opt = sel.options[sel.selectedIndex];

function typeChanged() {
    if (sel.value == "USD") {
        document.getElementById('type1').textContent = "دلار";
        document.getElementById('type2').textContent = "دلار";
        document.getElementById('flagImg').src = './moneySymbols/USD.png';
    }
    else if (sel.value == "CAD") {
        document.getElementById('type1').textContent = "دلار کانادا";
        document.getElementById('type2').textContent = "دلار کانادا";
        document.getElementById('flagImg').src = './moneySymbols/USD.png';
    }
    else if (sel.value == "EUR") {
        document.getElementById('type1').textContent = "یورو";
        document.getElementById('type2').textContent = "یورو";
        document.getElementById('flagImg').src = './moneySymbols/EURO.png';
    }
    else if (sel.value == "IRR") {
        document.getElementById('type1').textContent = "ریال";
        document.getElementById('type2').textContent = "ریال";
        document.getElementById('flagImg').src = './moneySymbols/IRR.png';
    }
    else if (sel.value == "AFN") {
        document.getElementById('type1').textContent = "افغانی";
        document.getElementById('type2').textContent = "افغانی";
        document.getElementById('flagImg').src = './moneySymbols/AFN.png';
    }
    else if (sel.value == "TLR") {
        document.getElementById('type1').textContent = "لیر";
        document.getElementById('type2').textContent = "لیر";
        document.getElementById('flagImg').src = './moneySymbols/TLR.png';
    }
}