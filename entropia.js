// Importar bip39
const bip39 = require('bip39');

// Función para generar el seed según la entropía
function generateSeed(entropyBits) {
    // Calcular el número de bytes necesarios
    const entropyBytesLength = entropyBits / 8;
    const entropyBytes = new Uint8Array(entropyBytesLength);
    
    // Generar un buffer de entropía aleatoria
    window.crypto.getRandomValues(entropyBytes);

    // Convertir los bytes de entropía a una cadena hexadecimal
    const entropyHex = Buffer.from(entropyBytes).toString('hex');

    // Convertir la entropía a una frase mnemotécnica
    const mnemonic = bip39.entropyToMnemonic(entropyHex);
    document.getElementById('seedOutput').value = mnemonic;
}

// Eventos para generar semillas
document.getElementById('generate12Words').addEventListener('click', function() {
    generateSeed(128); // 128 bits = 12 palabras
});
document.getElementById('generate15Words').addEventListener('click', function() {
    generateSeed(160); // 160 bits = 15 palabras
});
document.getElementById('generate18Words').addEventListener('click', function() {
    generateSeed(192); // 192 bits = 18 palabras
});
document.getElementById('generate21Words').addEventListener('click', function() {
    generateSeed(224); // 224 bits = 21 palabras
});
document.getElementById('generate24Words').addEventListener('click', function() {
    generateSeed(256); // 256 bits = 24 palabras
});

// Exponer BIP39 globalmente
window.bip39 = bip39;