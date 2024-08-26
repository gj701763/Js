let Url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener('click', async () => {
    let country = document.querySelector("input").value;
    console.log(country);

    let couArr = await getCollege(country);
    show(couArr);
})


function show(couArr) {
    let list = document.querySelector(".list");
    for(col of couArr) {
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
        let b = document.querySelector("#b").addEventListener('click', async () => {
            list.removeChild(li);
            let country = document.querySelector("input").value ="";
        })
        
    }
}


async function getCollege(country) {
    try{
        let res = await axios.get(Url+country);
        return res.data;
    }catch(e) {
        console.log(e);
        return [];
    }
}