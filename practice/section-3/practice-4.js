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
  var result = new Array();
  var count = 1;
  var a=collection.pop();
  for(var i=0;i<collection.length;i++){
    if (collection[i]==collection[i+1]){
      count++;
    }
    else{
      result.push({key:collection[i],count:count});
      count=1;
    }
  }
  result.push({key:a.split("-")[0],count:parseInt(a.split("-")[1])});
  return result;
}
