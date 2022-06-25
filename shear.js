// 13 inputs    15 sonuç       6 answer

// 6 Cevap tanımlama
const cevaptwo1 = document.querySelector("#cevaptwo1");
const cevaptwo2 = document.querySelector("#cevaptwo2");
const cevaptwo3 = document.querySelector("#cevaptwo3");
const cevaptwo4 = document.querySelector("#cevaptwo4");
const cevaptwo5 = document.querySelector("#cevaptwo5");
const cevaptwo6 = document.querySelector("#cevaptwo6");

// 13 inputs Tanımlama
const binputtwo1 = document.querySelector("#inputtwo1");
const hinputtwo2 = document.querySelector("#inputtwo2");
const cinputtwo3 = document.querySelector("#inputtwo3");
const opening_widthinputtwo4 = document.querySelector("#inputtwo4");
const fcinputtwo5 = document.querySelector("#inputtwo5");
const fyinputtwo6 = document.querySelector("#inputtwo6");
const D_tensioninputtwo7 = document.querySelector("#inputtwo7");
const n_tensioninputtwo8 = document.querySelector("#inputtwo8");
const D_shearinputtwo9 = document.querySelector("#inputtwo9");
const s_shearinputtwo10 = document.querySelector("#inputtwo10");
const n_shearinputtwo11 = document.querySelector("#inputtwo11");
const Muinputtwo12 = document.querySelector("#inputtwo12");
const Vuinputtwo13 = document.querySelector("#inputtwo13");

// 15 sonuç Tanımlama
const sonuctwo1 = document.querySelector("#sonuctwo1");
const sonuctwo2 = document.querySelector("#sonuctwo2");
const sonuctwo3 = document.querySelector("#sonuctwo3");
const sonuctwo4 = document.querySelector("#sonuctwo4");
const sonuctwo5 = document.querySelector("#sonuctwo5");
const sonuctwo6 = document.querySelector("#sonuctwo6");
const sonuctwo7 = document.querySelector("#sonuctwo7");
const sonuctwo8 = document.querySelector("#sonuctwo8");
const sonuctwo9 = document.querySelector("#sonuctwo9");
const sonuctwo10 = document.querySelector("#sonuctwo10");
const sonuctwo11 = document.querySelector("#sonuctwo11");
const sonuctwo12 = document.querySelector("#sonuctwo12");
const sonuctwo13 = document.querySelector("#sonuctwo13");

const sonuctwo15 = document.querySelector("#sonuctwo15");

// ButonlarTwo
const calculateTwo = document.querySelector("#calculatetwo");
const clearTwo = document.querySelector("#inputcleartwo");

//eventlistener ekleme
calculateTwo.addEventListener("click", hesaplaTwo);
clearTwo.addEventListener("click", clearInputsTwo);

function clearInputsTwo(e) {
  // input temizleme
  binputtwo1.value = "";
  hinputtwo2.value = "";
  cinputtwo3.value = "";
  opening_widthinputtwo4.value = "";
  fcinputtwo5.value = "";
  fyinputtwo6.value = "";
  D_tensioninputtwo7.value = "";
  n_tensioninputtwo8.value = "";
  D_shearinputtwo9.value = "";
  s_shearinputtwo10.value = "";
  n_shearinputtwo11.value = "";
  Muinputtwo12.value = "";
  Vuinputtwo13.value = "";

  // SONUÇ TEMİZLEME
  sonuctwo1.innerHTML = "";
  sonuctwo2.innerHTML = "";
  sonuctwo3.innerHTML = "";
  sonuctwo4.innerHTML = "";
  sonuctwo5.innerHTML = "";
  sonuctwo6.innerHTML = "";
  sonuctwo7.innerHTML = "";
  sonuctwo8.innerHTML = "";
  sonuctwo9.innerHTML = "";
  sonuctwo10.innerHTML = "";
  sonuctwo11.innerHTML = "";
  sonuctwo12.innerHTML = "";
  sonuctwo13.innerHTML = "";

  sonuctwo15.innerHTML = "";

  // CEVAP TEMİZLEME
  cevaptwo1.innerHTML = "";
  cevaptwo2.innerHTML = "";
  cevaptwo3.innerHTML = "";
  cevaptwo4.innerHTML = "";
  cevaptwo5.innerHTML = "";
  cevaptwo6.innerHTML = "";

  e.preventDefault();
}

function hesaplaTwo(e) {
  cevaptwo1.innerHTML = "";
  cevaptwo2.innerHTML = "";
  cevaptwo3.innerHTML = "";
  cevaptwo4.innerHTML = "";
  cevaptwo5.innerHTML = "";
  cevaptwo6.innerHTML = "";

  const b = binputtwo1.value;
  const h = hinputtwo2.value;
  const c = cinputtwo3.value;
  const opening_width = opening_widthinputtwo4.value;
  const fc = fcinputtwo5.value;
  const fy = fyinputtwo6.value;
  const D_tension = D_tensioninputtwo7.value;
  const n_tension = n_tensioninputtwo8.value;
  const D_shear = D_shearinputtwo9.value;
  const s_shear = s_shearinputtwo10.value;
  const n_shear = n_shearinputtwo11.value;
  const Mu = Muinputtwo12.value;
  const Vu = Vuinputtwo13.value;

  if (
    b === "" ||
    h === "" ||
    c === "" ||
    opening_width === "" ||
    fc === "" ||
    fy === "" ||
    D_tension === "" ||
    n_tension === "" ||
    D_shear === "" ||
    s_shear === "" ||
    n_shear === "" ||
    Mu === "" ||
    Vu === ""
  ) {
    const parenttwo = document.getElementById("trainingtwo");
    const alertdivtwo = document.createElement("div");

    alertdivtwo.classList.add("alertdiv");
    alertdivtwo.textContent =
      "ATTENTION!.... This field can not be left empty.";

    parenttwo.appendChild(alertdivtwo);

    setTimeout(function () {
      alertdivtwo.remove();
    }, 2000);
  } else {
    // sonuç1
    const As = (Number(n_tension) * 3.14 * Number(D_tension) ** 2) / 4;
    sonuctwo1.innerHTML = Number(As.toFixed(6));

    // sonuç2
    const Av = (Number(n_shear) * 3.14 * Number(D_shear) ** 2) / 4;
    sonuctwo2.innerHTML = Number(Av.toFixed(6));

    // sonuç3
    const a = (Number(As) * Number(fy)) / (0.85 * Number(fc) * Number(b));
    sonuctwo3.innerHTML = Number(a.toFixed(6));

    // sonuç4
    const d = Number(h) - (Number(c) + Number(D_tension) / 2 + Number(D_shear));
    sonuctwo4.innerHTML = Number(d.toFixed(6));

    // sonuç5
    const dv = Number(h) - (Number(c) + Number(D_shear) / 2 + Number(a) / 2);
    sonuctwo5.innerHTML = Number(dv.toFixed(6));

    // sonuç6
    const bw = Number(b) - Number(opening_width);
    sonuctwo6.innerHTML = Number(bw.toFixed(6));

    //  sonuç7
    let calc_1first = (Number(Vu) * 0.001 * Number(dv)) / Number(Mu);
    sonuctwo7.innerHTML = Number(calc_1first.toFixed(6));

    let calc_1;

    if (calc_1first >= 1.0) {
      calc_1 = 1.0;
    } else {
      calc_1 = calc_1first;
    }

    const Phi_shear = 0.85;

    // sonuç8
    const vu =
      (Number(Vu) * 1000) / (Number(Phi_shear) * Number(bw) * Number(dv));
    sonuctwo8.innerHTML = Number(vu.toFixed(6));

    // sonuç9
    const rho_w = Number(As) / (Number(bw) * Number(d));
    sonuctwo9.innerHTML = Number(rho_w.toFixed(6));

    // sonuç10
    const vc = 0.16 * Math.sqrt(fc) + 17 * Number(rho_w) * Number(calc_1);
    sonuctwo10.innerHTML = Number(vc.toFixed(6));

    // sonuç11
    const vc_max = 0.29 * Math.sqrt(fc);
    sonuctwo11.innerHTML = Number(vc_max.toFixed(6));

    if (vc < vc_max) {
      // cevap 1
      displayMessageTwo1("OK");
    } else {
      // cevap 1
      displayMessageTwo2("NOT OK");
    }

    if (vu < vc) {
      // cevap 2
      displayMessageTwo3("Shear reinforcement NOT REQUIRED");
    } else {
      // cevap 2
      displayMessageTwo4("Shear reinforcement REQUIRED");
    }

    if (vu / vc < (2 / 3) * Math.sqrt(fc)) {
      // cevap 3
      displayMessageTwo5("Section dimension SUFFICIENT");
    } else {
      // cevap 3
      displayMessageTwo6("Section dimension NOT SUFFICIENT");
    }

    // sonuç12
    const Av_req = Math.max(
      0,
      ((Number(vu) - Number(vc)) * Number(bw) * Number(s_shear)) / Number(fy) ||
        0 // sonuç "NaN" Çokmasın diye
    );
    sonuctwo12.innerHTML = Number(Av_req.toFixed(6));

    let s_shearmax = 0;

    if (dv / 2 < 600) {
      //   sonuç 13
      s_shearmax = Number(dv) / 2;

      sonuctwo13.innerHTML = Number(s_shearmax.toFixed(6));
    } else {
      // sonuç 14
      s_shearmax = 600;
      sonuctwo13.innerHTML = Number(s_shearmax);
    }

    if (s_shear < s_shearmax) {
      // cevap 4
      displayMessageTwo7("OK");
    } else {
      // cevap 4
      displayMessageTwo8("NOT OK");
    }

    if (Av_req < Av) {
      // cevap 5
      displayMessageTwo9("OK");
    } else {
      // cevap 5
      displayMessageTwo10("NOT OK");
    }

    // sonuç 15
    const Av_min = (0.42 * Number(bw) * Number(s_shearmax)) / Number(fy);
    sonuctwo15.innerHTML = Number(Av_min.toFixed(6));

    if (Av_min < Av) {
      // cevap 6
      displayMessageTwo11("OK");
    } else {
      // cevap 6
      displayMessageTwo12("NOT OK");
    }
  }

  e.preventDefault();
}

function displayMessageTwo1(message) {
  const divmessagetwo1 = document.createElement("div");

  divmessagetwo1.textContent = message;
  divmessagetwo1.style.background = "green";
  divmessagetwo1.style.textAlign = "center";
  cevaptwo1.appendChild(divmessagetwo1);
}

function displayMessageTwo2(message) {
  const divmessagetwo2 = document.createElement("div");

  divmessagetwo2.textContent = message;
  divmessagetwo2.style.background = "red";
  divmessagetwo2.style.textAlign = "center";
  cevaptwo1.appendChild(divmessagetwo2);
}

function displayMessageTwo3(message) {
  const divmessagetwo3 = document.createElement("div");

  divmessagetwo3.textContent = message;
  divmessagetwo3.style.background = "green";
  divmessagetwo3.style.textAlign = "center";
  cevaptwo2.appendChild(divmessagetwo3);
}

function displayMessageTwo4(message) {
  const divmessagetwo4 = document.createElement("div");

  divmessagetwo4.textContent = message;
  divmessagetwo4.style.background = "red";
  divmessagetwo4.style.textAlign = "center";
  cevaptwo2.appendChild(divmessagetwo4);
}

function displayMessageTwo5(message) {
  const divmessagetwo5 = document.createElement("div");

  divmessagetwo5.textContent = message;
  divmessagetwo5.style.background = "green";
  divmessagetwo5.style.textAlign = "center";
  cevaptwo3.appendChild(divmessagetwo5);
}

function displayMessageTwo6(message) {
  const divmessagetwo6 = document.createElement("div");

  divmessagetwo6.textContent = message;
  divmessagetwo6.style.background = "red";
  divmessagetwo6.style.textAlign = "center";
  cevaptwo3.appendChild(divmessagetwo6);
}

function displayMessageTwo7(message) {
  const divmessagetwo7 = document.createElement("div");

  divmessagetwo7.textContent = message;
  divmessagetwo7.style.background = "green";
  divmessagetwo7.style.textAlign = "center";
  cevaptwo4.appendChild(divmessagetwo7);
}

function displayMessageTwo8(message) {
  const divmessagetwo8 = document.createElement("div");

  divmessagetwo8.textContent = message;
  divmessagetwo8.style.background = "red";
  divmessagetwo8.style.textAlign = "center";
  cevaptwo4.appendChild(divmessagetwo8);
}

function displayMessageTwo9(message) {
  const divmessagetwo9 = document.createElement("div");

  divmessagetwo9.textContent = message;
  divmessagetwo9.style.background = "green";
  divmessagetwo9.style.textAlign = "center";
  cevaptwo5.appendChild(divmessagetwo9);
}

function displayMessageTwo10(message) {
  const divmessagetwo10 = document.createElement("div");

  divmessagetwo10.textContent = message;
  divmessagetwo10.style.background = "red";
  divmessagetwo10.style.textAlign = "center";
  cevaptwo5.appendChild(divmessagetwo10);
}

function displayMessageTwo11(message) {
  const divmessagetwo11 = document.createElement("div");

  divmessagetwo11.textContent = message;
  divmessagetwo11.style.background = "green";
  divmessagetwo11.style.textAlign = "center";
  cevaptwo6.appendChild(divmessagetwo11);
}

function displayMessageTwo12(message) {
  const divmessagetwo12 = document.createElement("div");

  divmessagetwo12.textContent = message;
  divmessagetwo12.style.background = "red";
  divmessagetwo12.style.textAlign = "center";
  cevaptwo6.appendChild(divmessagetwo12);
}
