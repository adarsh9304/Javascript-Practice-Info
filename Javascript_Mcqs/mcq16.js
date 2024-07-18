function* generate(i){
    console.log('A');
    yield i; // pause program st this point
    console.log('B');
    yield i*2
}

const gn=generate(5);
console.log(gn.next().value);