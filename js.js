data = {
	"songs":[
		"Treat You Better",
		"Stitches",
		"Back to You",
		"Girls Like You",
		"You & I",
		"Find my way back to you",
		"What makes you beautiful",
		"You can be king again",
		"Hall fo fame",
		"Darasal",
		"Subhanallah",
		"Where my love goes",
		"Wonder Woman Theme Song",
		"I wanna grow old with you",
		"Firework",
		"Good Times",
		"Kaze - Naruto"
		
	],

};



var prev = document.getElementById('prev');
var play = document.getElementById('play');
var next = document.getElementById('next');
var trackTitle = document.getElementById('trackTitle');
var header = document.getElementById('header');
var duration = document.getElementById('duration');
var download = document.getElementById('download');
var currentTime = document.getElementById('currentTime');
var progress = document.getElementById('progress');
var playlist = document.getElementById('playlist');

var thumb = document.getElementById('thumb');
var track = document.getElementById('track');
var volThumb = document.getElementById('volume');
var volProgress = document.getElementById('volumeprogress');


track.onclick = function(e){
	var trackRect = track.getBoundingClientRect();
	var max = trackRect.right;
	var min = trackRect.left;
	var current = (1+(e.x-max)/(max-min))*100;
	song.currentTime = (current/100)*song.duration;
	
	trackvalue = (song.currentTime/song.duration)*100;
	progress.style.width = trackvalue + '%';
	thumb.style.left = trackvalue +'%';
}

play.onclick = function(){
	if(song.paused){
		song.play();
		play.innerHTML = '<span class="fas fa-pause></span>';
	}else{
		song.pause();
		play.innerHTML = '<span class="fas fa-play></span>';
	}
}

//Audio EventListners
song.onloadstart = function(){
	//alert('loadstart');
}
song.ondurationchange = function(){
	duration.innerHTML = '<span>'+getTimeString(Math.floor(song.duration))+'</span>';
}
song.oncanplay = function(){
	//alert('canplay');

}
song.oncanplaythrough = function(){
	//alert('canplaythrough');
}
//song.onprogress = function(){}

song.onended = function(){
		currentIndex= Math.floor(random(0,data.songs.length-1));
		initiate.song(currentIndex);
}

window.onload = function(){
	
	data.songs.sort();
	
	initiate.playlist(data.songs);
	initiate.song(currentIndex);
	song.pause();
	
	interval = setInterval(update,1000);
}

function update(){
	
	currentTime.innerHTML = '<span>'+getTimeString(Math.floor(song.currentTime))+'</span>';
	
	trackvalue = (song.currentTime/song.duration)*100;
	progress.style.width = trackvalue + '%';
	thumb.style.left = trackvalue +'%';
	
}

var initiate = {
	song : function(index){
		//song.pause();
		song.src = js.url + js.songs[index] + '.mp3';
		
		download.setAttribute('href',song.src);
		
		song.load();
		song.play();
		
		trackTitle.innerHTML = '<span> '+data.songs[currentIndex]+' </span>';
		
	}
};

function changeSong(div){
	currentIndex = parseInt(div.id,10);
	initiate.song(currentIndex);
	play.innerHTML = '<span class="fas fa-pause"></span>';
}

function changeVol(evt,obj){
	
	var trackRect = obj.getBoundingClientRect();
	var max = trackRect.right;
	var min = trackRect.left;
		
	song.volume = (1+(evt.x-max)/(max-min));
	
	volProgress.style.width = song.volume*100 + '%';
	volThumb.style.left = song.volume*100 +'%';
}

function getTimeString(sec){
	var m=Math.floor(sec/60);
	var s=sec%60;
	m = (m<10)?'0'+m:m;
	s = (s<10)?'0'+s:s;
	return m+':'+s;
}

function random(a,b){
	return a + (b-a)*Math.random();
}



var index= 0;
var song = new Audio();
var interval;

window.onload = function(){
	
	initiate.playlist(data.songs);
	
}	

var initiate = {
	playlist : function(songslist){
		for(var i=0;i<songslist.length;++i){
			playlist.innerHTML += '<div id='+i+' class="songarray"><span>'+data.songs[i]+'</span></div>';
		}	
	},
};	

/*      *****Volume bar Value******

var volbar = document.getElementById("volume");
var output = document.getElementById("out");
output.innerHTML = volbar.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
volbar.onchange = function() {
	alert();
	//output.innerHTML = this.value;
}

*/


