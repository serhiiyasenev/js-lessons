const parser = (str, ...params) => {
    console.log(params);
};

parser(...'ab', 2);