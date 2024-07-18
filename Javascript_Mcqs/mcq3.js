// === always type check along with values
// == compare values , is same then convert

const a=({x,y,z})=>{
    console.log(x,y,z); //undefined undefined undefined
}
a(1,2,3)

// only one paramater which is object , only a accept and it will try to destructure