
// TAB-WECHSEL LOGIK
const tabs = document.querySelectorAll(".tab");
const lists = document.querySelectorAll(".trip-list");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        // Tabs aktiv setzen
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        // Richtige Liste anzeigen
        lists.forEach(list => list.classList.remove("active"));
        document.getElementById(tab.dataset.target).classList.add("active");
    });
});

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/reisen.sqlite');

app.get('/reisen', (req, res) => {
  db.all('SELECT * FROM reisen', [], (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.json(rows);
  });
});

fetch('/reisen')
  .then(response => response.json())
  .then(data => {
    console.log(data); // hier kannst du die Reisen in HTML rendern
  });

