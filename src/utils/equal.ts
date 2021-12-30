function countProps(obj: object) {
  let count = 0

  if (obj) {
    // eslint-disable-next-line no-restricted-syntax
    for (const k in obj) {
      // eslint-disable-next-line no-prototype-builtins
      if (obj.hasOwnProperty(k)) {
        count += 1
      }
    }
  }

  return count
}

function isEqual(v1: any, v2: any): boolean {
  if (typeof v1 !== typeof v2) {
    return false
  }

  if (v1 instanceof Object && v2 instanceof Object) {
    if (countProps(v1) !== countProps(v2)) {
      return false
    }
    let r = true
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const k in v1) {
      r = isEqual(v1[k], v2[k])
      if (!r) {
        return false
      }
    }
    return true
  }
  return v1 === v2
}

export default isEqual
