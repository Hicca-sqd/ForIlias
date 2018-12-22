var trs = document.getElementsByClassName("circle--tr");
	
 findTrs = function(e){
 	var theTr = e.target.className;
 	var tr_names = [];
 	for(var a = 0; a < trs.length; a++){
 			tr_names.push(trs[a].className);
 	}
		for (var i = 0; i < trs.length; i++) {
		  for (var j = 0; j < i; j++) {
					if ( theTr == "con__tr con__tr_first circle--tr" ) {
						e.target.style.transform = "rotate(90deg) translateY(2em)";
					}
					if ( theTr == "con__tr con__tr_second circle--tr" ) {
						e.target.style.transform = "rotate(270deg) translateY(2em)";
					}
					if ( theTr == "con__tr con__tr_fouth circle--tr" ) {
						e.target.style.transform = "rotate(90deg) translate(2em, -1em)";
					}
					if ( theTr == "con__tr con__tr_fifth circle--tr" ) {
						e.target.style.transform = "rotate(90deg) translate(-2em, -1em)";
					}
					if ( theTr == "con__tr con__tr_six circle--tr" ) {
						e.target.style.transform = "rotate(270deg) translate(2em, -1em)";
					}
				}
			}
}

returnTr = function(e){
 	var theTr = e.target.className;
 	for (var i = 0; i < 6; i++) {
 		if (theTr == "con__tr con__tr_first circle--tr") {
		e.target.style.transform = "rotate(90deg) translateY(0em)";
	}
	if (theTr == "con__tr con__tr_second circle--tr") {
		e.target.style.transform = "rotate(270deg) translateY(0em)";
	}
	if (theTr == "con__tr con__tr_thrid circle--tr") {
		e.target.style.transform = "rotate(270deg) translate(0)";
	}
	if (theTr == "con__tr con__tr_fouth circle--tr") {
		e.target.style.transform = "rotate(90deg) translateY(0em)";
	}
	if (theTr == "con__tr con__tr_fifth circle--tr") {
		e.target.style.transform = "rotate(90deg) translateY(0em)";
	}
	if (theTr == "con__tr con__tr_six circle--tr") {
		e.target.style.transform = "rotate(270deg) translateY(0em)";
	}
 	}
	
}

