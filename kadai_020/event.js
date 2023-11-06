const textContent = document.getElementById("btn");

textContent.addEventListener("click" , () => {
    document.getElementById("text").textContent = "ボタンをクリックしました"
});