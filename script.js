// JS to trigger animation on scroll
const skillSection = document.querySelector("#Skills .vertical-line");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        skillSection.classList.add("grow"); // add animation class
      }
    });
  },
  { threshold: 0.5 }
); // trigger when 50% visible

observer.observe(skillSection);
