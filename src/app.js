const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 8000;

/* ----------------------------- Set View Engine ---------------------------- */

// View engine is hbs
const views_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set('views', views_path);
hbs.registerPartials(partials_path)

/* ------------------------------- Static Path ------------------------------ */

const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

/* --------------------------------- Routing -------------------------------- */

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/weather", (req, res) => {
    res.render("weather");
});

app.get("*", (req, res) => {
    res.render("404", {
        errmsg : "Oops! Page Not Found! "
    });
});

/* -------------------- Start listening at localhost:8000 ------------------- */

app.listen(port, () => {
    console.log(`Application running at http://localhost:${port}`);
});
