let colorPicker = document.getElementById('colorPicker');
let pixelCanvas = document.getElementById('pixelCanvas');
let sizePicker = document.getElementById('sizePicker');
let inputHeight = document.getElementById('inputHeight');
let inputWeight = document.getElementById('inputWeight');

let color = colorPicker.value;

colorPicker.addEventListener('change', function(event){
    color = event.target.value;
});
sizePicker.addEventListener('submit',function(e){
//sizePicker.onsubmit=function(e){
    e.preventDefault();
    emptyGrid();
    makeGrid();
});

function makeGrid() {
    let height = inputHeight.value;
    let weight = inputWeight.value;
    for (let rows=0;rows<height;rows++){
        //const tables=pixelCanvas.insertRow(rows);
      const tr=document.createElement('tr');
      pixelCanvas.appendChild(tr);
        for (let cols=0;cols<weight;cols++){
            //const cells=tables.insertCell(cols);
          const td=document.createElement('td');
          tr.appendChild(td);
          td.addEventListener('click',fillCell);
        }
    }
}

function fillCell(evt){
    //this.setAttribute("background-color",color);
    //td style = "background-color:color";
    evt.target.style.backgroundColor=color;
}

function emptyGrid(){
  //while (pixelCanvas.firstChild){
      //pixelCanvas.removeChild(pixelCanvas.child);
      //document.querySelectorAll(pixelCanvas).removeChild;
      //const deleteGrid = pixelCanvas.getElementsByTagName('tr');
      while(pixelCanvas.firstChild){
          pixelCanvas.removeChild(pixelCanvas.firstChild);
    }
}
