let Url = "https://api.potterdb.com/";


// async function getfetch() {
//     try{
//         let res = await axios.get(Url);
//         console.log(res.data);

//     }
//     catch(e) {
//         console.log(e);
//     }

// }

getfetch();

async function getfetch() {
    try{
        const config ={ Headers:{Accept : "application/json"} };
        let res = await axios.get(Url);
        console.log(res);

    }
    catch(e) {
        console.log(e);
    }

}
