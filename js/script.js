let health = 100;
let happiness = 100;
let experience = 0;
let level = 1;
let hunger = 50;
let pokemon = "";
let pokemonImage = "";

setInterval(() => {
    if (hunger > 0) {
        hunger = Math.max(0, hunger - 1);
        updateStats();
    }
}, 5000);

function choosePokemon(selectedPokemon) {
    pokemon = selectedPokemon;
    pokemonImage = getPokemonImage(selectedPokemon);
    document.getElementById("pokemonImg").src = pokemonImage;
    document.getElementById("selectionScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
    updateStats();
}

function getPokemonImage(pokemon) {
    const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    const pokemonMap = {
        "bulbasaur": "1.png",
        "charmander": "4.png",
        "squirtle": "7.png"
    };
    return baseUrl + (pokemonMap[pokemon] || "1.png");
}

function updateStats() {
    document.getElementById('health').innerText = `Health: ${health}%`;
    document.getElementById('happiness').innerText = `Happiness: ${happiness}%`;
    document.getElementById('experience').innerText = `Experience: ${experience}`;
    document.getElementById('level').innerText = `Level: ${level}`;
    document.getElementById('hungerFill').style.width = hunger + "%";
    document.getElementById('hungerText').innerText = `Hunger Meter: ${hunger}%`;
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    feedPokemon();
}

function drag(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

function feedPokemon() {
    if (hunger < 100) {
        hunger = Math.min(100, hunger + 20);
        happiness = Math.min(100, happiness + 5);
        updateStats();
    }
}

function trainPokemon() {
    experience += 10;
    happiness = Math.max(0, happiness - 10);
    level = Math.floor(experience / 50) + 1;
    updateStats();
}
