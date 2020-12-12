import MediaPlayer from '@jomilto/platzi-mediaplayer';
import AutoPlay from '@jomilto/platzi-mediaplayer/lib/plugins/AutoPlay';
import AutoPause from '@jomilto/platzi-mediaplayer/lib/plugins/AutoPause';
import Ads from '@jomilto/platzi-mediaplayer/lib/plugins/Ads';

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video, plugins: [
    new AutoPlay(),
    new AutoPause(),
    new Ads()
] });

const btnPlay: HTMLElement = document.querySelector(".btnPlay");
btnPlay.onclick = () => player.togglePlay();

const btnMute: HTMLElement = document.querySelector(".btnMute");
btnMute.onclick = () => player.toggleMute();

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js').catch(error => {
        console.log(error.message);
    });
}