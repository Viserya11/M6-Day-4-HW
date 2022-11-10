

const options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmUyZmQ0YmUzZDAwMTU4NDYwNDkiLCJpYXQiOjE2NjgwODczNDMsImV4cCI6MTY2OTI5Njk0M30.f0hqMCGmxQuJWfmA5JwepuldqFJL51QtNp2M1aDnsSE",
    },
};

const display = async () => {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", options);
    const parsedBody = await response.json();
    return parsedBody
    };

  
 

    window.addEventListener("load", async () => {

        const results = await display()

        showData(results)
         

    })

    const showData = (data) => {

        let container = document.querySelector(".container")
        container.innerHTML = ""

        for (let product of data) {
            container.innerHTML += `
            
            <div class="card">
      <img src=${product.imageUrl} class="card-img-top" style="max-height: 25rem" alt="...">
      <div class="card-body" style="height: 10rem">
        <p class="card-text"> ${product.brand} </p>
        <h3 class="card-text"> ${product.name} </h3>
        <p class="card-text"> ${product.description} </p>
        <p class="card-text"> ${product.price} </p>
        <button href="#"  class="btn btn-primary">Buy</button>
        <a href="backend.html"  class="btn btn-primary">Details</a>
      </div>
    </div>;



            `
        }


    }