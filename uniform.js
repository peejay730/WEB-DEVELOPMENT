function isUniform(array) {
    var first = array[0];
    for(var i = 0; i < array.length; i++){
    	if(array[i] !== first){
    		return false;
    	}
    }
    return true;
}
