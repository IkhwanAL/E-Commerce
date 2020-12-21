function eucledian(newArr1, newArr2){
    return Math.sqrt(Math.pow((newArr1[0] - newArr2[0]), 2) + Math.pow((newArr1[1] - newArr2[1]), 2));
}
function calculate(){
    var arr1 = [
      [3,9.5],
      [6.5, 5.25],
      [1.5,3.5]
    ]
  
      var arr2 = [ // g
      [2,10],
      [2,5],
      [8,4],
      [5,8],
      [7,5],
      [6,4],			
      [1,2],
      [4,9]
    ]
        
    var result3Array = arr2.map( item => arr1.map(get => eucledian(item, get)));
    return result3Array;
}

var dd = new Promise();
calculate();