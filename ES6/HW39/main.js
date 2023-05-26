const sumAllNumbers = (...elem) => {
    for (let i = 0; i < elem.length; i++) {
        if (typeof elem[i] !== typeof Number(elem[i]))
            return "Error! You can use only numbers.";
    }
    return elem.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );
};

console.log(sumAllNumbers(1)); // 1
console.log(sumAllNumbers(1, 2, 3)); // 6
console.log(sumAllNumbers(1, 2, 3, 1, 2, 1, 10)); // 20
console.log(sumAllNumbers(1, "2", 3)); // Error! You can use only numbers.
console.log(sumAllNumbers([1, 2], [2, 4])); // Error! You can use only numbers.
console.log(sumAllNumbers({ number: 1 })); // Error! You can use only numbers.
