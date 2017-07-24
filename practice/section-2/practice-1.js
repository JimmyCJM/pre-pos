'use strict';

  function countSameElements(collection) {
	var result=new Array();
	var n=0;
	var count=1;
	for(var i=0;i<collection.length;i++){
		if(collection[i]==collection[i+1])
			count++;
		else{
			result[n]=new Object();
			result[n].key=collection[i];
			result[n].count=count;
			count=1;
			n++;
		}
	}
	return result;
}
