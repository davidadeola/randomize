const shuffleBtn = document.getElementById("btn-shuffle");
const sortBtn = document.getElementById("btn-sort");
const container = document.getElementById("item-container");

const array = [
  {
    num: 1,
    color: "#6F98A8",
  },
  {
    num: 2,
    color: "#2B8EAD",
  },
  {
    num: 3,
    color: "#2F454E",
  },
  {
    num: 4,
    color: "#2B8EAD",
  },
  {
    num: 5,
    color: "#2F454E",
  },
  {
    num: 6,
    color: "#BFBFBF",
  },
  {
    num: 7,
    color: "#BFBFBF",
  },
  {
    num: 8,
    color: "#6F98A8",
  },
  {
    num: 9,
    color: "#2F454E",
  },
];

const populateData = (arr) => {
  /**
   * Loop through the array of objects
   * Create li
   * Add class to li
   * set li innerHTML
   * set style of li
   * append li to container
   */
  arr.forEach((item, index) => {
    const li = document.createElement("li");
    li.classList.add(`item${index + 1}`);
    li.innerHTML = item.num;
    li.style.setProperty("--color", item.color);
    container.appendChild(li);
  });
};

const shuffleData = (arr) => {
  /**
   * resorting the array to random indexes
   * clearing the existing DOM Container
   * Repopulating the container
   */
  arr.sort(() => Math.random() - 0.5);
  container.innerHTML = "";
  populateData(arr);
};

const sortData = (arr) => {
  /**
   * sorting the data
   * clearing the container
   * repopulating the container
   */
  arr.sort((a, b) => a.num - b.num);
  container.innerHTML = "";
  populateData(arr);
};

// populates on first load
populateData(array);

shuffleBtn.addEventListener("click", () => shuffleData(array));

sortBtn.addEventListener("click", () => sortData(array));
