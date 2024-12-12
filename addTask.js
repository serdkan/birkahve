let tododizi = ["boya yapılacak"];
function addTask() {
  const task = document.getElementById("todoInput").value;
  if (task) {
    const list = document.getElementById("todoList");
    tododizi.push(task);
    let index = tododizi.length-1;
    list.innerHTML += `<li>${task} <button onclick="sil(${index})">X</button></li>`;
    
    document.getElementById("todoInput").select();
  } else {
    alert("görev yazmanız gerekiyor");
  }
}

function sil(indexdegeri){
  alert(indexdegeri);
}