const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating/";
const resultsContainer = document.querySelector(".results");

async function gameProperties() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    const facts = json.results;
    resultsContainer.innerHTML = "";
    for (let i = 0; i < facts.length; i++) {
      if (i === 8) {
        break;
      }

      resultsContainer.innerHTML += `<div class= "result">
        <p>Name: ${facts[i].name}</p>
        <p>Rating: ${facts[i].rating}</p>
        <p>Number of tags: ${facts[i].tags.length}</p>
        </div>`;
    }
  } catch (err) {
    console.log("An error occured");
    resultsContainer.innerHTML = displayError(
      "An error occured when calling the API"
    );
  }
}

gameProperties();
