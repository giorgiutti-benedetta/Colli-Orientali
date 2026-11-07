const sezioni = document.querySelectorAll(".parteZoneScorrere section");

function illumina(id) {
  document.querySelectorAll(".zona").forEach(z => {
    z.style.opacity = (z.id === id) ? 0 : 0.55;
  });
}

const osservatore = new IntersectionObserver(function (voci) {
  voci.forEach(voce => {
    if (voce.isIntersecting) {
      illumina("zona-" + voce.target.id);
    }
  });
}, { rootMargin: "-40% 0px -40% 0px" });

sezioni.forEach(s => osservatore.observe(s));

console.log("Lo script funziona!");