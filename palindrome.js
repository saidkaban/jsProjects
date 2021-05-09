function palindrome(str) {
    let myRegex = /[a-z0-9]/gi
    let reverse_str = str.match(myRegex).reverse().join("").toLowerCase()
    if (reverse_str == 
          str.match(myRegex).join("").toLowerCase()) {
      return true
    }
    return false
  }  