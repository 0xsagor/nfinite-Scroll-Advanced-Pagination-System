const data = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

let page = 0;
const perPage = 10;

function loadMore() {
  const start = page * perPage;
  const end = start + perPage;
  const list = document.getElementById("list");

  data.slice(start, end).forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });

  page++;

  if (page * perPage >= data.length) {
    document.getElementById("loading").innerText = "No more items";
    window.removeEventListener("scroll", handleScroll);
  }
}

function handleScroll() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
    loadMore();
  }
}

window.addEventListener("scroll", handleScroll);
loadMore();
