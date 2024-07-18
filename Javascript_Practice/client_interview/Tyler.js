/*

Normal info on projects I worked on
JS snippets related questions: 
//1. 
var objA={mesage:'Hello'};
var objB={mesage:'Hello'};
console.log(objA === objB)

//2. 
var arr1=[1,2,3];
var arr2=arr1;
arr2.push(4);
console.log(arr1 === arr2);

//3.
console.log(x);
var x=1;
//4.
 function display(){
    x=2;
    return x;
  }
  console.log(display())

var x=2;

function displayNum(){
  console.log(x);
  x=5;
}

console.log(displayNum())

//5.
var arr1=[10,12,13,21,25];

setTimeout(()=>{
  for(var i=0;i<arr1.length;i++){
    console.log("Index :: "+ i + "array elements ::"+arr1[i]);
  }
},3000)

//6. 

var selectedId=2;

var arrObj=[
  {id:1,item:10},
  {id:2,item:20},
  {id:3,item:30},
  {id:4,item:40},
  {id:5,item:50},
  {id:6,item:60},
  {id:7,item:70},
  ];

//get item obj using seletedId


//7.
class Child extends Component {
    state = {
      count: 0,
    }
  
    incr() {
      this.setState({ count: this.state.count + 1 })
    }
  
    handleClick() {
      this.incr()
      this.incr()
    }
  
    render() {
      return (
        <>
          {this.state.count}
          <button style={{ fontSize: '40px' }} onClick={this.handleClick.bind(this)}>
            asdasdas
          </button>
        </>
      )
    }
  }

 What is the difference between functional components and class components in React.js?

 HumanCloud
 clinton
 elevevate
 Armatec global


*/