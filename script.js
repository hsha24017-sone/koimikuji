const fortunes =[
    "大吉💖 素敵な出会いがあるかも！",
    "忠吉 ^^) 少し勇気を出すといいことが起きる",
    "庄吉　今日はゆっくり過ごそう",
    "凶　無理せず慎重に行動しよう"
];

const button = document.getElementById("o");
const result = document.getElementById("result");

button.addEventListener("click",function () {
const randomNumber = Math.floor(Math.random() * fortunes.length);
result.textContent = fortunes[(randomNumber)];
});