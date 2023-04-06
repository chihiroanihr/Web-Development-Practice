let imagesItems = [...document.querySelectorAll(".img-wrap")]; //nodelistではなく、配列で取得できる
let imageTitles = [...document.querySelectorAll("h2")];
let title = document.querySelector(".title");

// 具体的にいつ発動させるのかを決めるオプション
let options = {
  rootMargin: "0px", // デフォルトで０.marginとほぼ同じ。
  threshold: 0.5, // 閾値は0.2。これが１になると完全に画面におさまってから発動する
};

// ある特定の位置を超えると作動する関数 (監視対象になったら .active クラスをつける。)
let setItemActive = (entries) => {
  console.log(entries);
  entries.map((entry) => {
    // mapは返り値を持つ（新しく配列を生成する）、forEachは返り値を持たない。
    // console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
};

// Create Observer: どこにいるのか監視する。特定の位置に来たら関数を呼ぶ。
let observer = new IntersectionObserver(setItemActive, options); //交差の監視して、閾値を過ぎたらコールバック関数が呼ばれる

// Set Image Styling: img-wrapは偶数と奇数で出現する場所が違う。という処理。
imagesItems.map((imageItem, index) => {
  // Set Image Source
  imageItem.children[0].style.backgroundImage = `url(./images/${
    index + 1
  }.jpg)`;
  // Set Image Position depending on even/odd image number
  index % 2 == 0
    ? (imageItem.style.left = "55%")
    : (imageItem.style.left = "5%");

  // Observe
  observer.observe(imageItem); //itemを常に監視する。
});

// Set Image Title Styling
imageTitles.map((imageTitle, index) => {
  index % 2 == 0
    ? (imageTitle.style.left = "45%")
    : (imageTitle.style.left = "35%");

  // Observe
  observer.observe(imageTitle);
});

// Observe Title
observer.observe(title);
