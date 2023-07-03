// JS DE CONVERSIONES DE TEMPERATURA
function convertTemperature() {
  var temperature = parseFloat(document.getElementById("temperature").value);
  var fromUnit = document.getElementById("fromUnit").value;
  var toUnit = document.getElementById("toUnit").value;

  var result;

  if (fromUnit === "C") {
    if (toUnit === "F") {
      result = (temperature * 9/5) + 32;
    } else if (toUnit === "K") {
      result = temperature + 273.15;
    } else {
      result = temperature;
    }
  } else if (fromUnit === "F") {
    if (toUnit === "C") {
      result = (temperature - 32) * 5/9;
    } else if (toUnit === "K") {
      result = (temperature + 459.67) * 5/9;
    } else {
      result = temperature;
    }
  } else if (fromUnit === "K") {
    if (toUnit === "C") {
      result = temperature - 273.15;
    } else if (toUnit === "F") {
      result = (temperature * 9/5) - 459.67;
    } else {
      result = temperature;
    }
  }

  document.getElementById("result").innerHTML = "Resultado: " + result.toFixed(2);
}

//JS DE CONVERSIONES DE LONGITUDES

function convertLength() {
  var length = parseFloat(document.getElementById("length").value);
  var fromUnit = document.getElementById("fromUnit").value;
  var toUnit = document.getElementById("toUnit").value;

  var result;

  if (fromUnit === "cm") {
    if (toUnit === "in") {
      result = length / 2.54;
    } else if (toUnit === "ft") {
      result = length / 30.48;
    } else if (toUnit === "yd") {
      result = length / 91.44;
    } else if (toUnit === "mi") {
      result = length / 160934.4;
    } else {
      result = length;
    }
  } else if (fromUnit === "in") {
    if (toUnit === "cm") {
      result = length * 2.54;
    } else if (toUnit === "ft") {
      result = length / 12;
    } else if (toUnit === "yd") {
      result = length / 36;
    } else if (toUnit === "mi") {
      result = length / 63360;
    } else {
      result = length;
    }
  } else if (fromUnit === "ft") {
    if (toUnit === "cm") {
      result = length * 30.48;
    } else if (toUnit === "in") {
      result = length * 12;
    } else if (toUnit === "yd") {
      result = length / 3;
    } else if (toUnit === "mi") {
      result = length / 5280;
    } else {
      result = length;
    }
  } else if (fromUnit === "yd") {
    if (toUnit === "cm") {
      result = length * 91.44;
    } else if (toUnit === "in") {
      result = length * 36;
    } else if (toUnit === "ft") {
      result = length * 3;
    } else if (toUnit === "mi") {
      result = length / 1760;
    } else {
      result = length;
    }
  } else if (fromUnit === "mi") {
    if (toUnit === "cm") {
      result = length * 160934.4;
    } else if (toUnit === "in") {
      result = length * 63360;
    } else if (toUnit === "ft") {
      result = length * 5280;
    } else if (toUnit === "yd") {
      result = length * 1760;
    } else {
      result = length;
    }
  }

  document.getElementById("result").innerHTML = "Resultado: " + result.toFixed(2);
}

//JS DE LAS CONVERSIONES DE DIVISAS

function convertCurrency() {
  var amount = parseFloat(document.getElementById("amount").value);
  var fromCurrency = document.getElementById("fromCurrency").value;
  var toCurrency = document.getElementById("toCurrency").value;

  var exchangeRates = {
    MXN: 1,
    USD: 24.04,
    CAD: 17.24,
    EUR: 26.2,
    GBP: 30.05,
    CLP: 0.028,
    UYU: 0.56,
    INR: 0.32,
    JPY: 0.22,
    PLN: 5.78
  };

  var result = (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];

  document.getElementById("result").innerHTML = "Resultado: " + result.toFixed(2) + " " + toCurrency;
}
