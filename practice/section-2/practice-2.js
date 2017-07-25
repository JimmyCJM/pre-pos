'use strict';

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
  result.push({key:a.split("-")[0],count:parseInt(a.split("-")[1]));
  return result;
}


/*	第一次代码
function countSameElements(collection) {
  var result = new Array();
  var count = 1;
  var n = 0;
  var a=collection.pop();
  function Object(key,count){
    this.key=key;
    this.count=count;
  }
  for(var i=0;i<collection.length;i++){
    if (collection[i]==collection[i+1]){
      count++;
    }
    else{
      result[n]=new Object(collection[i],count);
      count=1;
      n++;
    }
  }
  result[n]=new Object(a.split("-")[0],parseInt(a.split("-")[1])});
  return result;
}
*/
