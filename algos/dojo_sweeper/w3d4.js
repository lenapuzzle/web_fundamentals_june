function decodeStr(str = "") {
  let decoded = "";
  let i = 0;

  while (i < str.length) {
      // Retrieve letter at current index then increment the idx (post increment)
      // to get to the num that comes after the char.
      let char = str[i++];
      // the num is a string so multiple digits need to be concatenated before
      // converted to a number. '1' + '1' => '11'. 1 + 1 => 2
      let numStr = "";
      /* 
      parseInt returns NaN if it fails to parse. NaN is a weird special value
      that requires using isNaN to check b/c NaN === NaN => false.
      */
      let isNumber = isNaN(parseInt(str[i])) === false;

      /* 
      Iterate over all the nums that come after this string until the next
      non-number.
      */
      while (i < str.length && isNumber) {
          // concatenate the string-num digit then increment.
          numStr += str[i++];
          isNumber = isNaN(parseInt(str[i])) === false;
      }

      // .repeat will automatically convert numStr to a number if it can.
      decoded += char.repeat(numStr);
  }
  return decoded;
}

function decodeStr2(str = "") {
  let decoded = "";
  let numStr = "";
  let letter = str[0];

  for (let i = 1; i < str.length; i++) {
      const num = parseInt(str[i]);

      // letter found, means we have passed digits.
      if (isNaN(num)) {
          // .repeat parses numStr to int for us.
          decoded += letter.repeat(numStr);
          // reset for next letter and it's following digits
          letter = str[i];
          numStr = "";
      } else {
          numStr += str[i];
      }
  }
  // Since we end with a number concat above doesn't happen for the last one.
  return decoded + letter.repeat(numStr);
}

function encodeStr(str) {
  let encoded = "";

  for (let i = 0; i < str.length; i++) {
      let currChar = str[i];
      let dupeCount = 1;

      while (str[i + 1] === currChar) {
          dupeCount++;
          i++;
      }

      if (dupeCount == 1) {
          encoded += currChar
      }
      if (dupeCount == 2) {
          encoded += currChar + currChar
      }
      else {
          encoded += currChar + dupeCount;
      }
  }
  return encoded;
}