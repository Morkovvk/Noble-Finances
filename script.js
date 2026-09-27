const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll(".test-clients > figure");

tabs.forEach(function (tab) {
  const id = tab.getAttribute("aria-controls");
  const panel = document.getElementById(id);

  tab.addEventListener("click", function () {
    // 1. прибрати .active з УСІХ jobs
    tabs.forEach(function (j) {
      j.setAttribute("aria-selected", "false");
    });
    // 2. додати .active на ЦЕЙ job
    tab.setAttribute("aria-selected", "true");
    // 3. сховати всі quotes
    panels.forEach(function (p) {
      p.hidden = true;
    });
    panel.hidden = false;
  });
});

// Початковий стан при завантаженні сторінки: перший job активний, перша quote видима
tabs[0].setAttribute("aria-selected", "true");
panels.forEach(function (panel, index) {
  panel.hidden = index !== 0;
});
