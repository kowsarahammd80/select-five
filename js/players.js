
//     document.getElementById('card-btn-1').addEventListener('click', function(){
//       let listItemsElements = document.getElementById('list-items');
//       let li = document.createElement('li');
//       li.innerText = document.getElementById('player-1').innerText;
//       listItemsElements.appendChild(li); 
      
//     })


// function disableButton(btn) {
//   document.getElementById(btn.id).disabled = true;
// }

// document.getElementById('card-btn-2').addEventListener('click', function(){
//   let listItemsElements = document.getElementById('list-items');
//   let li = document.createElement('li');
//   li.innerText = document.getElementById('player-2').innerText;
//   listItemsElements.appendChild(li); 
  
// })

 function disableButton(btn) {
   document.getElementById(btn.id).disabled = true;
 }

document.getElementById('first-btn').addEventListener('click', function(){

  let listItemsElements = document.getElementById('player-list');
  let li = document.createElement('li');
  li.innerText = document.getElementById('player-1').innerText;
  listItemsElements.appendChild(li); 

})

document.getElementById('secend-btn').addEventListener('click', function(){

  let listItemsElements = document.getElementById('player-list');
  let li = document.createElement('li');
  li.innerText = document.getElementById('player-2').innerText;
  listItemsElements.appendChild(li); 

})

document.getElementById('theard-btn').addEventListener('click', function(){

  let listItemsElements = document.getElementById('player-list');
  let li = document.createElement('li');
  li.innerText = document.getElementById('player-3').innerText;
  listItemsElements.appendChild(li); 

})

document.getElementById('forth-btn').addEventListener('click', function(){

  let listItemsElements = document.getElementById('player-list');
  let li = document.createElement('li');
  li.innerText = document.getElementById('player-4').innerText;
  listItemsElements.appendChild(li); 

})

document.getElementById('fifth-btn').addEventListener('click', function(){

  let listItemsElements = document.getElementById('player-list');
  let li = document.createElement('li');
  li.innerText = document.getElementById('player-5').innerText;
  listItemsElements.appendChild(li); 

})

document.getElementById('six-btn').addEventListener('click', function(){

  let listItemsElements = document.getElementById('player-list');
  let li = document.createElement('li');
  li.innerText = document.getElementById('player-6').innerText;
  listItemsElements.appendChild(li); 

})
