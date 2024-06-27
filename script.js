// Referenciando elementos do DOM
const audioPlayer = document.getElementById('audioPlayer');

// Adicionando evento de conclusão da música para reprodução contínua
audioPlayer.addEventListener('ended', function() {
    audioPlayer.currentTime = 0; // Reinicia a música para reprodução contínua
    audioPlayer.play();
});
