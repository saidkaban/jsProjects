function rot13(str) {
    let decodedStr = ""
    for (let i = 0; i < str.length; i++) {
      let decodedChar = str.charCodeAt(i)
      if (decodedChar < 65 | decodedChar > 90) {
        decodedStr += String.fromCharCode(decodedChar);
          continue;
      }
      decodedChar -= 13;
      if (decodedChar < 65) {
        decodedChar += 26;
      }
      decodedStr += String.fromCharCode(decodedChar);
    }
    return decodedStr;
}  
