function RLEencode(str: string): string {
  if (!str.length) return "";
  let resut = [];

  let lastPos = 0;
  let lastSymbol = str[0];

  function pack(symbol: string, count: number) {
    return `${symbol}${count > 1 ? count : ""}`;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== lastSymbol) {
      resut.push(pack(lastSymbol, i - lastPos));
      lastPos = i;
      lastSymbol = str[i];
    }
  }

  resut.push(pack(str[lastPos], str.length - lastPos));

  return resut.join("");
}

function RLEdecode(str: string): string {
  if (!str.length) return "";
  let resut = "";

  function unPack(symbol: string, count: number) {
    return `${symbol.repeat(count)}`;
  }

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(+str[i + 1])) {
      resut += unPack(str[i], +str[i + 1]);
      i++;
    } else {
      resut += str[i];
    }
  }

  return resut;
}

export { RLEencode, RLEdecode };
