package binarysearch

func JudgeSquareSum(c int) bool {
	l := 1
	r := c

	var root int
	var mid int
	for l <= r {
		mid = l + (r-l)/2
		prod := mid * mid
		if prod == c {
			return true
		}
		if prod > c {
			r = mid - 1
		} else {
			root = mid
			l = mid + 1
		}
	}

	l = 0
	r = root

	for l <= r {
		prod := l*l + r*r
		if prod == c {
			return true
		} else if prod > c {
			r--
		} else {
			l++
		}
	}
	return false
}
