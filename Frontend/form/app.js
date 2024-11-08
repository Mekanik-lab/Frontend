document.addEventListener("DOMContentLoaded", function(){
    function showForm() {
        document.querySelector("#button__open--form").addEventListener("click", () => {
            const overlay = document.querySelector("#overlay").style.display = "flex";
            const form = document.querySelector("#form").style.display = "flex";
        });
    }

    function closeForm () {
        document.querySelector("#button--close").addEventListener("click", () => {
            const overlay = document.querySelector("#overlay").style.display = "none";
            const form = document.querySelector("#form").style.display = "none";
        })
    }

    function saveData() {
        document.querySelector("#button--save").addEventListener("click", (event) => { 
            event.preventDefault(); 
            
            const name = document.getElementById("name").value; 
            const mail = document.getElementById("email").value; 
    
            if (name === "" || mail === "") {
                alert("Podaj pełne dane!"); 
            } else {
                console.log("Imię: ", name);
                console.log("Email: ", mail);

                document.querySelector("#overlay").style.display = "none";
                document.querySelector("#form").style.display = "none";
            }
        });
    }
    saveData();
    showForm();
    closeForm();
})