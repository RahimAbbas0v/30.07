let cardsContainer = document.querySelector(".cardsContainer");
async function getData() {
  try {
    let response = await fetch("http://localhost:3000/data");
    if (!response.ok) {
      throw new Error("Network response was not okay");
    }
    let data = await response.json();
    data = data.services;
    console.log(data);
    return data;
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.error("Reference error occured", error);
    } else if (error instanceof TypeError) {
      console.error("Type error occured", error);
    } else {
      console.error("An error occured", error);
    }
  }
}
async function showData() {
  try {
    let data = await getData();
    data.map((element) => {
      let card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML += `
                   <div>
              <img src=${element.cover_img.publicUrl} id="cardimg" alt="" />
              <div class="imgText">
                <h2>${element.title_en}</h2>
                <div class="downRow">
                  <img src="./images/image 1019.png" alt="" />
                  <p>Starts from 10$/h</p>
                </div>
              </div>
            </div>
            <div class="card-body">
            ${element.subServices
              .map((elem) => {
                return `<p>${elem.title_en}</p>`;
              })
              .join("")}
            </div>`;
      let cardBody = card.querySelector(".card-body");
      card.addEventListener("click", () => {
        if ((cardBody.style.display = "none")) {
          cardBody.classList.toggle("block");
        }
      });
      // document.addEventListener("click", () => {
      //   cardBody.style.display = "none";
      // });

      cardsContainer.append(card);
    });
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.error("Reference error occured", error);
    } else if (error instanceof TypeError) {
      console.error("Type error occured", error);
    } else {
      console.error("An error occured", error);
    }
  }
}
showData();
