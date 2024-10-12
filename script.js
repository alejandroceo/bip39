document.getElementById('generateSeedBtn').addEventListener('click', function() {
    // Generar 128 bits de entropía para obtener 12 palabras
    const entropy = bip39.generateEntropy(128); // 128 bits de entropía
    const mnemonic = bip39.entropyToMnemonic(entropy); // Generar la mnemonic a partir de la entropía

    // Mostrar la seed en el textarea
    document.getElementById('seedOutput').value = mnemonic;
});