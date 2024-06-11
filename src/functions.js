

export default function slash(value) {
  if (value > 99999){
    value = value.toExponential(1).replace('+', '')
    return value
  }
  return value
}

