console.log("Petición a una API");

const url = "https://jsonplaceholder.typicode.com/users";
const $ul = document.createElement("ul"),
  $fragment = document.createDocumentFragment();

$ul.classList.add("lista");

function getData(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        const $li = document.createElement("li");
        $li.textContent = element.name;
        $fragment.appendChild($li);
        // const listElement = `
        //     <li>${element.name}</li>
        // `;
        // $ul.insertAdjacentHTML("beforeend", listElement);
      });
      $ul.appendChild($fragment);
      console.log($ul);
      document.body.appendChild($ul);
    })
    .catch((error) => {
      console.log(error);
    });
}

getData(url);

const getDataAsync = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
  } catch (error) {
    console.log(error);
  }
};

getDataAsync(url);