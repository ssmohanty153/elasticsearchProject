const retiveUserDetails = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "/userDetails", false);
    xhttp.send();

    const userDetails = JSON.parse(xhttp.responseText);
    userDetails.hits.hits.forEach(element=>{userDetail=element._source;

    //const userdetail= userDetails.hits.hits[0]._source;


        const x = `
        <div class="col-4" >
        <div class="card">
            <div class="card-header" id="headingOne" style="background-color:pink;">
                <h5 class="mb-0">
                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        ${userDetail.email}
                    </button>
                  </h5>
                  </div>
    
                  <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion" style="background-color:orange;">
    
                <div class="card-body">Age: ${userDetail.age}</div>
                <div class="card-body">MobileNumber: ${userDetail.MobileNumber}</div>
                <div class="card-body">Username: ${userDetail.name}</div>
                <div class="card-body">password: ${userDetail.password}</div>
                </div>
    
                <hr style="background-color:#a53232;">
    
                <button type="button" class="btn btn-danger" onClick="deleteUserDetail('${userDetail.MobileNumber}')">Delete</button>
                <button types="button" class="btn btn-primary" data-toggle="modal"
                    data-target="#editUserDetails" onClick="setEditModal(${userDetail.MobileNumber})"
                    style="float: right;">
                    Edit
                </button>
                
            </div>
        </div>
        `

        document.getElementById('UserDetail').innerHTML = document.getElementById('UserDetail').innerHTML + x;
    }
);
}

retiveUserDetails();

const deleteUserDetail = (MobileNumber) => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("POST", `/UserDetail/${MobileNumber}`, false);
    xhttp.send();

    if(xhttp.responseText=='deleted'){
       location.href='/retiveUserDetails';
    }
   
   
}

const setEditModal = (MobileNumber) => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", `/getuserDetails/${MobileNumber}`, false);
    xhttp.send();

    const userDetails = JSON.parse(xhttp.responseText);
    const userDetail= userDetails.hits.hits[0]._source;

    const {
        name,
        age,
        email,
        password
    } = userDetail;
    document.getElementById('name').value =name ;
    document.getElementById('age').value = age;
    document.getElementById('MobileNumber').value = MobileNumber;
    document.getElementById('email').value = email;
    document.getElementById('password').value = password;
    document.getElementById('editForm').action = `/getuserDetails/${MobileNumber}`;

};



