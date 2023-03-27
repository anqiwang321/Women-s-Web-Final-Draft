const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((accordionHeader) => {
  accordionHeader.addEventListener("click", () => {
    accordionHeader.parentElement.classList.toggle("active");
  });
});
