let Url = "https://api.potterdb.com/";

// fetch(Url)
// .then((res) => {
//     console.log(res);
//     return res.json();
// }).then((data) => {
//     console.log("data 1 = ",data);
//     return fetch(Url);
// }).then((res) => {
//     console.log(res);
//     return res.json();
// }).then((data2) => {
//     console.log("data 2 = ",data2.fact);
// })
// .catch((err) => {
//     console.log(err);
// });

async function getfetch() {
    try{
        let res = await fetch(Url);
        let data = await res.json();
        console.log(data.message);

        let res2 = await fetch(Url);
        let data2 = await res2.json();
        console.log(data2.message);
    }
    catch(e) {
        console.log(e);
    }

    console.log("bye");
}

getfetch();