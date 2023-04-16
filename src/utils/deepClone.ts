function typeOf(obj: any): any {
  const toString: any = Object.prototype.toString
  const map: any = {
    "[object Boolean]": "boolean",
    "[object Number]": "number",
    "[object String]": "string",
    "[object Function]": "function",
    "[object Array]": "array",
    "[object Date]": "date",
    "[object RegExp]": "regExp",
    "[object Undefined]": "undefined",
    "[object Null]": "null",
    "[object Object]": "object",
  };
  return map[toString.call(obj)]
}

function deepClone(data: any): any {
  const type = typeOf(data)
  let result: any
  if (type === "array") {
    result = [];
    for (let i = 0; i < data.length; i++) {
      result.push(deepClone(data[i]))
    }
  } else if (type === "object") {
    result = {}
    for (const i in data) {
      result[i] = deepClone(data[i])
    }
  } else {
    return data
  }
  return result
}

export default deepClone