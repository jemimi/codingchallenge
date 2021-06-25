function fetchTeam(){
    /* STEP1: Test out whether the API works
    fetch('http://sandbox.bittsdevelopment.com/code1/fetchemployees.php')
    .then(res => console.log(res))
    */

    fetch('http://sandbox.bittsdevelopment.com/code1/fetchemployees.php')
    //STEP 2: returns another promise for json object: 
    .then(res => res.json())
    //console.log the data to see if it shows up: 
    //STEP 3: console the data: 
    //.then(data => console.log(data))

    .then(data => {
        console.log(data);
        const employees = Object.values(data);
        //document.getElementById('team').innerHTML = data;

        //loop through data
        for(let i= 0; i < employees.length; i++){
            //check if loop works
            console.log(employees[i].employeefname);
            const fName = employees[i].employeefname + " " + employees[i].employeelname;
            const bio = employees[i].employeebio;

            //get html element
            var team = document.getElementById("team");

            //now create box around info
            var box = document.createElement("div");
            box.className = "box";
            //append box to main container in order to add info
            team.appendChild(box);

            //check if the employee is featured
            if (employees[i].employeeisfeatured === "1"){
                var feature = document.createElement("img");
                //gets the crown image
                feature.src = "./images/crownsvg.png"
                feature.className = "feature"
                box.appendChild(feature);
            }

            //display profilepic
            var profilePic = document.createElement("img");
            profilePic.className = "image";
            //get profile pic from api and append .jpg in order for it display. 
            profilePic.src = "http://sandbox.bittsdevelopment.com/code1/employeepics/" + employees[i].employeeid +".jpg"

            //display  names 
            var showName = document.createElement('p');
            showName.className = "name";
            //add text node fname
            var nodeName = document.createTextNode(fName); 
            showName.appendChild(nodeName);

            //display bios
            var showBio = document.createElement("p");
            showBio.className = "bio";
            var nodeBio = document.createTextNode(bio);
            showBio.appendChild(nodeBio);
            
            //now append to DOM elements
            box.appendChild(profilePic);
            box.appendChild(showName);
            box.appendChild(showBio);

            //ROLES
            const roles = employees[i].roles;
            //loop though roles to get the role title
            for(let j = 0; j < roles.length; j++){
                //console.log(roles[j].roleid);
                var role = document.createElement("span");
                role.style.backgroundColor = roles[j].rolecolor;
                role.className="role";
                var nodeRole = document.createTextNode(roles[j].rolename);
                role.appendChild(nodeRole);
                box.appendChild(role);

            }//END ROLES FOR LOOP

        } // END EMPLOYEES FOR LOOP
    }) //END .THEN(DATA)
    //catching of the errors from the promises 
    .catch(error => {console.log(error)
    }); //END .CATCH()


} //END FETCH()
// CALL FETCHTEAM() FUNCTION
fetchTeam();
