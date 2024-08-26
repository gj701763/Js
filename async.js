function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("first data");
            resolve(200);
        }, 4000);
    });
}

async function getdata() {
    await api();
    await api();
}