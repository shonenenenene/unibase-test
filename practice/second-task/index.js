(async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (data) => data.json()
  );

  const tableData = data.map((item) => ({
    ...item,
    title: item.title.replace(/[^a-zA-Z0-9 ]/g, " "),
    body: item.body.replace(/[^a-zA-Z0-9 ]/g, " "),
  }));

  const tableContent = document.getElementById("table-content");
  const tableButtons = document.querySelectorAll("th button");
  const searchInput = document.getElementById("search-input");
  const clearButton = document.getElementById("search-btn");
  const searchForm = document.getElementById("search-form");

  let filterValue = "";

  const generateFilter = (str) => {
    return (item) => item.body.includes(str) || item.title.includes(str);
  };

  searchInput.addEventListener("input", (ev) => {
    const filterVal = ev.target.value;
    const activeButton = [...tableButtons].find((item) => {
      return item.getAttribute("data-dir");
    });
    const sortId = activeButton ? activeButton.id : null;
    const direction = activeButton
      ? activeButton.getAttribute("data-dir")
      : null;
    const currentDirection = direction === "desc" ? "asc" : "desc";

    if (filterVal.length >= 3) {
      sortData(
        tableData.filter(generateFilter(filterVal)),
        sortId,
        currentDirection
      );
      filterValue = filterVal;
    } else {
      sortData(tableData, sortId, currentDirection);
      filterValue = "";
    }
  });

  clearButton.addEventListener("click", () => {
    searchForm.reset();
    filterValue = "";
    resetButtons();
    getTableContent(tableData);
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
    if (!param) {
      getTableContent(data);
      return;
    }
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
      if (!event || button !== event.target) {
        button.removeAttribute("data-dir");
      }
    });
  };

  getTableContent(tableData);

  [...tableButtons].map((button) => {
    button.addEventListener("click", (e) => {
      resetButtons(e);
      if (e.target.getAttribute("data-dir") == "desc") {
        sortData(
          tableData.filter(generateFilter(filterValue)),
          e.target.id,
          "desc"
        );
        e.target.setAttribute("data-dir", "asc");
      } else {
        sortData(
          tableData.filter(generateFilter(filterValue)),
          e.target.id,
          "asc"
        );
        e.target.setAttribute("data-dir", "desc");
      }
    });
  });
})();
