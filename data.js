//api url
const api_url='http://sandbox.bittsdevelopment.com/code1/fetchemployees.php';

//defining async function
async function getapi(url){
     //storing response
     const response = await fetch(url);

     //storing data in form of JSON
     var data = await response.json();
     console.log(data);
     if (response){
         hideloader();
     }
     show(data);
}

//calling that async function
getapi(api_url);

//function to hide the loader
function hideloader(){
    document.getElementById('loading').style.display = "none";
}

// function to define innerHTML for HTML table
function show(data) {
    let tab = '<tr><th>Name</th><th>role</th></tr>';

    //loop to access all the rows
    for(let r of data.list){
        tab += '<tr><td>$(r.name)</td><td>$(r.roles)</td></tr>';
    }
    //setting innerhtml as tab variable
    document.getElementById("employees").innerHTML = tab;
}