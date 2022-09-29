window.addEventListener("load", () => {
    const inputForm = document.querySelector("#new-form");
    const newInput = document.querySelector("#input-text");
    const allTask = document.querySelector(".all-task");

    inputForm.addEventListener("submit", (e) => {
        //Prevent refresh
        e.preventDefault();

        //get input value
        const inputValue = newInput.value;

        if(!inputValue) return alert("This field cannot be blank!");

        if(inputValue.trim() === "") return alert("Unsuccessful attempt!"); 
            
        //create and append html elements with their class
        const taskDIV = document.createElement("div");
        taskDIV.classList.add("added-task");
        allTask.appendChild(taskDIV);

        const contentDIV = document.createElement("div");
        contentDIV.classList.add("new-text");
        contentDIV.innerHTML = inputValue;
        taskDIV.appendChild(contentDIV);

        const removeDIV = document.createElement("div");
        removeDIV.classList.add("remove");
        taskDIV.appendChild(removeDIV);

        const removeButton = document.createElement("button");
        removeButton.classList.add("remove-button");
        removeButton.innerHTML = "X";
        removeDIV.appendChild(removeButton);

        //after clicking add button, reset input field
        e.target.reset();

        //remove task
        removeButton.addEventListener("click", () => {
            taskDIV.remove();
        })
        // Editable task will be added
        // contentDIV.addEventListener("click", () => {
        //     contentDIV.setAttribute("contentEditable", "true")
        //     contentDIV.focus();

        //     SaveIcon();
        // })
    })
})

//later save button will be added

// function noop() {}

// function SaveIcon() {
//     const saveDIV = document.createElement("div");
//     saveDIV.classList.add("save-div");
//     main.appendChild(saveDIV);

//     const saveButton = document.createElement("button");
//     saveButton.classList.add("save-button");
//     saveDIV.appendChild(saveButton);

//     const saveICON = document.createElement("i");
//     saveICON.classList.add("fa-solid", "fa-check");
//     saveButton.appendChild(saveICON);

    
//     SaveIcon = noop;
// }

