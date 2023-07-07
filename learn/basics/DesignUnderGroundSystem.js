// https://leetcode.com/problems/design-underground-system/

var UndergroundSystem = function() {
  this.transitState = new Map()
  this.stationDuration = new Map()
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
  this.transitState.set(id, [t, stationName])
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
  let [timeStarted, startStation] = this.transitState.get(id)
  this.transitState.delete(id)
  let [ lastStationAverage, count ] = this.stationDuration.get(`${startStation}-${stationName}`) || [0, 0]

  // console.log('arre', lastStationAverage, count)
  let timeTaken = t - timeStarted
  // console.log(timeTaken, '-<<')

  // console.log((lastStationAverage + timeTaken) / (count + 1))
  // console.log('start station', startStation, timeStarted, timeTaken)

  this.stationDuration.set(`${startStation}-${stationName}`, [ (lastStationAverage + timeTaken), count + 1 ] )
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
  let [totalTime, count] = this.stationDuration.get(`${startStation}-${endStation}`)
  return totalTime / count
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */

let undergroundSystem = new UndergroundSystem()
console.log(undergroundSystem)
undergroundSystem.checkIn(45, "Leyton", 3);
undergroundSystem.checkIn(32, "Paradise", 8);
undergroundSystem.checkIn(27, "Leyton", 10);
undergroundSystem.checkOut(45, "Waterloo", 15);  // Customer 45 "Leyton" -> "Waterloo" in 15-3 = 12
undergroundSystem.checkOut(27, "Waterloo", 20);  // Customer 27 "Leyton" -> "Waterloo" in 20-10 = 10
undergroundSystem.checkOut(32, "Cambridge", 22); // Customer 32 "Paradise" -> "Cambridge" in 22-8 = 14
console.log(undergroundSystem.getAverageTime("Paradise", "Cambridge")); // return 14.00000. One trip "Paradise" -> "Cambridge", (14) / 1 = 14
console.log(undergroundSystem.getAverageTime("Leyton", "Waterloo"));    // return 11.00000. Two trips "Leyton" -> "Waterloo", (10 + 12) / 2 = 11
undergroundSystem.checkIn(10, "Leyton", 24);
undergroundSystem.getAverageTime("Leyton", "Waterloo");    // return 11.00000
undergroundSystem.checkOut(10, "Waterloo", 38);  // Customer 10 "Leyton" -> "Waterloo" in 38-24 = 14

undergroundSystem.getAverageTime("Leyton", "Waterloo");    // return 12.00000. Three trips "Leyton" -> "Waterloo", (10 + 12 + 14) / 3 = 12
