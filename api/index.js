const App = require("express")();

App.get("/", (req, res) => {
  res.json({
    message: "ABC",
  });
});

const PORT = process.env.PORT || 3000;
App.listen(process.env.PORT || 3000, () => {
  console.log(`Server listen port ${PORT}`);
});