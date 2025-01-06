const pageId = document.body.id; //lid de la page ou je suis amendonné
let rate =""; 

if(pageId === "survey-page"){
    const ratingBox = document.querySelectorAll("form label"); //la ratingBox est la boite des labels dans
    const button = document.getElementById("btn-submit");

    ratingBox.forEach(span =>{ //dans la rating box j'itere chaque span
        span.addEventListener("click",(x) =>{ //pour chq span des quon entend un clic...
        
            ratingBox.forEach(span => span.classList.remove("checked")); //on retire le checked de tout les span de rating box
                span.classList.add("checked"); //mais on le rajoute pour le span ou on a entendu le clic
                rate=x.target.textContent; //on recup le rate
                localStorage.setItem("rating-choice", rate);   //on le save
            });
        });
    button.addEventListener("click", ()=> {
        if(rate){
            window.location.href="survey-answer.html";       
            }
        else{
            window.alert("Notez nous bordel");
        }
    });
}

if(pageId === "answer-page") {
    const answerSpan = document.getElementById("answer");
    
    answerSpan.innerHTML =localStorage.getItem("rating-choice"); 

}
    /*
    const btn = document.querySelector("button");

    btn.addEventListener("click", (e) =>{
        e.preventDefault()
        
        const a = document.getElementById("rating-view");
        const b = document.getElementById("submit-view");

        a.classList.add("hidden");
        b.classList.remove("hidden");
    });*/