document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".section-nav button");
  const sections = document.querySelectorAll(".content-section");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");

      // Hide all sections
      sections.forEach((sec) => sec.classList.remove("visible"));

      // Show selected section
      document.getElementById(target).classList.add("visible");

      // Scroll to top of content
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // Load header + footer
  fetch("header.html")
    .then((res) => res.text())
    .then(
      (html) =>
        (document.getElementById("header-placeholder").innerHTML = html),
    );

  fetch("footer.html")
    .then((res) => res.text())
    .then(
      (html) =>
        (document.getElementById("footer-placeholder").innerHTML = html),
    );
});
