function Slide(e) {
	var EleClass = e.target.className;
	if(EleClass == 'parallelogram parallelogram1'){
		 $('.carousel').carousel('set', 0);
	}
	if(EleClass == 'parallelogram parallelogram2'){
		 $('.carousel').carousel('set', 2);
	}
	if(EleClass == 'parallelogram parallelogram3'){
		 $('.carousel').carousel('set', 1);
	}
	if(EleClass == 'parallelogram parallelogram4'){
		 $('.carousel').carousel('set', 3);
	}
	if(EleClass == 'parallelogram parallelogram5'){
		 $('.carousel').carousel('set', 4);
	}
	if(EleClass == 'parallelogram parallelogram6'){
		 $('.carousel').carousel('set', 4);
	}
}