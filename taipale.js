const hidtxtdiv = document.querySelector("#hiddentext")
const hidtxtbtn = document.querySelector("#hidtxtbtn")
const etusukuInput = document.querySelector("#Etusuku")
const sähköInput = document.querySelector("#sähkö")
const puhelinInput = document.querySelector("#numero")
const saapuInput = document.querySelector("#saapu")
const lähtöInput = document.querySelector("#lähtö")


hidtxtbtn.addEventListener("click", function () {
    hidtxtdiv.classList.toggle("hidden")
});

  form.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const etusuku = etusukuInput.value.trim();
    const sähkö = sähköInput.value.trim();
    const numero = puhelinInput.value.trim();
    const saapu = new Date(saapuInput.value);
    const lähtö = new Date(lähtöInput.value);
    const päivä = new Date();
   

    saapu.setHours(0, 0, 0, 0);
    lähtö.setHours(0, 0, 0, 0);
    const summa = lähtö - saapu;
    const yöt = summa / (1000 * 60 * 60 * 24);
    feedback.textContent = "";
    feedback.className = "feedback";

    if (etusuku === ""){
        feedback.textContent = "Etunimi ja sukunimi ovat pakollisia!"
        return;
    }
    if (etusuku.length < 4) {
        feedback.textContent = "Etunimi ja sukunimi täytyy olla vähintään 4 merkkiä!"
        return;
    }
    if (sähkö === "") {
        feedback.textContent = "Sähköpostiosoite on pakollinen!"
        return;
    }
    if (!sähkö.includes("@")) {
        feedback.textContent = "Sähköpostissa täytyy olla @ merkki!"
        return;
    }
    if (sähkö.length < 3) {
        feedback.textContent = "Sähköposti täytyy olla vähintään 3 merkkiä!"
        return;
    }
    if (numero.length < 6) {
        feedback.textContent = "Puhelinnumero täytyy olla vähintään 6 merkkiä!"
        return;
    }
    if (saapu < päivä) {
        feedback.textContent = "Saapumispäivämäärä ei voi olla menneyisyydessä!"
        return;
    }
    if (lähtö < päivä) {
        feedback.textContent = "Lähtöpäivämäärä ei voi olla menneisyydessä!"
        return;
    }
    if (lähtö < saapu) {
        feedback.textContent = "Lähtöpäivämäärä ei olla ennen saapumispäivämäärää!"
        return;
    }

    feedback.textContent = "Varausvahvistus on lähetetty osoitteeseen " + sähkö + ". " + " Loppusumma on " + yöt * 70 + "€."
    form.reset();
});
const hidtxtdiv2 = document.querySelector("#hiddentext2")
const hidtxtbtn2 = document.querySelector("#hidtxtbtn2")
const etusukuInput2 = document.querySelector("#Etusuku2")
const sähköInput2 = document.querySelector("#sähkö2")
const puhelinInput2 = document.querySelector("#numero2")
const saapuInput2 = document.querySelector("#saapu2")
const lähtöInput2 = document.querySelector("#lähtö2")

hidtxtbtn2.addEventListener("click", function () {
    hidtxtdiv2.classList.toggle("hidden")
});

  form2.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const etusuku2 = etusukuInput2.value.trim();
    const sähkö2 = sähköInput2.value.trim();
    const numero2 = puhelinInput2.value.trim();
    const saapu2 = new Date(saapuInput2.value);
    const lähtö2 = new Date(lähtöInput2.value);
    const päivä2 = new Date();
   

    saapu2.setHours(0, 0, 0, 0);
    lähtö2.setHours(0, 0, 0, 0);
    const summa2 = lähtö2 - saapu2;
    const yöt2 = summa2 / (1000 * 60 * 60 * 24);
    feedback2.textContent = "";
    feedback2.className = "feedback";

    if (etusuku2 === ""){
        feedback2.textContent = "Etunimi ja sukunimi ovat pakollisia!"
        return;
    }
    if (etusuku2.length < 4) {
        feedback2.textContent = "Etunimi ja sukunimi täytyy olla vähintään 4 merkkiä!"
        return;
    }
    if (sähkö2 === "") {
        feedback2.textContent = "Sähköpostiosoite on pakollinen!"
        return;
    }
    if (!sähkö2.includes("@")) {
        feedback2.textContent = "Sähköpostissa täytyy olla @ merkki!"
        return;
    }
    if (sähkö2.length < 3) {
        feedback2.textContent = "Sähköposti täytyy olla vähintään 3 merkkiä!"
        return;
    }
    if (numero2.length < 6) {
        feedback2.textContent = "Puhelinnumero täytyy olla vähintään 6 merkkiä!"
        return;
    }
    if (saapu2 < päivä2) {
        feedback2.textContent = "Saapumispäivämäärä ei voi olla menneyisyydessä!"
        return;
    }
    if (lähtö2 < päivä2) {
        feedback2.textContent = "Lähtöpäivämäärä ei voi olla menneisyydessä!"
        return;
    }
    if (lähtö2 < saapu2) {
        feedback2.textContent = "Lähtöpäivämäärä ei olla ennen saapumispäivämäärää!"
        return;
    }

    feedback2.textContent = "Varausvahvistus on lähetetty osoitteeseen " + sähkö2 + ". " + " Loppusumma on " + yöt2 * 100 + "€."
    form2.reset();
});
  
const hidtxtdiv3 = document.querySelector("#hiddentext3")
const hidtxtbtn3 = document.querySelector("#hidtxtbtn3")
const etusukuInput3 = document.querySelector("#Etusuku3")
const sähköInput3 = document.querySelector("#sähkö3")
const puhelinInput3 = document.querySelector("#numero3")
const saapuInput3 = document.querySelector("#saapu3")
const lähtöInput3 = document.querySelector("#lähtö3")
const määräInput3 = document.querySelector("#määrä3")



hidtxtbtn3.addEventListener("click", function () {
    hidtxtdiv3.classList.toggle("hidden")
});

  form3.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const etusuku3 = etusukuInput3.value.trim();
    const sähkö3 = sähköInput3.value.trim();
    const numero3 = puhelinInput3.value.trim();
    const saapu3 = new Date(saapuInput3.value);
    const lähtö3 = new Date(lähtöInput3.value);
    const päivä3 = new Date();
    const määrä3 = määräInput3.value.trim();

   

    saapu3.setHours(0, 0, 0, 0);
    lähtö3.setHours(0, 0, 0, 0);
    const summa3 = lähtö3 - saapu3;
    const yöt3 = summa3 / (1000 * 60 * 60 * 24);
    const maksu3 = yöt3 * 5;
    const henkmaksu3 = määrä3 * 10;
    const yhteen = maksu3 + henkmaksu3;
    feedback3.textContent = "";
    feedback3.className = "feedback";

    if (etusuku3 === ""){
        feedback3.textContent = "Etunimi ja sukunimi ovat pakollisia!"
        return;
    }
    if (etusuku3.length < 4) {
        feedback3.textContent = "Etunimi ja sukunimi täytyy olla vähintään 4 merkkiä!"
        return;
    }
    if (sähkö3 === "") {
        feedback3.textContent = "Sähköpostiosoite on pakollinen!"
        return;
    }
    if (!sähkö3.includes("@")) {
        feedback3.textContent = "Sähköpostissa täytyy olla @ merkki!"
        return;
    }
    if (sähkö3.length < 3) {
        feedback3.textContent = "Sähköposti täytyy olla vähintään 3 merkkiä!"
        return;
    }
    if (numero3 === "") {
        feedback3.textContent = "Puhelinnumero on pakollinen!"
    }
    if (numero3.length < 6) {
        feedback3.textContent = "Puhelinnumero täytyy olla vähintään 6 merkkiä!"
        return;
    }
    if (saapu3 < päivä3) {
        feedback3.textContent = "Saapumispäivämäärä ei voi olla menneyisyydessä!"
        return;
    }
    if (lähtö3 < päivä3) {
        feedback3.textContent = "Lähtöpäivämäärä ei voi olla menneisyydessä!"
        return;
    }
    if (lähtö3 < saapu3) {
        feedback3.textContent = "Lähtöpäivämäärä ei olla ennen saapumispäivämäärää!"
        return;
    }

    feedback3.textContent = "Varausvahvistus on lähetetty osoitteeseen " + sähkö3 + ". " + " Loppusumma on " + yhteen + "€."
    form3.reset();
});



const hidtxtdiv4 = document.querySelector("#hiddentext4")
const hidtxtbtn4 = document.querySelector("#hidtxtbtn4")
const etusukuInput4 = document.querySelector("#Etusuku4")
const sähköInput4 = document.querySelector("#sähkö4")
const puhelinInput4 = document.querySelector("#numero4")
const saapuInput4 = document.querySelector("#saapu4")
const lähtöInput4 = document.querySelector("#lähtö4")


hidtxtbtn4.addEventListener("click", function () {
    hidtxtdiv4.classList.toggle("hidden")
});

  form4.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const etusuku4 = etusukuInput4.value.trim();
    const sähkö4 = sähköInput4.value.trim();
    const numero4 = puhelinInput4.value.trim();
    const saapu4 = new Date(saapuInput4.value);
    const lähtö4 = new Date(lähtöInput4.value);
    const päivä4 = new Date();
   

    saapu4.setHours(0, 0, 0, 0);
    lähtö4.setHours(0, 0, 0, 0);
    const summa4 = lähtö4 - saapu4;
    const yöt4 = summa4 / (1000 * 60 * 60 * 24);
    feedback4.textContent = "";
    feedback4.className = "feedback";

    if (etusuku4 === ""){
        feedback4.textContent = "Etunimi ja sukunimi ovat pakollisia!"
        return;
    }
    if (etusuku4.length < 4) {
        feedback4.textContent = "Etunimi ja sukunimi täytyy olla vähintään 4 merkkiä!"
        return;
    }
    if (sähkö4 === "") {
        feedback4.textContent = "Sähköpostiosoite on pakollinen!"
        return;
    }
    if (!sähkö4.includes("@")) {
        feedback4.textContent = "Sähköpostissa täytyy olla @ merkki!"
        return;
    }
    if (sähkö4.length < 3) {
        feedback4.textContent = "Sähköposti täytyy olla vähintään 3 merkkiä!"
        return;
    }
    if (numero4 === "") {
        feedback4.textContent = "Puhelinnumero on pakollinen!"
    }
    if (numero4.length < 6) {
        feedback4.textContent = "Puhelinnumero täytyy olla vähintään 6 merkkiä!"
        return;
    }
    if (saapu4 < päivä4) {
        feedback4.textContent = "Saapumispäivämäärä ei voi olla menneyisyydessä!"
        return;
    }
    if (lähtö4 < päivä4) {
        feedback4.textContent = "Lähtöpäivämäärä ei voi olla menneisyydessä!"
        return;
    }
    if (lähtö4 < saapu4) {
        feedback4.textContent = "Lähtöpäivämäärä ei olla ennen saapumispäivämäärää!"
        return;
    }

    feedback4.textContent = "Varausvahvistus on lähetetty osoitteeseen " + sähkö4 + ". " + " Loppusumma on " + yöt4 * 20 + "€."
    form4.reset();
});


const hidtxtdiv5 = document.querySelector("#hiddentext5")
const hidtxtbtn5 = document.querySelector("#hidtxtbtn5")
const etusukuInput5 = document.querySelector("#Etusuku5")
const sähköInput5 = document.querySelector("#sähkö5")
const puhelinInput5 = document.querySelector("#numero5")
const saapuInput5 = document.querySelector("#saapu5")
const lähtöInput5 = document.querySelector("#lähtö5")
const huone2Input5 = document.querySelector("#huonekaksi5")
const huone4Input5 = document.querySelector("#huoneneljä5")

hidtxtbtn5.addEventListener("click", function () {
    hidtxtdiv5.classList.toggle("hidden")
});

  form5.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const etusuku5 = etusukuInput5.value.trim();
    const sähkö5 = sähköInput5.value.trim();
    const numero5 = puhelinInput5.value.trim();
    const saapu5 = new Date(saapuInput5.value);
    const lähtö5 = new Date(lähtöInput5.value);
    const päivä5 = new Date();
    const huone = document.querySelector('input[name="huone"]:checked');
   

    saapu5.setHours(0, 0, 0, 0);
    lähtö5.setHours(0, 0, 0, 0);
    const summa5 = lähtö5 - saapu5;
    const yöt5 = summa5 / (1000 * 60 * 60 * 24);
    feedback5.textContent = "";
    feedback5.className = "feedback";

    if (etusuku5 === ""){
        feedback5.textContent = "Etunimi ja sukunimi ovat pakollisia!"
        return;
    }
    if (etusuku5.length < 4) {
        feedback5.textContent = "Etunimi ja sukunimi täytyy olla vähintään 4 merkkiä!"
        return;
    }
    if (sähkö5 === "") {
        feedback5.textContent = "Sähköpostiosoite on pakollinen!"
        return;
    }
    if (!sähkö5.includes("@")) {
        feedback5.textContent = "Sähköpostissa täytyy olla @ merkki!"
        return;
    }
    if (sähkö5.length < 3) {
        feedback5.textContent = "Sähköposti täytyy olla vähintään 3 merkkiä!"
        return;
    }
    if (numero5 === "") {
        feedback5.textContent = "Puhelinnumero on pakollinen!"
        return;
    }
    if (numero5.length < 6) {
        feedback5.textContent = "Puhelinnumero täytyy olla vähintään 6 merkkiä!"
        return;
    }
    if (saapu5 < päivä5) {
        feedback5.textContent = "Saapumispäivämäärä ei voi olla menneyisyydessä!"
        return;
    }
    if (lähtö5 < päivä5) {
        feedback5.textContent = "Lähtöpäivämäärä ei voi olla menneisyydessä!"
        return;
    }
    if (lähtö5 < saapu5) {
        feedback5.textContent = "Lähtöpäivämäärä ei olla ennen saapumispäivämäärää!"
        return;
    }
    if (!huone) {
        feedback5.textContent = "Huonetyyppi on pakollinen!"
        return;
    }
    
    const huonelasku = Number(huone.value);


    feedback5.textContent = "Varausvahvistus on lähetetty osoitteeseen " + sähkö5 + ". " + " Loppusumma on " + yöt5 * huonelasku + "€."
    form5.reset();
});

