'use strict';

function countSameElements(collection) {
  var result = new Array();
  var summary = 1;
  var n = 0;
  var sameCount = new Array();
  var sameCollection = new Array();
  var newCollection = new Array();
  //预处理数组，将其他表示方式修改
  for (var i=0;i<collection.length;i++) {
    newCollection[i] = collection[i];
    if (collection[i].length != 1) {
      newCollection[i] = collection[i].split("")[0];
      sameCollection.push(newCollection[i]);
      sameCount.push(parseInt(collection[i].replace(/[^0-9]/ig, "")-1));
      n++;
    }
  }
  for(var i=0;i<n;i++){
    if (sameCollection[i] == sameCollection[i+1]) {
      sameCollection.splice(i,1);
      var a = parseInt(sameCount.splice(i,1));
      sameCount[i] += a;
    }
  }

  var k = n;
  for (var i=0;i<newCollection.length;i++){
    if (newCollection[i] == newCollection[i+1]){
      summary++;
    }
    else{
      if(newCollection[i] == sameCollection[n-k]){
        summary += sameCount[n-k];
        k--;
      }
      result.push({name:newCollection[i],summary:summary});
      summary = 1;
    }
  }
  return result;
}
