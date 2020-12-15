var arr = [1,2,3,4,5,6,7,8,9,10];

var newArr = new Array(); // Just For Storing And Removing in Loop
var avg = new Array(); // Rata Rata di Store Nilainya Semua

for(let i = 0; i < arr.length; i++){
  newArr.push(arr[i]);
  for(let j = i + 1; j < arr.length; j++){
    newArr.push(arr[j]);
    for(let k = j + 1; k < arr.length; k++){
      newArr.push(arr[k]);
      avg.push(newArr.reduce((sum1, sum2) => {
        return sum1 + sum2;
      }));
      newArr.pop();
    }
    newArr.pop();
  }
  newArr.pop();
}

var newAvg = avg.map(value => value / 3 );

var Total = newAvg.reduce((sum1, sum2) => sum1 + sum2 ) // Cari Total Dari Nilai Rata

var TotalAvg = Total / newAvg.length; // Cari Total Rata Rata Dari Nilai 3 Ukuran Average

var XR = newAvg.map((AVG) => { // Nilai Rata Rata - di kurang Total 
  let total = AVG - TotalAvg;
  let sqrt = total * total; // Di Akarkan
  return sqrt;
}).reduce((sum1, sum2) => sum1 + sum2)

var S2 = XR / (newAvg.length - 1);

var SE = Math.sqrt((S2 / newAvg.length))
console.log(SE); // 0.134