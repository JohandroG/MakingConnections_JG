//===============================================Change profile Name================================================

function changename(){

    let name = document.querySelector('#name')
    name.innerHTML = "Any other name"
    
}

let editprof = document.querySelector('.edit')
editprof.addEventListener('click', changename)

//===============================================Delete request================================================

function removrequest1(){
    let request1 = document.querySelector('#request1')
    request1.remove()
}

function removrequest2(){
    let request2 = document.querySelector('#request2')
    request2.remove()
}

let deletereq1 = document.querySelectorAll('#accept-deny1')

for (let i= 0; i < deletereq1.length ; i++){
    deletereq1[i].addEventListener("click", removrequest1);
}

let deletereq2 = document.querySelectorAll('#accept-deny2')

for (let i= 0; i < deletereq2.length ; i++){
    deletereq2[i].addEventListener("click", removrequest2);
}

//===============================================Buttons react================================================

