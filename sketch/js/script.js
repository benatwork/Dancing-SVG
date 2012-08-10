
var phase = 0
var a = document.getElementById("mrtough");

svg = a.contentDocument
function movePoints(){
	$('svg path',$(svg)).each(function(i,item){
	
		var pathList = item.pathSegList;
	
		for (var j in pathList){
			var point = pathList.getItem(j);
			
			point.x += randomNumber(-2,2);
			point.y += randomNumber(-2,2);

		}
		// }


	});
}
	// })
movePoints();

a.addEventListener("load",function(){
	 console.log(svgDoc);

    var svgDoc = a.contentDocument; //get the inner DOM of alpha.svg
    var delta = svgDoc.getElementById("delta"); //get the inner element by id
});




function loop(){
	movePoints();
}


setInterval(loop,100);

function randomNumber(min, max){
    return Math.random() * (max- min) + min; 
}