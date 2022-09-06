

let formDOM = document.querySelector("#hopForm");
formDOM.addEventListener('submit',kontrol);

let sayi1DOM = document.querySelector("#sayi1");
let sayi2DOM = document.querySelector("#sayi2");

let sonucDOM = document.querySelector("#sonuc").innerHTML;
let alert = document.querySelector("#alert");


function kontrol(event){
    event.preventDefault();
   sayi1DOM.value == 0 || sayi2DOM.value == 0 ? AlertDanger() : hesapla();
    
}


function hesapla() {
    a = Number(sayi1DOM.value);
    b = Number(sayi2DOM.value);
    c = Math.sqrt((a*a)+(b*b)); 

    alert.innerHTML = `Hypotenuse : ${+c.toFixed(2)} cm `;
    alert.classList.add("alert-warning");
    alert.classList.remove("alert-danger");
    alert.classList.remove("hide");
}


const AlertDanger = z => {
 
    alert.innerHTML = `Please provide all data`;
    alert.classList.add("alert-danger")
    alert.classList.remove("hide","alert-warning");
    
};
    

