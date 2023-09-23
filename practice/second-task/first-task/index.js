(async () => {
  const tableData = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((data) => data.json());

  console.log(tableData, "asdasda");

  const tableContent = document.getElementById("table-content");
  const tableButtons = document.querySelectorAll("th button");
  const searchInput = document.getElementById("search");

  searchInput.addEventListener("input", (ev) => {
    const filterVal = ev.target.value;
    if (filterVal.length >= 3) {
      getTableContent(
        tableData.filter(
          (item) =>
            item.body.includes(filterVal) || item.title.includes(filterVal)
        )
      );
    } else {
      getTableContent(tableData);
    }
  });

  const createRow = (obj) => {
    const row = document.createElement("tr");
    const objKeys = Object.keys(obj);
    objKeys.map((key) => {
      const cell = document.createElement("td");
      cell.setAttribute("data-attr", key);
      cell.innerHTML = obj[key];
      row.appendChild(cell);
    });
    return row;
  };

  const getTableContent = (data) => {
    tableContent.innerHTML = "";
    data.map((obj) => {
      const row = createRow(obj);
      tableContent.appendChild(row);
    });
  };

  const sortData = (data, param, direction = "asc") => {
    const sortedData =
      direction == "asc"
        ? [...data].sort(function (a, b) {
            if (a[param] < b[param]) {
              return -1;
            }
            if (a[param] > b[param]) {
              return 1;
            }
            return 0;
          })
        : [...data].sort(function (a, b) {
            if (a[param] > b[param]) {
              return -1;
            }
            if (a[param] < b[param]) {
              return 1;
            }
            return 0;
          });

    getTableContent(sortedData);
  };

  const resetButtons = (event) => {
    [...tableButtons].map((button) => {
      if (button !== event.target) {
        button.removeAttribute("data-dir");
      }
    });
  };

  getTableContent(tableData);

  [...tableButtons].map((button) => {
    button.addEventListener("click", (e) => {
      resetButtons(e);
      if (e.target.getAttribute("data-dir") == "desc") {
        sortData(tableData, e.target.id, "desc");
        e.target.setAttribute("data-dir", "asc");
      } else {
        sortData(tableData, e.target.id, "asc");
        e.target.setAttribute("data-dir", "desc");
      }
    });
  });
})();
