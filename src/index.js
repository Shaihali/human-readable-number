module.exports = function toReadable (number) {
  const a20 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
								'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']
	const a20_100 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
	const hundred = "hundred"
  let x = number.toPrecision().split('')
  
	if(number <= 20) {
    return a20[number]
  }
  if(number > 20 && number < 100) {
    return (+x[1] == 0) ? a20_100[x[0]-2] : a20_100[x[0]-2] + ' ' + a20[x[1]]
  }
  if(number >= 100){
    let y = a20[x[0]] + ' ' + hundred
    let g = (+(x[1]+x[2]) < 10) ? +x[2] : +(x[1]+x[2]) 

    if(+(x[1]+x[2]) < 21) {
      return (+(x[1]+x[2]) == 00)? y : y + ' ' + a20[g]
    } return (+x[2] == 0)? y + ' ' + a20_100[x[1]-2] : y + ' ' + a20_100[x[1]-2] + ' ' + a20[x[2]]
  }

}
