const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

const express = require("express");
const hbs = require("hbs");

const printPDF = require("./utils/htmlToPdf");
const validationFunction = require("./utils/validation");
const savingJson = require("./utils/savingJson");
const appendJson = require("./utils/appendJson");
const readingJson = require("./utils/readingJson");

const app = express();

//Paths
//paths
const publicDirectoryPath = path.join(__dirname, "/public");
const viewPath = path.join(__dirname, "/public/templates");

//view engine and views folder
app.set("view engine", "hbs");
app.set("views", viewPath);

//middlewares
app.use(express.static(publicDirectoryPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//function to increase counter for hbs file
hbs.registerHelper("counter", (index) => {
  return index + 1;
});

getIndexPage = (req, res) => {
  res.sendFile("public/index.html", { root: __dirname });
  res.end();
};

postIndexPage = (req, res) => {
  savingJson(validationFunction(req.body));
  res.redirect("/templates");

  res.end();
};

getTemplates = (req, res) => {
  res.sendFile("public/templates.html", { root: __dirname });
};

getTemplateOne = (req, res) => {
  if (fs.existsSync("./JSON/formData.json")) {
    res.render("1", readingJson());
  } else {
    res.send("Error: Fill The Form First");
  }
};

postTemplateOne = (req, res) => {
  appendJson(readingJson(), req.body);
  res.end();
};

app.route("/").get(getIndexPage).post(postIndexPage);

app.route("/templates").get(getTemplates);

app.route("/templates/1").get(getTemplateOne).post(postTemplateOne);

app
  .route("/templates/1/download")
  .get((req, res) => {
    if (fs.existsSync("./JSON/formData.json")) {
      printPDF()
        .then(() => {
          res.sendFile("public/downloadPage.html", { root: __dirname });
        })
        .catch((e) => console.log(e));
    } else {
      res.send("Error: Fill The Form First");
    }
  })
  .post((req, res) => {
    fs.unlinkSync("./public/resume.pdf");
    fs.unlinkSync("./JSON/formData.json");
    res.end();
  });

module.exports = app;
