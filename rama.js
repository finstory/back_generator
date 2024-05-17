setInterval(() => {

    fetch("https://www.esencia.app/assets/auth-bg-I54QhQtU.png")
        .then(response => response.text())
        .then(data => {
            // Do something with the data
            console.log(JSON.stringify(data).split("0")[0]);
        })
        .catch(error => {
            // Handle any errors
            console.error(error);
        });

});


// fetch("https://www.sirhome.com.ar/libro.php?", {
//   "headers": {
//     "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"Windows\"",
//     "upgrade-insecure-requests": "1"
//   },
//   "referrer": "https://www.sirhome.com.ar/libro.php?",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "omit"
// });