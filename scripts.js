

//https://www.educative.io/answers/how-to-use-web-audio-api-using-javascript?utm_term=&utm_campaign=%5BNew-Oct+23%5D+Performance+Max+-+Coding+Interview+Patterns&utm_source=adwords&utm_medium=ppc&hsa_acc=5451446008&hsa_cam=20684486602&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gclid=EAIaIQobChMIuceIz_SEggMVSo7CCB01rgpbEAAYByAAEgJwA_D_BwE
const l = console.log
    let audioFromAudioFile = (function() {
        var audioContext
        var volNode
        var pannerNode
        var mediaSource

        function init() { l("Init")
        try {
          audioContext = new AudioContext()        
          mediaSource = audioContext.createMediaElementSource(audio)
          volNode = audioContext.createGain()
          volNode.gain.value = 1
          pannerNode = new StereoPannerNode(audioContext, { pan:0 })
          
          mediaSource.connect(volNode).connect(pannerNode).connect(audioContext.destination)
          } catch(e) {
            error.innerHTML = "The Web Audio API is not supported in this device."
            error.classList.remove("close")
            }
         }

        function play() { audio.play() }

        function pause() { audio.pause() }

        function stop() { audio.stop() }

        function changeVolume() {
            volNode.gain.value = this.value
            l("Vol Range:",this.value)
        }

        function changePan() {
            pannerNode.gain.value = this.value
            l("Pan Range:",this.value)
        }

        return {
            init,
            play,
            pause,
            stop,
            changePan,
            changeVolume
        }
    })



//Web Audio API

//method 1. using audio tag
//const audContxt = new AudioContext();
//To get the audio element
//const audio = document.querySelector("audio");

//Lex course
//method 2. using buttons
/* const play =document.querySelector("#playBtn");
const pause =document.querySelector("#pauseBtn");
const audContxt2 = new AudioContext();
const audio2 = new Audio("./audio/forest-lullaby-110624.mp3");
audio2.crossOrigin = "anonymous";//prevent CORS access restriction; https://stackoverflow.com/questions/31308679/mediaelementaudiosource-outputs-zeros-due-to-cors-access-restrictions-local-mp3
const source = audContxt2.createMediaElementSource(audio2);
source.connect(audContxt2.destination);
play.addEventListener("click",()=>{
    if(audContxt2.state==="suspended"){
   audContxt2.resume();  
   }
   audio.play();
  });
   pause.addEventListener("click", ()=>{
   audio2.pause();
  }); */
//3 states for audio: closed, suspended, running

//ByteGrad; https://www.youtube.com/watch?v=oXOcqHQmEEM
/* const play = document.querySelector('#playBtn');
let context;
window.onload = function(){
    context = new AudioContext();
}
play.addEventListener('click',()=>{
    context.resume().then(()=> {

    });
}); */