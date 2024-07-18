const promise1 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Promise Resolving');
        resolve('resolved value');
    }, 2000);
});

const arr = [1, 2, 3];

const asyncOperation = async () => {
    for (const ele of arr) {
        const data = await promise1();
        console.log(data);
        console.log('hello', ele);
    }
}
asyncOperation();
console.log('end');

