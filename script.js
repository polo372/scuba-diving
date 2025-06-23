let calculatedLiftForce;
let objectVolume;
let objectDensity;
let waterDensity;
let calculatedAutonomy;
let depth;
let diveTime;
let explorationTime;
let airConsumptionRate;
let tankVolume;
let tankPressure;s
let decompressionStops;

function getRandomResource(category) {
    const resources = {
        "MSP": [
            "categories/MSP/example1.pdf",
            "categories/MSP/example2.pdf",
            "categories/MSP/example3.pdf"
        ],
        "Technique": [
            src="https://www.youtube.com/embed/p8TbR2UdMug?si=GiAYMjbsL4pUdJOb",
            "categories/Technique/example2.mp4",
            "categories/Technique/example3.mp4"
        ],
        "Savoir": [
            "categories/Savoir/example1.pdf",
            "categories/Savoir/example2.pdf",
            "categories/Savoir/example3.pdf"
        ]
    };

    const categoryResources = resources[category];
    const randomResource = categoryResources[Math.floor(Math.random() * categoryResources.length)];
    return randomResource;
}

function getResource(category) {
    const resource = getRandomResource(category);
    const display = document.getElementById('resource-display');
    display.innerHTML = `<p>${category} - Ressource : <a href="${resource}" target="_blank">${resource}</a></p>`;
}

function generateDiveParameters() {
    depth = Math.floor(Math.random() * 40) + 10; // Profondeur entre 10 et 50 mètres
    diveTime = Math.floor(Math.random() * 40) + 10; // Temps de plongée entre 10 et 50 minutes
    explorationTime = Math.floor(Math.random() * 30) + 10; // Temps d'exploration entre 10 et 40 minutes
    airConsumptionRate = (Math.random() * 20 + 10).toFixed(2); // Taux de consommation d'air entre 10 et 30 L/min
    tankVolume = Math.floor(Math.random() * 10 + 10); // Volume de la bouteille entre 10 et 20 L
    tankPressure = Math.floor(Math.random() * 100 + 200); // Pression de la bouteille entre 200 et 300 bars
    decompressionStops = Math.floor(Math.random() * 5); // Nombre de paliers de décompression entre 0 et 4
    
    // Mettre à jour les éléments HTML correspondants
    document.getElementById('dive-depth').textContent = `Profondeur: ${depth} m`;
    document.getElementById('dive-time').textContent = `Temps de plongée: ${diveTime} min`;
    document.getElementById('exploration-time').textContent = `Temps d'exploration: ${explorationTime} min`;
    document.getElementById('air-consumption-rate').textContent = `Consommation d'air: ${airConsumptionRate} L/min`;
    document.getElementById('tank-volume').textContent = `Volume de la bouteille: ${tankVolume} L`;
    document.getElementById('tank-pressure').textContent = `Pression de la bouteille: ${tankPressure} bars`;

    // Afficher le bloc des paramètres de plongée
    document.getElementById('dive-parameters').style.display = 'block';
}


