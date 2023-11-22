

const str = "helloworld"

const countFreq = (str) => {
  let freq = new Map()

  for (let ch of str) {
    freq.set(ch, (freq.get(ch) ?? 0) + 1)
  }

  console.log(freq)

}


const countFreq2 = (str) => {
  for (let i = 0; i < 1024; i++) {
    console.log(i, " -> ", String.fromCharCode(i))
  }
  
}

countFreq2(str)