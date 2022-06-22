document.querySelector("button").addEventListener("click", fn1);
function fn1(){

    let Name = document.querySelector("name").value;

  document.querySelector("p").innerText = ` Hello ${Name},Welcome To The Apprentice Cloud`;
    
}
