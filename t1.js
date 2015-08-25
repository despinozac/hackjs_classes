function outer(){
	var x = 1;
	var inner = function(){
		console.log("Valor:" + x);
	}

	x = 2;
	return inner;
}

outer();
