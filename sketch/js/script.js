


var amplitude = 2;
var frequency = 100;
var maxPhases = 1;




var phase = 1;






$(document).ready(function() {
	var a = document.getElementById("mrtough");
	var b = document.getElementById('mrtoughog');
	var svg = a.contentDocument;
	var originalSvg = b.contentDocument;
	function checkReady(){
		if (svg == null || originalSvg ==  null) {
			setTimeout(checkReady(), 300);
		} else {
			
		    setTimeout(movePoints,500);
		}
	}

	function movePoints(){
			var paths = svg.getElementsByTagName('path');
			var ogPaths = originalSvg.getElementsByTagName('path');
			for (var i = 0; i < paths.length; i++) {
		
				var path  = paths[i];

				var segments = path.pathSegList;
				
				for (var j = 0; j < segments.numberOfItems; j++) {
					
					var point = segments.getItem(j);
					if(phase < maxPhases){
						point.x += randomNumber(-amplitude,amplitude);
						point.y += randomNumber(-amplitude,amplitude);
					} else {
						point.x = ogPaths[i].pathSegList.getItem(j).x;
						point.y = ogPaths[i].pathSegList.getItem(j).y;
					}
				}
			}

			phase = phase >= maxPhases ? 0 : phase + 1;
	
			setTimeout(movePoints,frequency);

		
	}


	
	//_____ controls ________


	$('#frequencySlider').slider({
		value: 400,
		min: 10,
		max: 500,
		slide: function(event, ui) { 
			frequency = 500 - ui.value;
			$('#frequency_label').text('Frequency' +" : "+ui.value);
		},
		create: function(event, ui) { 
			$('#frequency_label').text('Frequency' +" : "+400);
		}
		
	});
	$('#ampSlider').slider({
		value:2,
		min:1,
		max:10,
		slide: function(event, ui) { 
			amplitude = ui.value;
			$('#amplitude_label').text('Amplitude' +" : "+ui.value);
		},
		create: function(event, ui) { 
			$('#amplitude_label').text('Amplitude' +" : "+2);
		}
	});
	$('#iterationSlider').slider({
		value:1,
		min:1,
		max:20,
		slide: function(event, ui) { 
			$('#iterations_label').text('Iterations' +" : "+ui.value);
			maxPhases = ui.value;
		},
		create: function(event, ui) { 
			$('#iterations_label').text('Iterations' +" : "+1);
		}
	});





	checkReady()

});




function randomNumber(min, max){
    return Math.random() * (max- min) + min; 
}

