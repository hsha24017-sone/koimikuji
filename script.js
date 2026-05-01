const fortunes =[
    "大吉💖 ほんまえぐいっすわ",
    "中吉 ^^) ほんまえぐいっすわ",
    "小吉　ほんまえぐいっすわ",
    "凶　ほんまえぐいっすわ"
    
];

const button = document.getElementById("o");
const result = document.getElementById("result");

button.addEventListener("click",function () {
const randomNumber = Math.floor(Math.random() * fortunes.length);
result.textContent = fortunes[(randomNumber)];
});