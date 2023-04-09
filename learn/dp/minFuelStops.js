
const minRefuelStopsBrute = (T, sFuel, stations) => {
  const t = Array(stations.length + 1).fill(-1)

  const minRefuelStopsRecur = (index, used, curFuel, stations) => {
    // if the first entry can start with curFuel
    if (used === 0) return curFuel

    // can't go ahead
    if (index < used) return Number.MIN_VALUE

    // if not fueled
    const result1 = minRefuelStopsRecur(index - 1, used, curFuel, stations)

    // if fueled
    const result2 = minRefuelStopsRecur(index - 1, used - 1, curFuel, stations)

    // check if i can reach next used
    return Math.max(
      result1, result2 < stations[index - 1][0] ? Number.MIN_VALUE : result2 + stations[index - 1][1]
    )
  }

  for (let i = 0; i <= stations.length; i++) {
    t[i] = minRefuelStopsRecur(stations.length, i, sFuel, stations)
  }

  let result = -1
  for (let i = 0; i <= stations.length; i++) {
    if (t[i] >= T) {
      result = i
      break
    }
  }
  return result
}

const minRefuelStops = (T, sFuel, stations) => {
  const n = stations.length
  const t = Array(n + 1).fill(0).map(() => Array(n + 1).fill(-1))

  for (let i = 0; i <= n; i++) {
    t[i][0] = sFuel
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (t[i - 1][j - 1] >= stations[i - 1][0]) {
        t[i][j] = Math.max(t[i - 1][j], t[i - 1][j - 1] + stations[i - 1][1])
      } else {
        t[i][j] = t[i - 1][j]
      }
    }
  }

  for (let i = 0; i <= n; i++) {
    if (t[n][i] >= T) {
      return i
    }
  }

  return -1
}

// export {minRefuelStops};
// driver code

function main () {
  const target = [3, 120, 15, 570, 1360]
  const startFuel = [3, 10, 3, 140, 380]
  const stations = [[],
    [[10, 60], [20, 25], [30, 30], [60, 40]],
    [[2, 5], [3, 1], [6, 3], [12, 6]],
    [[140, 200], [160, 130], [310, 200], [330, 250]],
    [[310, 160], [380, 620], [700, 89], [850, 190], [990, 360]]
  ]
  // You can uncomment the lines below and check how this recursive solution causes a time-out

  // target.push(1000000)
  // startFuel.push(414538)
  // stations.push([[17701, 258307], [21688, 120216], [25838, 188823], [26198, 37704], [28407, 39718], [31145, 278840], [45988, 57039], [47692, 29551], [50066, 74074], [68763, 290134], [75654, 319564], [108910, 149624], [142069, 96704], [150496, 373854], [155633, 381976], [161109, 233140], [171483, 222053], [198121, 90013], [198558, 50745], [210319, 361266], [261641, 320131], [268104, 196397], [277486, 181545], [279048, 87773], [284251, 109405], [284873, 194818], [299812, 44825], [312794, 212098], [330372, 150854], [334304, 16462], [341826, 355076], [354100, 121729], [357262, 99472], [373407, 246231], [380812, 391068], [381660, 58027], [389426, 16384], [395377, 184947], [400549, 61831], [401765, 19042], [402418, 342650], [408596, 88962], [409064, 58385], [412807, 242383], [419216, 114847], [427637, 193263], [432402, 162662], [447033, 73018], [448090, 220812], [485574, 177913], [493251, 273729], [530877, 156659], [542882, 246095], [545263, 265274], [554612, 139749], [555368, 283911], [574367, 13098], [577897, 59461], [622815, 266350], [626360, 73504], [632502, 399587], [634018, 30667], [668646, 349506], [669368, 33506], [670388, 147943], [673524, 12301], [675268, 205610], [681675, 187082], [685442, 260254], [707944, 400378], [712364, 355269], [712744, 343848], [726134, 145162], [751188, 18215], [752569, 82417], [752688, 138680], [778386, 288719], [799185, 339462], [801575, 187526], [802673, 370065], [808872, 17555], [811498, 117063], [818968, 17978], [828129, 176546], [841905, 363935], [850989, 161126], [857536, 211958], [860254, 321030], [865831, 102775], [893729,69995], [903068, 19423], [905444, 290995], [914374, 171088], [919957, 97793], [929407, 307177], [933008, 235070], [935948, 115036], [944895, 74525], [970733, 55200], [995520, 316123]])

  for (let i = 0; i < stations.length; i++) {
    const a = '[' + stations[i].join(',') + ']'
    console.log(i + 1 + '.\tStations: ' + a)
    console.log('\tTarget fuel: ' + target[i])
    console.log('\tStart fuel: ' + startFuel[i])
    console.log('\n\tMinimum number of Refueling stops: ' + minRefuelStops(target[i], startFuel[i], stations[i]))
    console.log('-'.repeat(100))
  }
}

main()
