// Importar bip39
const bip39 = require('bip39'); // Asegúrate de requerir la biblioteca

// Función para generar el seed según la entropía
function generateSeed(entropyBits) {
    // Calcular el número de bytes necesarios
    const entropyBytesLength = entropyBits / 8;
    const entropyBytes = new Uint8Array(entropyBytesLength);
    
    // Generar un buffer de entropía aleatoria
    crypto.getRandomValues(entropyBytes); // Solo para navegadores

    // Convertir la entropía a una frase mnemotécnica
    const mnemonic = bip39.entropyToMnemonic(entropyBytes);
    document.getElementById('seedOutput').value = mnemonic;
}

// Evento para generar seeds de 12 palabras (128 bits de entropía)
document.getElementById('generate12Words').addEventListener('click', function() {
    generateSeed(128); // 128 bits = 12 palabras
});

// Evento para generar seeds de 15 palabras (160 bits de entropía)
document.getElementById('generate15Words').addEventListener('click', function() {
    generateSeed(160); // 160 bits = 15 palabras
});

// Evento para generar seeds de 18 palabras (192 bits de entropía)
document.getElementById('generate18Words').addEventListener('click', function() {
    generateSeed(192); // 192 bits = 18 palabras
});

// Evento para generar seeds de 21 palabras (224 bits de entropía)
document.getElementById('generate21Words').addEventListener('click', function() {
    generateSeed(224); // 224 bits = 21 palabras
});

// Evento para generar seeds de 24 palabras (256 bits de entropía)
document.getElementById('generate24Words').addEventListener('click', function() {
    generateSeed(256); // 256 bits = 24 palabras
});

// Exponer BIP39 globalmente
window.bip39 = bip39;