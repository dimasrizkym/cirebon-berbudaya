new Swiper(".swiperEvent", {
  slidesPerView: "auto",
  spaceBetween: 32,
});

const learnMore = document.getElementById("learn-more");
const sectionBudaya = document.getElementById("budaya-cirebon");

learnMore.onclick = ()=>{
  sectionBudaya.scrollIntoView()
}