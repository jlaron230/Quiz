let blocCouleur = document.getElementById("couleur");
let reponses = [...document.getElementsByClassName("reponse")];
let score = document.getElementById("score");

let CompteurScore = 0;
let rgbADeviner;

const generateEntierRgb = () => {

 return Math.floor(Math.random() * 256) //[0 et 255]
};

const generateRgb = () => {
let r = generateEntierRgb()
let g = generateEntierRgb()
let b = generateEntierRgb()

return `rgb(${r},${g},${b})`; //rgb (12,55,220)
};


const Initialisation = () =>{
    score.textContent = CompteurScore
    let ReponseCorrecte = Math.floor(Math.random() * 7) //[0 et 3]

    reponses.forEach(rep => (rep.textContent = generateRgb()));
    rgbADeviner = reponses[ReponseCorrecte].textContent;

    blocCouleur.style.backgroundColor = rgbADeviner;
};

const verifierReponse = (e) => {
let valeurCliquee = e.target.textContent;

if (valeurCliquee !=  rgbADeviner){
window.alert(`Vous avez perdu ! la réponse était ${rgbADeviner}`);
CompteurScore = 0;
return Initialisation();
}
CompteurScore ++
Initialisation();

};

reponses.forEach((rep) => {
    rep.addEventListener("click", verifierReponse)
});

Initialisation();

