//Get our elements 

const player=document.querySelector('.player');
const video=player.querySelector('.viewer');
const progress=player.querySelector('.progress');
const progressBar=player.querySelector('.progress__filled');
const toggle=player.querySelector('.toggle');
const skipButtons=player.querySelectorAll('[data-skip]');
const ranges=player.querySelectorAll('.player__slider');
const fullScreen=player.querySelector('.btn-secondary');

//Build out functions
function togglePlay(){
    const method=video.paused ? 'play' : 'pause'
 video[method]();

}
function updateButton(){
    const icon=this.paused ? '►' : '❚ ❚';
    toggle.textContent=icon;
}

function skip(){
video.currentTime +=parseFloat(this.dataset.skip)
}

function HandleRangeChange(){
    video[this.name] = this.value;
    console.log(this.value);
}

function handleProgress(){
    const percentage=(video.currentTime/video.duration)*100;
    progressBar.style.flexBasis= percentage + "%";

}

function scrub(e){
const scrubTime=(e.offsetX/progress.offsetWidth)*video.duration;
    video.currentTime=scrubTime;    
}

function handleFullScreen(){
    video.requestFullscreen();
}
//Hook up the event listners 

video.addEventListener('click',togglePlay)
video.addEventListener('play',updateButton)
video.addEventListener('pause',updateButton)
video.addEventListener('timeupdate',handleProgress)


toggle.addEventListener('click',togglePlay);
skipButtons.forEach(button=>button.addEventListener('click',skip));
ranges.forEach(range=>range.addEventListener('change',HandleRangeChange))
progress.addEventListener('click',scrub)
let mousedown=false;
progress.addEventListener('mousemove',(e)=> mousedown && scrub(e))
progress.addEventListener('mousedown',()=>mousedown=true);
progress.addEventListener('mouseup',()=>mousedown=false);
fullScreen.addEventListener('click',handleFullScreen)



