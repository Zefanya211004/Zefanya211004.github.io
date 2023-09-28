const sr = ScrollReveal({
    distance: "40px",
    duration: 2500,
    reset: true,
  });
  
  sr.reveal(".title", { delay: 200, origin: "left" });
  sr.reveal(".navbar", { delay: 400, origin: "top" });

  function toggleMenu() {
    const menu = document.querySelector(".navbar");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}