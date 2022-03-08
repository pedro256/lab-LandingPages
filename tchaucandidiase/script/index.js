const divHidden = document.getElementById('complement')
const iframe = document.getElementById('iframe-video-main')
var player = new Vimeo.Player(iframe);
var abbleButtons = false


divHidden.hidden = true

player.on('timeupdate', function (data) {
    if (data.seconds >= 1650 && !abbleButtons) {
        abbleButtons = true;

        divHidden.hidden = false
    }
});