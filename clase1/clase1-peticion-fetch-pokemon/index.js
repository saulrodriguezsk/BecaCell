console.log("ejercicio de fetch pokemones ");
const url = "https://pokeapi.co/api/v2/pokemon?limit=30&offset=15",
  $container = document.querySelector(".grid-container"),
  imgBgCard =
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4f7705ec-8c49-4eed-a56e-c21f3985254c/dah43cy-a8e121cb-934a-40f6-97c7-fa2d77130dd5.png/v1/fill/w_1024,h_1420/pokemon_card_backside_in_high_resolution_by_atomicmonkeytcg_dah43cy-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQyMCIsInBhdGgiOiJcL2ZcLzRmNzcwNWVjLThjNDktNGVlZC1hNTZlLWMyMWYzOTg1MjU0Y1wvZGFoNDNjeS1hOGUxMjFjYi05MzRhLTQwZjYtOTdjNy1mYTJkNzcxMzBkZDUucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.9GzaYS7sd8RPY5FlHca09J9ZQZ9D9zI69Ru-BsbkLDA";
let template = "";

const getPokemons = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const pokemons = await data.results;

    console.log(pokemons);

    for (let i = 0; i < pokemons.length; i++) {
      try {
        const res = await fetch(pokemons[i].url);
        const data = await res.json();

        template += `
        <section class="section">
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              <img src="${imgBgCard}" alt="contraparte"/>
            </div>
            <div class="card-back">
            <img src = "${data.sprites.other.dream_world.front_default}">
              <p>${data.name}</p>
            </div>
          </div>
        </div>
      </section>
        `;
      } catch (error) {
        console.log("error en la peticion ");
      }
    }
  } catch (error) {
    console.log(error);
  }

  $container.insertAdjacentHTML("afterbegin", template);
  $container.addEventListener("click", async (event) => {
    const card = event.target.closest(".card");
    card.classList.toggle("flipped");
  });
};

getPokemons(url);

