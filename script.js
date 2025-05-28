//Const haren knoppen en Img
const krullenKnop = document.querySelector('#krullenKnop')
const stijlKnop = document.querySelector('#stijlKnop')
const krullenImg = document.querySelector('#krullenImg')
const stijlImg = document.querySelector('#stijlImg')


//Const Shirts knoppen en Img
const shirtRozeKnop = document.querySelector('#shirtRozeKnop')
const shirtGroenknop = document.querySelector('#shirtGroenKnop')
const shirtRozeImg = document.querySelector('#shirtRozeImg')
const shirtGroenImg = document.querySelector('#shirtGroenImg')

//Const Broeken knoppen en Img
const zwarteBroekKnop = document.querySelector('#zwarteBroekKnop')
const grijzeBroekKnop = document.querySelector('#grijzeBroekKnop')
const broekZwartImg = document.querySelector('#broekZwartImg')
const broekGrijsImg = document.querySelector('#broekGrijsImg')

//Const Schoenen knoppen en Img
const zwarteSchoenenKnop = document.querySelector ('#zwarteSchoenenKnop')
const blauweSchoenenKnop = document.querySelector ('#blauweSchoenenKnop')
const zwarteSchoenenImg = document.querySelector('#zwarteSchoenenImg')
const blauweSchoenenImg = document.querySelector('#blauweSchoenenImg')

//Const voor de randomize knop
const randomKnop = document.querySelector('#randomKnop')

// Toggle afbeeldingen functie
function toggleAfbeeldingen (event, afbeeldingen) {
    const geselecteerdeImg = document.querySelector("#" + event.target.name)
     if (!geselecteerdeImg.classList.contains("verborgen")) {
        geselecteerdeImg.classList.add("verborgen")
    } else {
        afbeeldingen.forEach(img => img.classList.add("verborgen"));
        geselecteerdeImg.classList.remove("verborgen")
     }
}

// Haren functie voor verandering afbeeldingen
function toonHaarLB(event) {
    toggleAfbeeldingen(event, [krullenImg, stijlImg])
}

// Shirts functie voor verandering afbeeldingen
function toonShirt(event) {
    toggleAfbeeldingen(event, [shirtRozeImg, shirtGroenImg])
}

// Broeken functie voor verandering afbeeldingen
function toonBroek(event) {
    toggleAfbeeldingen(event, [broekZwartImg, broekGrijsImg])
}

//Schoenen functie voor veranderingen afbeeldingen
function toonSchoenen(event) {
    toggleAfbeeldingen(event, [zwarteSchoenenImg, blauweSchoenenImg])
}

// Hulp functie forceer afbeelding
function forceerAfbeelding (naam, afbeeldingen) {
    afbeeldingen.forEach(img => img.classList.add("verborgen"))
    const geselecteerdeImg = document.getElementById(naam)
    if(geselecteerdeImg) {
        geselecteerdeImg.classList.remove("verborgen")
    }
}

//Randomize knop functie
function randomOutfit() {
    // Willekeurige haarstijl
    const haarOpties = ["krullenImg", "stijlImg"];
    const willekeurigHaar = haarOpties[Math.floor(Math.random() * 2)]
    forceerAfbeelding (willekeurigHaar, [krullenImg, stijlImg])

    
    // Willekeurig shirt
    const shirtOpties = ["shirtRozeImg", "shirtGroenImg"];
    const willekeurigShirt = shirtOpties[Math.floor(Math.random() * 2)]
    forceerAfbeelding (willekeurigShirt, [shirtRozeImg, shirtGroenImg])


    // Willekeurige broek
    const broekOpties = ["broekZwartImg", "broekGrijsImg"];
    const willekeurigeBroek = broekOpties[Math.floor(Math.random() * 2)];
    forceerAfbeelding (willekeurigeBroek, [broekZwartImg, broekGrijsImg])

    // Willekeurige schoenen
    const schoenenOpties = ["zwarteSchoenenImg", "blauweSchoenenImg"];
    const willekeurigeSchoenen = schoenenOpties[Math.floor(Math.random() * 2)];
    forceerAfbeelding (willekeurigeSchoenen, [zwarteSchoenenImg, blauweSchoenenImg])
}

// Events kleiner maken geholpen door Denise Scholten//
//Haar event
document.querySelectorAll(".harenKnoppen").forEach(btn =>
    btn.addEventListener("click", toonHaarLB)
);
//Shirts event
document.querySelectorAll(".shirtsKnoppen").forEach(btn =>
    btn.addEventListener("click", toonShirt)
);
//broeken event
document.querySelectorAll(".broekenKnoppen").forEach(btn =>
    btn.addEventListener("click", toonBroek)
); 
//schoenen event
document.querySelectorAll(".schoenenKnoppen").forEach(btn =>
    btn.addEventListener("click", toonSchoenen)
); 
//Random event
randomKnop.addEventListener("click", randomOutfit);

























