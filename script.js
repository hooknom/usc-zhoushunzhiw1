document.getElementById("clickButton").addEventListener("click", () => {
    const outputMessage = document.getElementById("outputMessage");
    outputMessage.textContent = "You clicked the button! Have a wonderful day!";
    outputMessage.style.color = "green";
});
