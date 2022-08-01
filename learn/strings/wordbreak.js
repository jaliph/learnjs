
let canSegmentString = function(inputString, dictionary, memoise) {
  for (let i = 0; i < inputString.length; i++) {
    let first = inputString.substr(0, i)
    
    if (dictionary.indexOf(first) >= 0) {
      let second = inputString.substr(i)
      if (second === ''){
        return true
      }
      if (memoise.indexOf(second) >= 0) {
        return true
      } 
      if (dictionary.indexOf(second)>= 0) {
        memoise.push(second)
        return true
      }
      if (canSegmentString(second, dictionary, memoise)) {
        memoise.push(second)
        return true
      }
    }
  }
  return false;
};




let s = "hellonow";
let dictionary = ["hello", "hell", "on", "now"]



console.log(canSegmentString(s, dictionary, []))

