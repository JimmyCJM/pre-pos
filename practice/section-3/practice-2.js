'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var result = collectionA;
  for (var i=0;i<collectionA.length;i++){
    for (var j=0;j<objectB.value.length;j++){
      if (collectionA[i].key == objectB.value[j]){
        if (collectionA[i].count/3 > 0){
          var a = collectionA[i].count - parseInt(collectionA[i].count/3);
        }
        result[i] = ({key:collectionA[i].key,count:a})；
      }
    }
  }
  return result;
}
