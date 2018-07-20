var volbar = document.getElementById("volume");
		var output = document.getElementById("out");
		output.innerHTML = volbar.value; // Display the default slider value

		// Update the current slider value (each time you drag the slider handle)
		volbar.oninput = function() {
    		output.innerHTML = this.value;
		}



