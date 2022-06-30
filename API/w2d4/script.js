async function getMoney() {
  let div = document.querySelector("#coinList");

  // create the var to store the data
  var responseFromApi = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");

  // convert to json
  var coinData = await responseFromApi.json();
  console.log(coinData);

  // for each coin create a paragraph tag
  for (let i = 0; i < coinData.length; i++) {
    // console.log(coinData[i]);
    let currentCoin = coinData[i];
    let pTag = document.createElement("p");
    // console.log(pTag);
    //extracting specific data
    pTag.innerText = "Coin " + currentCoin.name + "-" + currentCoin.current_price;
    // console.log(pTag.innerText);
    // adding class to apply css
    pTag.classList.add("coin");
    // console.log(pTag);
    div.appendChild(pTag);
  }
}


/*
identify the div to put the info
get the data from the api
print out the results
 */
