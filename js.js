



var duration = document.getElementById('duration');
var download = document.getElementById('download');
var currentTime = document.getElementById('currentTime');
var thumb = document.getElementById('thumb');
var track = document.getElementById('progress');
var volThumb = document.getElementById('volume');
var plist = document.getElementById('slist');
var midtitle = document.getElementById('trackTitle');

var currentIndex= 0;
var song = new Audio();
var interval;

//sname.onclick = function(){
	//if(song.paused){
		//song.play();
		
	//}else{
		//song.pause();
		
	//}
//}

function changeVol(){}

//Audio EventListners

var initiate = {
	
	playlist : function(songslist){
		for(var i=0;i<songslist.length;++i){
			plist.innerHTML += '<div id='+i+' onclick="changeSong(this)" class="songarray"><span>'+data.songs[i]+'</span></div>';
		}	
	},
	
	song : function(index){
		song.pause();
		song.src = data.url + data.songs[currentIndex] + '.mp3';
		
		download.setAttribute('href',song.src);
		
		song.load();
		//song.play();
		
		midtitle.innerHTML = '<span> '+data.songs[currentIndex]+' </span>';
		
	}
};

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

function update(){
	
	currentTime.innerHTML = '<span>'+getTimeString(Math.floor(song.currentTime))+'</span>';
	
	track.value = Math.floor((song.currentTime/song.duration)*100);
}

window.onload = function(){
	
	data.songs.sort();
	initiate.playlist(data.songs);
	initiate.song(currentIndex);
	//song.pause();
	interval = setInterval(update,1000);
}

function changeSong(obj){
	currentIndex = parseInt(obj.id,10);
	initiate.song(currentIndex);
	if(song.paused){
		song.play();
	}else{
		song.pause();
	}
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

//track.onchange = prog();

function prog(obj){
	//alert(obj.value);
	song.currentTime = Math.floor((obj.value/100)*song.duration);
}	

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


