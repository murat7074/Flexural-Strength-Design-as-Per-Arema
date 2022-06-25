// sayfa seçimi
const sayfa1btn = document.querySelector("#secimbtn1");
const sayfa2btn = document.querySelector("#secimbtn2");

const sayfa1div = document.querySelector("#page1");
const sayfa2div = document.querySelector("#page2");

sayfa2btn.addEventListener("click", function (e) {
  sayfa2div.style.display = "block";
  sayfa1div.style.display = "none";
});

sayfa1btn.addEventListener("click", function (e) {
  sayfa1div.style.display = "block";
  sayfa2div.style.display = "none";
});

// cevap tanımlama 3 adet
const cevap1 = document.querySelector("#cevap1");
const cevap2 = document.querySelector("#cevap2");
const cevap3 = document.querySelector("#cevap3");

// sonuç tanımlama 10 adet
const sonuc1 = document.querySelector("#sonuc1");
const sonuc2 = document.querySelector("#sonuc2");
const sonuc3 = document.querySelector("#sonuc3");
const sonuc4 = document.querySelector("#sonuc4");
const sonuc5 = document.querySelector("#sonuc5");
const sonuc6 = document.querySelector("#sonuc6");
const sonuc7 = document.querySelector("#sonuc7");
const sonuc8 = document.querySelector("#sonuc8");
const sonuc9 = document.querySelector("#sonuc9");
const sonuc10 = document.querySelector("#sonuc10");

// INPUT TANIMLAMA 11 adet
const binput1 = document.querySelector("#input1");
const hinput2 = document.querySelector("#input2");
const cinput3 = document.querySelector("#input3");
const fcinput4 = document.querySelector("#input4");
const fyinput5 = document.querySelector("#input5");
const D_tensioninput6 = document.querySelector("#input6");
const n_tensioninput7 = document.querySelector("#input7");
const D_shearinput8 = document.querySelector("#input8");
const s_shearinput9 = document.querySelector("#input9");
const n_shearinput10 = document.querySelector("#input10");
const Muinput11 = document.querySelector("#input11");

// Butonlar
const calculate = document.querySelector("#calculate");
const clear = document.querySelector("#inputclear");

//eventlistener ekleme
calculate.addEventListener("click", hesapla);
clear.addEventListener("click", clearInputs);

// İNPUT TEMİZLEME
function clearInputs(e) {
  binput1.value = "";
  hinput2.value = "";
  cinput3.value = "";
  fcinput4.value = "";
  fyinput5.value = "";
  D_tensioninput6.value = "";
  n_tensioninput7.value = "";
  D_shearinput8.value = "";
  s_shearinput9.value = "";
  n_shearinput10.value = "";
  Muinput11.value = "";

  // SONUÇ TEMİZLEME
  sonuc1.innerHTML = "";
  sonuc2.innerHTML = "";
  sonuc3.innerHTML = "";
  sonuc4.innerHTML = "";
  sonuc5.innerHTML = "";
  sonuc6.innerHTML = "";
  sonuc7.innerHTML = "";
  sonuc8.innerHTML = "";
  sonuc9.innerHTML = "";
  sonuc10.innerHTML = "";

  // CEVAP TEMİZLEME
  cevap1.innerHTML = "";
  cevap2.innerHTML = "";
  cevap3.innerHTML = "";

  e.preventDefault();
}

// HESAPLAMA
function hesapla(e) {
  cevap1.innerHTML = "";
  cevap2.innerHTML = "";
  cevap3.innerHTML = "";

  const b = binput1.value;
  const h = hinput2.value;
  const c = cinput3.value;
  const fc = fcinput4.value;
  const fy = fyinput5.value;
  const D_tension = D_tensioninput6.value;
  const n_tension = n_tensioninput7.value;
  const D_shear = D_shearinput8.value;
  const s_shear = s_shearinput9.value;
  const n_shear = n_shearinput10.value;
  const Mu = Muinput11.value;

  if (
    b === "" ||
    h === "" ||
    c === "" ||
    fc === "" ||
    fy === "" ||
    D_tension === "" ||
    n_tension === "" ||
    D_shear === "" ||
    s_shear === "" ||
    n_shear === "" ||
    Mu === ""
  ) {
    const parent = document.getElementById("training");
    const alertdiv = document.createElement("div");

    alertdiv.classList.add("alertdiv");
    alertdiv.textContent = "ATTENTION!.... This field can not be left empty.";

    parent.appendChild(alertdiv);

    setTimeout(function () {
      alertdiv.remove();
    }, 2000);
  } else {
    const As = (n_tension * 3.14 * Math.pow(D_tension, 2)) / 4;
    // 1.sonUÇ
    sonuc1.innerHTML = Number(As.toFixed(6));

    const Av = (n_shear * (1000 / s_shear) * 3.14 * Math.pow(D_shear, 2)) / 4;
    // sonuç 2
    sonuc2.innerHTML = Number(Av.toFixed(6));

    const d = Number(h) - (Number(c) + Number(D_tension) / 2 + Number(D_shear));
    // sonuç 3
    sonuc3.innerHTML = Number(d.toFixed(6));

    const a = (As * fy) / (0.85 * fc * b);
    // sonuç 4
    sonuc4.innerHTML = Number(a.toFixed(6));

    let Beta_1;

    if (fc < 28) {
      Beta_1 = 0.85;
    } else {
      Beta_1 = 0.85 - (0.05 * (fc - 28)) / 7;
    }

    const Phi_flexure = 0.9;
    const fr = 0.62 * Math.sqrt(fc);
    // sonuç 5
    sonuc5.innerHTML = Number(fr.toFixed(6));

    const Mn = As * fy * (d - a / 2) * Math.pow(10, -6);
    // sonuç 6
    sonuc6.innerHTML = Number(Mn.toFixed(6));

    const Mr = Phi_flexure * Mn;
    // sonuç 7
    sonuc7.innerHTML = Number(Mr.toFixed(6));

    const rho = As / (b * d);
    // sonuç 8
    sonuc8.innerHTML = Number(rho.toFixed(6));

    const rho_b =
      (0.85 * Beta_1 * Number(fc) * 600) / (Number(fy) * (600 + Number(fy)));
    const son9 = Number(rho_b) * 0.75;
    // sonuç 9
    sonuc9.innerHTML = Number(son9.toFixed(6));

    if (0.75 * rho_b < rho) {
      displayMessage1("NOt OK");
    } else {
      displayMessage2("OK");
    }

    if (Mu > Mr) {
      displayMessage3("NOt OK");
    } else {
      displayMessage4("OK");
    }

    const Mcr = (Math.pow(10, -6) * fr * b * h ** 2) / 6;
    // sonuç 10
    sonuc10.innerHTML = Number(Mcr.toFixed(6));

    if (Number(Mr) > Math.min(1.33 * Number(Mu), 1.2 * Number(Mcr))) {
      displayMessage6("OK");
    } else {
      displayMessage5("NOt OK");
    }
  }

  e.preventDefault();
}

function displayMessage1(message) {
  const divmessage1 = document.createElement("div");
  divmessage1.textContent = message;
  divmessage1.style.background = "red";
  divmessage1.style.textAlign = "center";
  cevap1.appendChild(divmessage1);
}

function displayMessage2(message) {
  const divmessage2 = document.createElement("div");
  divmessage2.textContent = message;
  divmessage2.style.background = "green";
  divmessage2.style.textAlign = "center";
  cevap1.appendChild(divmessage2);
}

function displayMessage3(message) {
  const divmessage3 = document.createElement("div");
  divmessage3.textContent = message;
  divmessage3.style.background = "red";
  divmessage3.style.textAlign = "center";
  cevap2.appendChild(divmessage3);
}

function displayMessage4(message) {
  const divmessage4 = document.createElement("div");
  divmessage4.textContent = message;
  divmessage4.style.background = "green";
  divmessage4.style.textAlign = "center";
  cevap2.appendChild(divmessage4);
}

function displayMessage5(message) {
  const divmessage5 = document.createElement("div");
  divmessage5.textContent = message;
  divmessage5.style.background = "red";
  divmessage5.style.textAlign = "center";
  cevap3.appendChild(divmessage5);
}

function displayMessage6(message) {
  const divmessage6 = document.createElement("div");
  divmessage6.textContent = message;
  divmessage6.style.background = "green";
  divmessage6.style.textAlign = "center";
  cevap3.appendChild(divmessage6);
}
