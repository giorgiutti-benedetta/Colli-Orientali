const bottoni = document.querySelectorAll("a.zone");
let timer;

function illumina(id) {
  const zona = document.getElementById(id);
  document.querySelectorAll(".zona").forEach(z => z.classList.remove("attiva"));
  zona.classList.add("attiva");

  clearTimeout(timer);
  timer = setTimeout(function () {
    zona.classList.remove("attiva");
  }, 1000);
}

bottoni.forEach(function (b) {
  b.addEventListener("click", function () {
    const id = "zona-" + b.getAttribute("href").slice(1);
    setTimeout(function () { illumina(id); }, 500); 
  });
});