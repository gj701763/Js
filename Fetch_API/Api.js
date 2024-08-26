let URL ="google.com";

const getfacts = async () => {
    let responce = await fatch(URL);
    console.log(responce.status);
};