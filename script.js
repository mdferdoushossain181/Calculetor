function deleteme(){
   document.getElementById("result").value ="";
}

function deletemy(){
  const result=document.getElementById('result');result.value=result.value.slice(0,-1)
}

function calculator(newvalw){
    document.getElementById('result').value+=newvalw;
}


function Answer(){
  var a=document.getElementById("result").value;
  var b=eval(a);
  document.getElementById("result").value=b;
}

