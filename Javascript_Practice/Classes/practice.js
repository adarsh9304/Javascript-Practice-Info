function fun1(){
    console.log('fun1',this);
}
const fun2=()=>console.log('fun2', this);

fun1()
fun2()