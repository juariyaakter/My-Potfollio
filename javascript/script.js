// function loadProject(){
//     fetch('../deta/project.json')
//     .then(res => res.json())
//     .then(data => displayProject(data))
// }
// loadProject();

// function displayProject(data) {
//     const allPROJECT = document.getElementById('PROJECT')

//     for(const PROJECT of data){
//         const div = document.createElement('div');
//         div.innerHTML = `
    
        
//         <div class="card" style="width: 22rem;">
//         <img src="img/popup-project-1.jpg" class="card-img-top" alt="..."> 
//         <div class="card-body">
//           <h3 class="card-title">Website Design</h3>
//           <h6>Web Design, App Design</h6>
//           <a hrsf="#" class="btn btn-primary" >&rarr;</a>
//         </div>  
   
    
    

  
//         `;
//         allProject.appendChild(div);
//     }
// }








const form = document.querySelector('form');
const yourName = document.querySelector('#name');
const email = document.querySelector('#email');
const textarea = document.querySelector('#text');
const NumBer = document.querySelector('#numberr');


form.addEventListener('submit', formhandler);

function formhandler(e){
    e.preventDefault();

    const formInfo = {
        Name:yourName.value,
        Email:email.value,
        Textarea:textarea.value,
        Number:NumBer.value
    }
    console.log(formInfo);

    yourName.value = '',
    email.value = '',
    textarea.value = ''
    NumBer.value = ''

}