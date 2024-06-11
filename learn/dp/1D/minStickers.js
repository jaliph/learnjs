// https://leetcode.com/problems/stickers-to-spell-word/

/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
const minStickers = function (stickers, target) {
  const stickerMaps = []
  for (const s of stickers) {
    const m = new Map()
    for (const c of s) {
      m.set(c, (m.get(c) || 0) + 1)
    }
    stickerMaps.push(m)
  }

  const dp = new Map() // key is word subsequence, value is the min stickers for the word sequence
  const findMinStickRecur = (t, sticker) => {
    if (dp.has(t)) {
      return dp.get(t)
    }

    let res // how many stickers used so far
    if (sticker.size > 0) {
      res = 1
    } else {
      res = 0
    }

    let remainingTarget = ''
    for (const c of t) {
      if (sticker.has(c) && sticker.get(c) > 0) {
        sticker.set(c, sticker.get(c) - 1)
      } else {
        remainingTarget += c
      }
    }

    if (remainingTarget.length > 0) {
      let used = Infinity

      for (const stick of stickerMaps) {
        if (!stick.has(remainingTarget[0])) {
          continue
        }
        used = Math.min(used, findMinStickRecur(remainingTarget, new Map(stick)))
      }
      dp.set(remainingTarget, used)
      res += used
    }
    return res
  }

  const res = findMinStickRecur(target, new Map())
  return res !== Infinity ? res : -1
}

const main = () => {
  stickers = ['with', 'example', 'science'], target = 'thehat'
  console.log('Min stickers to create the target is ', minStickers(stickers, target))
}

main()
