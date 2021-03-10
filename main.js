// 當前輪播圖編號，從0開始
var index = 0;
// 下一張按鈕
var nextBtn = document.querySelector("#slider-next");
var prevBtn = document.querySelector("#slider-prev");


var items = document.getElementsByClassName("slider-item");

// 下一張按鈕的功能
function next() {
    index++;
    // 如果編號是 項目的數量 就將編號改為零
    if (index == items.length) index = 0;
    showItem();
    showDot();
    resetTimer();

    // console.log("編號：" + index);
}

function prev() {
    index--;

    if (index == -1) index = items.length - 1;
    showItem();
    showDot();
    resetTimer();
}


// 下一張按鈕.點擊 = 下一張按鈕功能
nextBtn.onclick = next;
prevBtn.onclick = prev;

// 顯示項目
function showItem() {
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("slider-active");
    }

    items[index].classList.add("slider-active");
}


var dots = document.getElementsByClassName("slider-dot");

function showDot() {
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("slider-dot-active");
    }

    dots[index].classList.add("slider-dot-active");
}

function clickDot(i) {
    index = i;
    showItem();
    showDot();
    
}

for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = function () {
        clickDot(i);
    };
}




var interval = 3000;
function autoPlay() {
    next();
}

// 設定間隔(函式,間隔時間)
var timer = setInterval(autoPlay,interval);

function resetTimer() {
    // 清除計時器
    clearInterval(timer);
    timer = setInterval(autoPlay,interval);
}