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
		"Kaze - Naruto",
		"Treat You Better",
		"Stitches",
		"Back to You",
		"Girls Like You",
		"You & I",
		"Find my way back to you",
		"What makes you beautiful",
		"You can be king again"
		
	],

};

var index= 0;
var song = new Audio();

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


