// https://leetcode.com/problems/number-of-music-playlists/

/**
 * @param {number} n
 * @param {number} goal
 * @param {number} k
 * @return {number}
 */
var numMusicPlaylists = function(n, goal, k) {
  const MOD = 10**9 + 7
  const mulModulo = (a, b) => {
    return (a % MOD * b % MOD) % MOD
  }
  const dp = new Map()
  const countPlaylist = (currGoal, currSongs) => {
    // one playlist
    if (currGoal == 0 && currSongs == n) {
      return 1
    }

    // invalid playlist
    if (currGoal == 0 || currSongs > n) {
      return 0
    }

    let key = `${currGoal}#${currSongs}`
    if (dp.has(key)) {
      return dp.get(key)
    }

    // choose a new song
    let res = mulModulo((n - currSongs), countPlaylist(currGoal - 1, currSongs + 1))

    // choose a old song
    if (currSongs > k) {
      // can only pick old songs apart from last k
      res += mulModulo((currSongs - k), countPlaylist(currGoal - 1, currSongs))
      res = res % MOD
    }
    dp.set(key, res)
    return res
  }

  return countPlaylist(goal, 0) % MOD
};