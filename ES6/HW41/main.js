/* const myObjectAssign = (obj, ...sec) => {
    sec.forEach((e) => {
        obj = { ...obj, ...e };
        return obj;
    });

    return obj;
}; */

const myObjectAssign = (...obj) => {
    let tmp = {};
    obj.forEach((e) => {
        tmp = { ...tmp, ...e };

        return tmp;
    });

    return tmp;
};

console.log(myObjectAssign({ a: 1 }));
console.log(myObjectAssign({ a: 1 }, { b: 2 }));
console.log(myObjectAssign({ a: 1, b: 2 }, { b: 3 }, { a: 4, c: 5 }));
