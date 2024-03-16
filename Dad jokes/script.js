const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateJoke);
generateJoke();

// using .then
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// }

//using async await
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  jokeEl.innerHTML = data.joke;
}

function fetchRecipe() {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Burger")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => console.log(data));
}
fetchRecipe();
