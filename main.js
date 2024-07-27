document.addEventListener("DOMContentLoaded", (event) => {
  demo()
})

function demo() {
  let faqDiv = document.querySelectorAll(".faq_content_title");
  let closeBtns = document.querySelectorAll(".close_btn");
  
  faqDiv.forEach((e, index) => {
    e.addEventListener("click", function () {
      let contentFaq = this.nextElementSibling;
      let closeBtn = closeBtns[index];
  
      contentFaq.classList.toggle("active");
      if (contentFaq.className === "faq_content_content active") {
        closeBtn.style.transform = "rotate(0deg)";
      } else {
        closeBtn.style.transform = "rotate(45deg)";
      }
  
      faqDiv.forEach((remove, idx) => {
        if (idx !== index) {
          let removeDiv = remove.nextElementSibling;
          removeDiv.classList.remove("active");
          closeBtns[idx].style.transform = "rotate(45deg)";
        }
      });
    });
  });
}