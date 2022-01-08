const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 2000),
    setTimeout(() => {
        reject();
    }, 2001)
});

const pr1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 1000),
    setTimeout(() => {
        reject();
    }, 999)
});

pr.then(() => {
    console.log("resolved0");
}).then(() => {
    console.log("resolved1");
}).catch(() => {
    console.log("rejected");
}).finally(() => {
    console.log("finally");
    console.warn("1----------------------------1");
});

pr1.then(() => {
    console.log("resolve2");
}).catch(() => {
    console.log("rejected2");
}).finally(() => {
    console.log("finally2");
    console.warn("2----------------------------2");
});