const divBtnHidden = document.getElementsByClassName('next-action-area')
const iframe = document.getElementById('iframe-video')
var player = new Vimeo.Player(iframe);
var abbleButtons = false

for (var i = 0; i < divBtnHidden.length; i++) {
    divBtnHidden[i].hidden = false
}


player.on('timeupdate', function (data) {
    if (data.seconds >= 1320 && !abbleButtons) {
        abbleButtons = true;

        for (var i = 0; i < divBtnHidden.length; i++) {
            divBtnHidden[i].hidden = false
        }
    }
});