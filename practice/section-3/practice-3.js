'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionC = countSameElements(collectionA);
  var result = collectionC;
  for (var i=0;i<collectionC.length;i++){
    for (var j=0 ;j<objectB.value.length;j++){
      if (collectionC[i].key == objectB.value[j]){
        if (collectionC[i].count/3 > 0){
          var a = collectionC[i].count - parseInt(collectionC[i].count/3);
          result[i] = ({key:collectionC[i].key,count:a});
        }
      }
    }
  }
  return result;
}

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
