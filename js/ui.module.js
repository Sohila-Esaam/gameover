export class Ui {
  displayData(response) {
    let box = ``;
    for (let i = 0; i < response.length; i++) {
      box += `
       <div class="col">
   <div data-id="${
     response[i].id
   }"  class="card h-100 bg-transparent" role="button" ">
      <div  class="card-body">
         <figure class="position-relative">
            <img class="card-img-top object-fit-cover h-100" src="${
              response[i].thumbnail
            }" />

         </figure>
         <figcaption>
            <div class="d-flex justify-content-between align-items-center">
               <h3 class="h6 small">${response[i].title}</h3>
               <span class="badge text-bg-primary p-2">Free</span>
            </div>

            <p class="card-text small text-center opacity-50">
               ${response[i].short_description.split(" ", 12)}
            </p>

         </figcaption>
      </div>

      <footer class="card-footer small d-flex justify-content-between align-items-center">

         <span class="badge badge-color">${response[i].genre}</span>
         <span class="badge badge-color">${response[i].platform}</span>

      </footer>
   </div>
</div>
      `;
    }
    document.getElementById("gameData").innerHTML = box;
  }

  displayDetailsGame(response) {
    let box = `
          <div class="col-md-4">
       <img src="${response.thumbnail}" class="w-100" alt="image details" />
    </div>
    <div class="col-md-8">
       <h3>Title: ${response.title}</h3>
       <p>Category: <span class="badge text-bg-info"> ${response.genre}</span> </p>
       <p>Platform: <span class="badge text-bg-info"> ${response.platform}</span> </p>
       <p>Status: <span class="badge text-bg-info"> ${response.status}</span> </p>
       <p class="small">${response.description}</p>
       <a class="btn btn-outline-danger" target="_blank" href="${response.game_url}">Show Game</a>
    </div>`;
    document.getElementById("detailsContent").innerHTML = box;
  }
}

document.getElementById("mode").addEventListener("click", function (e) {
  if (mode.classList.contains("fa-sun")) {
    document.querySelector("html").setAttribute("data-theme", "light");
    mode.classList.replace("fa-sun", "fa-moon");
  } else {
    document.querySelector("html").setAttribute("data-theme", "dark");
    mode.classList.replace("fa-moon", "fa-sun");
  }
});
