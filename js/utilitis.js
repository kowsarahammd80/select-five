
    // document.getElementById('card-btn-1').addEventListener('click', function(){
    //   let listItemsElements = document.getElementById('list-items');
    //   let li = document.createElement('li');
    //   li.innerText = document.getElementById('player-1').innerText;
    //   listItemsElements.appendChild(li); 
      
    // })



    let seclect = document.querySelectorAll('.card-btn').length;
    for(let i = 0; i < seclect; i++){
      document.querySelectorAll('.card-btn')[i].addEventListener('click', function(){

       let playerName = document.querySelectorAll('.player-name').length;
       for(let i = 0; i < playerName; i++){
        
        let li = document.createElement('li');
         li.innerText = document.querySelectorAll('.player-name')[i];
           listItemsElements.appendChild(li); 
        

       }
      
      })
    }

   

   




   






// function disableButton(btn) {
//   document.getElementById(btn.id).disabled = true;
// }

// document.getElementById('card-btn-2').addEventListener('click', function(){
//   let listItemsElements = document.getElementById('list-items');
//   let li = document.createElement('li');
//   li.innerText = document.getElementById('player-2').innerText;
//   listItemsElements.appendChild(li); 
  
// })