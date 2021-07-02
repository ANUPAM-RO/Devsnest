//function that display value
function dis(val)
{
    document.getElementById("result").value+=val
}
  
//function that evaluates the digit and return result
function solve()
{
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}
  
//function that clear the display
function clr()
{
    document.getElementById("result").value = ""
}
function del()
{

   let x = document.getElementById("result").value
   let y = x.slice(0,-1)
   document.getElementById("result").value = y

}
