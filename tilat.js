const hidtxtdiv6 = document.querySelector("#hiddentext6")
const hidtxtbtn6 = document.querySelector("#hidtxtbtn6")
const etusukuInput6 = document.querySelector("#Etusuku6")
const sähköInput6 = document.querySelector("#sahko6")
const puhelinInput6 = document.querySelector("#numero6")
const alkuInput6 = document.querySelector("#alkamis")
const loppuInput6 = document.querySelector("#loppumis")
const saapumisInput = document.querySelector("#saapu6")
const tilaInput = document.querySelector("#tila6")


hidtxtbtn6.addEventListener("click", function () {
    hidtxtdiv6.classList.toggle("hidden")
});

  form6.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const etusuku6 = etusukuInput6.value.trim();
    const sahko6 = sähköInput6.value.trim();
    const numero6 = puhelinInput6.value.trim();
    const alkamis = alkuInput6.value;
    const loppumis = loppuInput6.value;
    const päivä5 = new Date();
    const saapu6 = new Date(saapumisInput.value);
    const tila6 = tilaInput.value.trim();
    const alkutunnit = Number(alkamis.split(":")[0]);
    const lopputunnit = Number(loppumis.split(":")[0]);
   

    saapu6.setHours(0, 0, 0, 0);
    feedback6.textContent = "";
    feedback6.className = "feedback";

    if (etusuku6 === ""){
        feedback6.textContent = "Etunimi ja sukunimi ovat pakollisia!"
        return;
    }
    if (etusuku6.length < 4) {
        feedback6.textContent = "Etunimi ja sukunimi täytyy olla vähintään 4 merkkiä!"
        return;
    }
    if (sahko6 === "") {
        feedback6.textContent = "Sähköpostiosoite on pakollinen!"
        return;
    }
    if (!sahko6.includes("@")) {
        feedback6.textContent = "Sähköpostissa täytyy olla @ merkki!"
        return;
    }
    if (sahko6.length < 3) {
        feedback6.textContent = "Sähköposti täytyy olla vähintään 3 merkkiä!"
        return;
    }
    if (numero6 === "") {
        feedback6.textContent = "Puhelinnumero on pakollinen!"
        return;
    }
    if (numero6.length < 6) {
        feedback6.textContent = "Puhelinnumero täytyy olla vähintään 6 merkkiä!"
        return;
    }
    if (tila6 === "none") {
        feedback6.textContent = "Valitse yksi tiloista."
        return;
    }
    if (saapu6 < päivä5) {
        feedback6.textContent = "Päivämäärä ei voi olla menneyisyydessä!"
        return;
    }
    if (alkutunnit < 7) {
        feedback6.textContent = "Alkamiskellonaika täytyy olla 7:00 ja 20:00 välillä!"
        return;
    }
    if (alkutunnit > 20) {
        feedback6.textContent = "Alkamiskellonaika täytyy olla 7:00 ja 20:00 välillä!"
        return;
    }
    if ((lopputunnit < 8) && (lopputunnit > 2)){
        feedback6.textContent = "Loppumiskellonaika täytyy olla 8:00 ja 2:00 välillä!"
        return;
    }


    feedback6.textContent = "Lomake lähetetty. Tarkistamme tilojen saatavuuden ja vastaamme lähetettyyn sähköpostiosoitteeseen mahdollisimman pian."
    form6.reset();
});
