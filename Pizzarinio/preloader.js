document.body.onload = function() {
	
	setTimeout(function(){
		var preloader = document.getElementById('pg-pre');
		if( !preloader.classList.contains('done'))
		{
			preloader.classList.add('done');
		}
	}, 300);
	
}