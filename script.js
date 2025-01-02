
document.addEventListener("DOMContentLoaded", () => {

    const ratingBox = document.querySelectorAll(".rating-box span"); //la ratingBox est l'ensemble des spans dans
    const rate = document.querySelector(".rating p span");

    ratingBox.forEach(span =>{ //dans la rating box j'itere chaque span

        span.addEventListener("click",(x) =>{ //des quon entend un clic d'un des span
        
            ratingBox.forEach(span => span.classList.remove("checked"));
            span.classList.add("checked");
            rate.textContent = x.target.textContent;

        });
    });

    const btn = document.querySelector("button");

    btn.addEventListener("click", () =>{

        const a = document.getElementById("rating-view");
        const b = document.getElementById("submit-view");

        a.classList.add("hidden");
        b.classList.remove("hidden");
    });

});