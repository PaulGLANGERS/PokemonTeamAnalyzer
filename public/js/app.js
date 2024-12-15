import Pokemon from "./Pokemon.js";
import Party from "./Party.js";
const pokemonList = [];
const partyList = [];
const weakness = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const team = [0,0,0,0,0,0];

const dropdown0 = document.getElementById("pok0DD");
const dropdown1 = document.getElementById("pok1DD");
const dropdown2 = document.getElementById("pok2DD");
const dropdown3 = document.getElementById("pok3DD");
const dropdown4 = document.getElementById("pok4DD");
const dropdown5 = document.getElementById("pok5DD");
const dropdownParty = document.getElementById("teamsDD")
const saveButton = document.getElementById("saveButton");
const popup = document.getElementById("popup");
const popupInput = document.getElementById("popupInput");
const popupSubmitButton = document.getElementById("popupSubmitButton");

function getSrc(type){
    switch (type.toUpperCase()) { // Assure que le type est insensible à la casse
        case "NONE":
            return "images/none.png";
        case "NORMAL":
            return "images/normal.png";
        case "FEU":
            return "images/fire.png";
        case "EAU":
            return "images/water.png";
        case "PLANTE":
            return "images/grass.png";
        case "ELECTRIK":
            return "images/elec.png";
        case "GLACE":
            return "images/ice.png";
        case "COMBAT":
            return "images/fight.png";
        case "POISON":
            return "images/poison.png";
        case "SOL":
            return "images/ground.png";
        case "VOL":
            return "images/fly.png";
        case "PSY":
            return "images/psychic.png";
        case "INSECTE":
            return "images/bug.png";
        case "ROCHE":
            return "images/rock.png";
        case "SPECTRE":
            return "images/ghost.png";
        case "DRAGON":
            return "images/dragon.png";
        case "TENEBRES":
            return "images/dark.png";
        case "ACIER":
            return "images/steel.png";
        default:
            return "images/none.png";
    }


}


saveButton.addEventListener("click", () => {
    popup.classList.remove("hidden");
    popup.classList.add("visible");
});

// Gérer le clic sur "Valider" dans le popup
popupSubmitButton.addEventListener("click", () => {
    const userInput = popupInput.value; 
    const [pok0, pok1, pok2, pok3, pok4, pok5] = team;
    if (!userInput) {
        alert('Veuillez entrer un nom.');
        return;
    }

    fetch("/api/parties", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userInput, pok0, pok1, pok2, pok3, pok4, pok5 })
    })
    .then((response) => {
        console.log(response);
    })
    .then((data) => {
        if (data.error) {
            console.error('Erreur :', data.error);
            alert('Error');
        }
    })
    .catch((err) => {
        console.error('Error');
    });

    popup.classList.remove("visible");
    popup.classList.add("hidden");
    popupInput.value = "";
});

function modifyWeaknessData(type){
    switch (type.toUpperCase()) { // Assure que le type est insensible à la casse
        case "NORMAL":
            weakness[10]-=2;
            weakness[8] +=1;
            break;
        case "FEU":
            weakness[7] -=1;
            weakness[1] -=1;
            weakness[15] -=1;
            weakness[13] -=1;
            weakness[3] -=1;
            weakness[2] +=1;
            weakness[5] +=1;
            weakness[6] +=1;
            break;
        case "EAU":
            weakness[3] +=1;
            weakness[4] +=1;
            weakness[7] -=1;
            weakness[1] -=1;
            weakness[2] -=1;
            weakness[15] -=1;
            break;
        case "PLANTE":
            weakness[1] +=1;
            weakness[15] +=1;
            weakness[13] +=1;
            weakness[14] +=1;
            weakness[12] +=1;
            weakness[2] -=1;
            weakness[4] -=1;            
            weakness[3] -=1;
            weakness[5] -=1;
            break;
        case "ELECTRIK":
            weakness[5] +=1;
            weakness[7] -=1;            
            weakness[4] -=1;
            weakness[12] -=1;
            break;
        case "GLACE":
            weakness[7] +=1;
            weakness[8] +=1;
            weakness[1] +=1;
            weakness[6] +=1;            
            weakness[15] -=1;
            break;
        case "COMBAT":
            weakness[9] +=1;
            weakness[12] +=1;
            weakness[13] -=1;
            weakness[11] -=1;            
            weakness[6] -=1;
            break;
        case "POISON":
            weakness[9] +=1;
            weakness[5] +=1;
            weakness[8] -=1;
            weakness[13] -=1;
            weakness[3] -=1;            
            weakness[14] -=1;
            break;
        case "SOL":
            weakness[2] +=1;
            weakness[3] +=1;
            weakness[15] +=1;
            weakness[4] -=2;
            weakness[14] -=1;            
            weakness[6] -=1;
            break;
        case "VOL":
            weakness[4] +=1;
            weakness[6] +=1;
            weakness[15] +=1;
            weakness[5] -=2;
            weakness[8] -=1;     
            weakness[13] -=1;                   
            weakness[3] -=1;
            break;
        case "PSY":
            weakness[10] +=1;
            weakness[11] +=1;
            weakness[13] +=1;
            weakness[8] -=1;            
            weakness[14] -=1;
            break;
        case "INSECTE":
            weakness[1] +=1;
            weakness[6] +=1;
            weakness[12] +=1;
            weakness[8] -=1;
            weakness[3] -=1;            
            weakness[5] -=1;
            break;
        case "ROCHE":
            weakness[7] +=1;
            weakness[8] +=1;
            weakness[2] +=1;
            weakness[3] +=1;
            weakness[5] +=1;
            weakness[1] -=1;
            weakness[0] -=1;
            weakness[14] -=1;            
            weakness[12] -=1;
            break;
        case "SPECTRE":
            weakness[10] +=1;
            weakness[11] +=1;
            weakness[8] -=2;
            weakness[0] -=2;
            weakness[14] -=1;            
            weakness[13] -=1;
            break;
        case "DRAGON":
            weakness[16] +=1;
            weakness[15] +=1;
            weakness[1] -=2;
            weakness[2] -=2;
            weakness[3] -=1;            
            weakness[4] -=1;
            break;
        case "TENEBRES":
            weakness[8] +=1;
            weakness[13] +=1;
            weakness[10] -=1;
            weakness[9] -=2;
            weakness[11] -=1;
            break;
        case "ACIER":
            weakness[8] +=1;
            weakness[1] +=1;
            weakness[5] +=1;
            weakness[14] -=2;
            weakness[7] -=1;
            weakness[16] -=1;
            weakness[15] -=1;
            weakness[13] -=1;
            weakness[0] -=1;
            weakness[3] -=1;
            weakness[9] -=1;
            weakness[6] -=1;
            weakness[10] -=1;
            weakness[11] -=1;
            weakness[12] -=1;
            break;
    }

}

function updateUi(){

    if(weakness[0]>0){
        document.getElementById("typeNormalW").style.display = "flex";
        document.getElementById("typeNormalS").style.display = "none";
        document.getElementById("normaltextW").textContent = "x" + weakness[0];
    }else if(weakness[0]<0){
        document.getElementById("typeNormalW").style.display = "none";
        document.getElementById("typeNormalS").style.display = "flex";
        document.getElementById("normaltextS").textContent = "x" +  (weakness[0]*-1);
    }else{
        document.getElementById("typeNormalW").style.display = "none";
        document.getElementById("typeNormalS").style.display = "none";
    }

    if(weakness[1]>0){
        document.getElementById("typeFeuW").style.display = "flex";
        document.getElementById("typeFeuS").style.display = "none";
        document.getElementById("feutextW").textContent = "x" + weakness[1];
    }else if(weakness[1]<0){
        document.getElementById("typeFeuW").style.display = "none";
        document.getElementById("typeFeuS").style.display = "flex";
        document.getElementById("feutextS").textContent = "x" +  (weakness[1]*-1);
    }else{
        document.getElementById("typeFeuW").style.display = "none";
        document.getElementById("typeFeuS").style.display = "none";
    }

    if(weakness[2]>0){
        document.getElementById("typeEauW").style.display = "flex";
        document.getElementById("typeEauS").style.display = "none";
        document.getElementById("watertextW").textContent = "x" + weakness[2];
    }else if(weakness[2]<0){
        document.getElementById("typeEauW").style.display = "none";
        document.getElementById("typeEauS").style.display = "flex";
        document.getElementById("watertextS").textContent = "x" +  (weakness[2]*-1);
    }else{
        document.getElementById("typeEauW").style.display = "none";
        document.getElementById("typeEauS").style.display = "none";
    }

    if(weakness[3]>0){
        document.getElementById("typePlanteW").style.display = "flex";
        document.getElementById("typePlanteS").style.display = "none";
        document.getElementById("plantetextW").textContent = "x" + weakness[3];
    }else if(weakness[3]<0){
        document.getElementById("typePlanteW").style.display = "none";
        document.getElementById("typePlanteS").style.display = "flex";
        document.getElementById("plantetextS").textContent = "x" +  (weakness[3]*-1);
    }else{
        document.getElementById("typePlanteW").style.display = "none";
        document.getElementById("typePlanteS").style.display = "none";
    }

    if(weakness[4]>0){
        document.getElementById("typeElecW").style.display = "flex";
        document.getElementById("typeElecS").style.display = "none";
        document.getElementById("electextW").textContent = "x" + weakness[4];
    }else if(weakness[4]<0){
        document.getElementById("typeElecW").style.display = "none";
        document.getElementById("typeElecS").style.display = "flex";
        document.getElementById("electextS").textContent = "x" +  (weakness[4]*-1);
    }else{
        document.getElementById("typeElecW").style.display = "none";
        document.getElementById("typeElecS").style.display = "none";
    }

    if(weakness[5]>0){
        document.getElementById("typeSolW").style.display = "flex";
        document.getElementById("typeSolS").style.display = "none";
        document.getElementById("soltextW").textContent = "x" + weakness[5];
    }else if(weakness[5]<0){
        document.getElementById("typeSolW").style.display = "none";
        document.getElementById("typeSolS").style.display = "flex";
        document.getElementById("soltextS").textContent = "x" +  (weakness[5]*-1);
    }else{
        document.getElementById("typeSolW").style.display = "none";
        document.getElementById("typeSolS").style.display = "none";
    }

    if(weakness[6]>0){
        document.getElementById("typeRocheW").style.display = "flex";
        document.getElementById("typeRocheS").style.display = "none";
        document.getElementById("rochetextW").textContent = "x" + weakness[6];
    }else if(weakness[6]<0){
        document.getElementById("typeRocheW").style.display = "none";
        document.getElementById("typeRocheS").style.display = "flex";
        document.getElementById("rochetextS").textContent = "x" +  (weakness[6]*-1);
    }else{
        document.getElementById("typeRocheW").style.display = "none";
        document.getElementById("typeRocheS").style.display = "none";
    }

    if(weakness[7]>0){
        document.getElementById("typeAcierW").style.display = "flex";
        document.getElementById("typeAcierS").style.display = "none";
        document.getElementById("aciertextW").textContent = "x" + weakness[7];
    }else if(weakness[7]<0){
        document.getElementById("typeAcierW").style.display = "none";
        document.getElementById("typeAcierS").style.display = "flex";
        document.getElementById("aciertextS").textContent = "x" +  (weakness[7]*-1);
    }else{
        document.getElementById("typeAcierW").style.display = "none";
        document.getElementById("typeAcierS").style.display = "none";
    }

    if(weakness[8]>0){
        document.getElementById("typeCombatW").style.display = "flex";
        document.getElementById("typeCombatS").style.display = "none";
        document.getElementById("combattextW").textContent = "x" + weakness[8];
    }else if(weakness[8]<0){
        document.getElementById("typeCombatW").style.display = "none";
        document.getElementById("typeCombatS").style.display = "flex";
        document.getElementById("combattextS").textContent = "x" +  (weakness[8]*-1);
    }else{
        document.getElementById("typeCombatW").style.display = "none";
        document.getElementById("typeCombatS").style.display = "none";
    }

    if(weakness[9]>0){
        document.getElementById("typePsyW").style.display = "flex";
        document.getElementById("typePsyS").style.display = "none";
        document.getElementById("psytextW").textContent = "x" + weakness[9];
    }else if(weakness[9]<0){
        document.getElementById("typePsyW").style.display = "none";
        document.getElementById("typePsyS").style.display = "flex";
        document.getElementById("psytextS").textContent = "x" +  (weakness[9]*-1);
    }else{
        document.getElementById("typePsyW").style.display = "none";
        document.getElementById("typePsyS").style.display = "none";
    }

    if(weakness[10]>0){
        document.getElementById("typeSpectreW").style.display = "flex";
        document.getElementById("typeSpectreS").style.display = "none";
        document.getElementById("spectretextW").textContent = "x" + weakness[10];
    }else if(weakness[10]<0){
        document.getElementById("typeSpectreW").style.display = "none";
        document.getElementById("typeSpectreS").style.display = "flex";
        document.getElementById("spectretextS").textContent = "x" +  (weakness[10]*-1);
    }else{
        document.getElementById("typeSpectreW").style.display = "none";
        document.getElementById("typeSpectreS").style.display = "none";
    }


    if(weakness[11]>0){
        document.getElementById("typeTenebresW").style.display = "flex";
        document.getElementById("typeTenebresS").style.display = "none";
        document.getElementById("tenebrestextW").textContent = "x" + weakness[11];
    }else if(weakness[11]<0){
        document.getElementById("typeTenebresW").style.display = "none";
        document.getElementById("typeTenebresS").style.display = "flex";
        document.getElementById("tenebrestextS").textContent = "x" +  (weakness[11]*-1);
    }else{
        document.getElementById("typeTenebresW").style.display = "none";
        document.getElementById("typeTenebresS").style.display = "none";
    }

    if(weakness[12]>0){
        document.getElementById("typeVolW").style.display = "flex";
        document.getElementById("typeVolS").style.display = "none";
        document.getElementById("voltextW").textContent = "x" + weakness[12];
    }else if(weakness[12]<0){
        document.getElementById("typeVolW").style.display = "none";
        document.getElementById("typeVolS").style.display = "flex";
        document.getElementById("voltextS").textContent = "x" +  (weakness[12]*-1);
    }else{
        document.getElementById("typeVolW").style.display = "none";
        document.getElementById("typeVolS").style.display = "none";
    }

    if(weakness[13]>0){
        document.getElementById("typeInsecteW").style.display = "flex";
        document.getElementById("typeInsecteS").style.display = "none";
        document.getElementById("insectetextW").textContent = "x" + weakness[13];
    }else if(weakness[13]<0){
        document.getElementById("typeInsecteW").style.display = "none";
        document.getElementById("typeInsecteS").style.display = "flex";
        document.getElementById("insectetextS").textContent = "x" +  (weakness[13]*-1);
    }else{
        document.getElementById("typeInsecteW").style.display = "none";
        document.getElementById("typeInsecteS").style.display = "none";
    }

    if(weakness[14]>0){
        document.getElementById("typePoisonW").style.display = "flex";
        document.getElementById("typePoisonS").style.display = "none";
        document.getElementById("poisontextW").textContent = "x" + weakness[14];
    }else if(weakness[14]<0){
        document.getElementById("typePoisonW").style.display = "none";
        document.getElementById("typePoisonS").style.display = "flex";
        document.getElementById("poisontextS").textContent = "x" +  (weakness[14]*-1);
    }else{
        document.getElementById("typePoisonW").style.display = "none";
        document.getElementById("typePoisonS").style.display = "none";
    }

    if(weakness[15]>0){
        document.getElementById("typeIceW").style.display = "flex";
        document.getElementById("typeIceS").style.display = "none";
        document.getElementById("icetextW").textContent = "x" + weakness[15];
    }else if(weakness[15]<0){
        document.getElementById("typeIceW").style.display = "none";
        document.getElementById("typeIceS").style.display = "flex";
        document.getElementById("icetextS").textContent = "x" +  (weakness[15]*-1);
    }else{
        document.getElementById("typeIceW").style.display = "none";
        document.getElementById("typeIceS").style.display = "none";
    }

    if(weakness[16]>0){
        document.getElementById("typeDragonW").style.display = "flex";
        document.getElementById("typeDragonS").style.display = "none";
        document.getElementById("dragontextW").textContent = "x" + weakness[16];
    }else if(weakness[16]<0){
        document.getElementById("typeDragonW").style.display = "none";
        document.getElementById("typeDragonS").style.display = "flex";
        document.getElementById("dragontextS").textContent = "x" +  (weakness[16]*-1);
    }else{
        document.getElementById("typeDragonW").style.display = "none";
        document.getElementById("typeDragonS").style.display = "none";
    }




}


function modifyDatas(){
    for(let i=0;i<16;i++){
        weakness[i] = 0;
    }
    const types = [];
    team.forEach(element => {
        types.push(pokemonList[element].type1);
        types.push(pokemonList[element].type2);
    });

    types.forEach(element => {
        modifyWeaknessData(element);
    });
    updateUi();

}

function handleSelection02(index) {
    const image = document.getElementById("pok0img")
    image.src = "images/pokemons/"+ index + ".png";
    const image2 = document.getElementById("pok0type1");
    const image3 = document.getElementById("pok0type2")
    const title = document.getElementById("pok0Stats");
    image2.src = getSrc(pokemonList[index].type1);
    image3.src = getSrc(pokemonList[index].type2);
    title.textContent = "Statistiques : " + pokemonList[index].totalStats;
    team[0] = index;
    modifyDatas();
}



function handleSelection0(event) {
    const index = event.target.selectedIndex;
    const image = document.getElementById("pok0img")
    image.src = "images/pokemons/"+ index + ".png";
    const image2 = document.getElementById("pok0type1");
    const image3 = document.getElementById("pok0type2")
    const title = document.getElementById("pok0Stats");
    image2.src = getSrc(pokemonList[index].type1);
    image3.src = getSrc(pokemonList[index].type2);
    title.textContent = "Statistiques : " + pokemonList[index].totalStats;
    team[0] = index;
    modifyDatas();
}

function handleSelection12(index) {
    const image = document.getElementById("pok1img")
    image.src = "images/pokemons/"+ index + ".png";
    const image2 = document.getElementById("pok1type1");
    const image3 = document.getElementById("pok1type2")
    const title = document.getElementById("pok1Stats");
    image2.src = getSrc(pokemonList[index].type1);
    image3.src = getSrc(pokemonList[index].type2);
    title.textContent = "Statistiques : " + pokemonList[index].totalStats;
    team[1] = index;
    modifyDatas();

}

function handleSelection1(event) {
    const index = event.target.selectedIndex;
    const image = document.getElementById("pok1img")
    image.src = "images/pokemons/"+ index + ".png";
    const image2 = document.getElementById("pok1type1");
    const image3 = document.getElementById("pok1type2")
    const title = document.getElementById("pok1Stats");
    image2.src = getSrc(pokemonList[index].type1);
    image3.src = getSrc(pokemonList[index].type2);
    title.textContent = "Statistiques : " + pokemonList[index].totalStats;
    team[1] = index;
    modifyDatas();

}

function handleSelection22(index) {
    const image = document.getElementById("pok2img")
    image.src = "images/pokemons/"+ index + ".png";
    const image2 = document.getElementById("pok2type1");
    const image3 = document.getElementById("pok2type2")
    const title = document.getElementById("pok2Stats");
    image2.src = getSrc(pokemonList[index].type1);
    image3.src = getSrc(pokemonList[index].type2);
    title.textContent = "Statistiques : " + pokemonList[index].totalStats;
    team[2] = index;
    modifyDatas();

}

function handleSelection2(event) {
    const index = event.target.selectedIndex;
    const image = document.getElementById("pok2img")
    image.src = "images/pokemons/"+ index + ".png";
    const image2 = document.getElementById("pok2type1");
    const image3 = document.getElementById("pok2type2")
    const title = document.getElementById("pok2Stats");
    image2.src = getSrc(pokemonList[index].type1);
    image3.src = getSrc(pokemonList[index].type2);
    title.textContent = "Statistiques : " + pokemonList[index].totalStats;
    team[2] = index;
    modifyDatas();

}

function handleSelection32(index) {
    const image = document.getElementById("pok3img")
    image.src = "images/pokemons/"+ index + ".png";
    const image2 = document.getElementById("pok3type1");
    const image3 = document.getElementById("pok3type2")
    const title = document.getElementById("pok3Stats");
    image2.src = getSrc(pokemonList[index].type1);
    image3.src = getSrc(pokemonList[index].type2);
    title.textContent = "Statistiques : " + pokemonList[index].totalStats;
    team[3] = index;
    modifyDatas();

}


function handleSelection3(event) {
    const index = event.target.selectedIndex;
    const image = document.getElementById("pok3img")
    image.src = "images/pokemons/"+ index + ".png";
    const image2 = document.getElementById("pok3type1");
    const image3 = document.getElementById("pok3type2")
    const title = document.getElementById("pok3Stats");
    image2.src = getSrc(pokemonList[index].type1);
    image3.src = getSrc(pokemonList[index].type2);
    title.textContent = "Statistiques : " + pokemonList[index].totalStats;
    team[3] = index;
    modifyDatas();

}


function handleSelection4(event) {
    const index = event.target.selectedIndex;
    const image = document.getElementById("pok4img")
    image.src = "images/pokemons/"+ index + ".png";
    const image2 = document.getElementById("pok4type1");
    const image3 = document.getElementById("pok4type2")
    const title = document.getElementById("pok4Stats");
    image2.src = getSrc(pokemonList[index].type1);
    image3.src = getSrc(pokemonList[index].type2);
    title.textContent = "Statistiques : " + pokemonList[index].totalStats;
    team[4] = index;
    modifyDatas();

}

function handleSelection42(index) {
    const image = document.getElementById("pok4img")
    image.src = "images/pokemons/"+ index + ".png";
    const image2 = document.getElementById("pok4type1");
    const image3 = document.getElementById("pok4type2")
    const title = document.getElementById("pok4Stats");
    image2.src = getSrc(pokemonList[index].type1);
    image3.src = getSrc(pokemonList[index].type2);
    title.textContent = "Statistiques : " + pokemonList[index].totalStats;
    team[4] = index;
    modifyDatas();

}

function handleSelection5(event) {
    const index = event.target.selectedIndex;
    const image = document.getElementById("pok5img")
    image.src = "images/pokemons/"+ index + ".png";
    const image2 = document.getElementById("pok5type1");
    const image3 = document.getElementById("pok5type2")
    const title = document.getElementById("pok5Stats");
    image2.src = getSrc(pokemonList[index].type1);
    image3.src = getSrc(pokemonList[index].type2);
    title.textContent = "Statistiques : " + pokemonList[index].totalStats;
    team[5] = index;
    modifyDatas();

}


function handleSelection52(index) {
    const image = document.getElementById("pok5img")
    image.src = "images/pokemons/"+ index + ".png";
    const image2 = document.getElementById("pok5type1");
    const image3 = document.getElementById("pok5type2")
    const title = document.getElementById("pok5Stats");
    image2.src = getSrc(pokemonList[index].type1);
    image3.src = getSrc(pokemonList[index].type2);
    title.textContent = "Statistiques : " + pokemonList[index].totalStats;
    team[5] = index;
    modifyDatas();

}


function handlePartyChange(event) {
    const index = event.target.selectedIndex;
    if(index >0){
        dropdown0.selectedIndex = partyList[index-1].p0;
        dropdown1.selectedIndex = partyList[index-1].p1;
        dropdown2.selectedIndex = partyList[index-1].p2;
        dropdown3.selectedIndex = partyList[index-1].p3;
        dropdown4.selectedIndex = partyList[index-1].p4;
        dropdown5.selectedIndex = partyList[index-1].p5;
        handleSelection02(partyList[index-1].p0);
        handleSelection12(partyList[index-1].p1);
        handleSelection22(partyList[index-1].p2);
        handleSelection32(partyList[index-1].p3);
        handleSelection42(partyList[index-1].p4);
        handleSelection52(partyList[index-1].p5);
    }else{
        dropdown0.selectedIndex = 0;
        dropdown1.selectedIndex = 0;
        dropdown2.selectedIndex = 0;
        dropdown3.selectedIndex = 0;
        dropdown4.selectedIndex = 0;
        dropdown5.selectedIndex = 0;
        handleSelection02(0);
        handleSelection12(0);
        handleSelection22(0);
        handleSelection32(0);
        handleSelection42(0);
        handleSelection52(0);
    }
}

function populateDD2(options, dropdown) {
    const option0 = document.createElement("option");
    option0.value = "none"; 
    option0.textContent = "none";
    dropdown.appendChild(option0);
    options.forEach(party => {
        const option = document.createElement("option");
        option.value = party.name; 
        option.textContent = party.name;
        dropdown.appendChild(option);
    });
}


function populateDD(options, dropdown) {
    options.forEach(pokemon => {
        const option = document.createElement("option");
        option.value = pokemon.name; 
        option.textContent = pokemon.name;
        dropdown.appendChild(option);
    });
}

fetch("/api/parties")
    .then((response)=> response.json())
    .then((data)=>{
        if(data.parties.length > 0){
            data.parties.forEach(element => {
                const party = new Party(element.id, element.name, element.pok0, element.pok1, element.pok2, element.pok3, element.pok4, element.pok5);
                partyList.push(party);
            });
            populateDD2(partyList, dropdownParty);
            dropdownParty.addEventListener("change", handlePartyChange);
        }
    })
    .catch((err)=> console.error("erreur",err));

    fetch("/api/pokemons")
    .then((response)=> response.json())
    .then((data)=>{
        if(data.pokemon.length > 0){
            data.pokemon.forEach(element => {
                const newPokemon = new Pokemon(element.id -1,element.name, element.type1, element.type2, element.totalStats, element.isFinal);
                pokemonList.push(newPokemon);
            });
            populateDD(pokemonList, dropdown0);
            populateDD(pokemonList, dropdown1);
            populateDD(pokemonList, dropdown2);
            populateDD(pokemonList, dropdown3);
            populateDD(pokemonList, dropdown4);
            populateDD(pokemonList, dropdown5);

            dropdown0.addEventListener("change", handleSelection0);
            dropdown1.addEventListener("change", handleSelection1);
            dropdown2.addEventListener("change", handleSelection2);
            dropdown3.addEventListener("change", handleSelection3);
            dropdown4.addEventListener("change", handleSelection4);
            dropdown5.addEventListener("change", handleSelection5);





        }
    })
    .catch((err)=> console.error("erreur",err));

    