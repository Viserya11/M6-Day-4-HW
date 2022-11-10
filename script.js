const options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmUyZmQ0YmUzZDAwMTU4NDYwNDkiLCJpYXQiOjE2NjgwODczNDMsImV4cCI6MTY2OTI5Njk0M30.f0hqMCGmxQuJWfmA5JwepuldqFJL51QtNp2M1aDnsSE",
    },
};

let display = async () => {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", options);
    const parsedBody = await response.json();
    console.log(parsedBody)
}

display()