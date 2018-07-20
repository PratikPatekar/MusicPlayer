data = {
	"songs":[
		"24K Magic",
		"All Out Of Love",
		"Animals",
		"Ashes",
		"Attention",
		"Bailando",
		"Believer",
		"Best Song Ever",
		"Can't Stop The Feeling",
		"Chandelier",
		"Cheap Thrills",
		"Closer",
		"Dont Let Me Down",
		"Eenie Meenie",
		"Faded",
		"Friction",
		"Havana",
		"Hello",
		"History",
		"Home",
		"Hymn For The Weekend",
		"I Don’t Wanna Live Forever",
		"I Want to Write You a Song",
		"If I Could Fly",
		"I'm Still Standing",
		"Immortals",
		"In My Remains",
		"Infinity",
		"It Ain't Me",
		"Let Her Go",
		"Let Me Love You",
		"Life Is a Highway",
		"Love Me Like You Do",
		"Love The Way You Lie",
		"Love Yourself",
		"Never Enough",
		"Never Give Up",
		"No More Sad Songs",
		"On & On",
		"One Thing",
		"Paradise",
		"Perfect",
		"Radioactive",
		"Rap God",
		"See You Again (ft. Charlie Puth)",
		"Shape of You",
		"Something Just Like This",
		"Sorry",
		"Steal My Girl",
		"Story of My Life",
		"That’s What I Like",
		"The Greatest",
		"The Lazy Song",
		"Thinking Out Loud",
		"Thunder",
		"Tik Tok",
		"Titanium",
		"Treat You Better",
		"True Colors",
		"Unstoppable",
		"Uptown Funk",
		"Walking in the Wind",
		"We Don't Talk Anymore",
		"What a Feeling",
		"Wolves"
		
	],

};

window.onload = function(){
	
	initiate.playlist(data.songs);
	
}	

var initiate = {
	playlist : function(songslist){
		for(var i=0;i<songslist.length;++i){
			playlist.innerHTML += '<div id='+i+'><span>'+data.songs[i]+'</span></div>';
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


