function Test()
{
let myobject = {name:"Madras"};
let newObject = myobject;
myobject.name = "Chennai"
let myarray=["a","e","i","o"]
let vowelArray = myarray
myarray.push("u")
console.log(myarray)
const ECE=()=>{alert("check the console output!")}
return <div><button onClick ={ECE}>References Data Types and call the function .</button></div>
}
ReactDOM.render(<Test/>,document.getElementById('mydiv'))
