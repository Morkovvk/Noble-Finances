const jobs = document.querySelectorAll(".test-job > div");
const quotes = document.querySelectorAll(".test-clients > div");

jobs.forEach(function (job, index) {
  job.addEventListener("click", function () {
    // 1. прибрати .active з УСІХ jobs
    jobs.forEach(function (j) {
      j.classList.remove("active");
    });

    // 2. додати .active на ЦЕЙ job
    job.classList.add("active");

    // 3. сховати всі quotes
    quotes.forEach(function (quote) {
      quote.style.display = "none";
    });

    // 4. показати quotes[index] — саме той, що відповідає клікнутому job
    quotes[index].style.display = "flex"; // 'flex', бо .test-clients > div має display: flex
  });
});

// Початковий стан при завантаженні сторінки: перший job активний, перша quote видима
jobs[0].classList.add("active");
quotes.forEach(function (quote, index) {
  quote.style.display = index === 0 ? "flex" : "none";
});
