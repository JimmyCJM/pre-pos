'use strict';

function collectSameElements(collectionA, objectB) {
	var a = new Array;
	for(var i=0;i<collectionA.length;i++){
		for (var j=0;j<objectB.value.length;j++){
			if(collectionA[i].key==objectB.value[j]){
				a.push(objectB.value[j]);
			}
		}
	}
  return a;
}
