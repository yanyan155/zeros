module.exports = function getZerosCount(number) {
  // your implementation
  var count = 0;
  for (var i =0; i <= number; i = i +5) {
  	for (var j = i; j%5 == 0 && j != 0; j /= 5) {
  		count++;
  	}
  }
  return count;
}