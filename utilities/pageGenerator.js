var fs = require("fs");
var Handlebars = require("handlebars");

function render(filename, data) {
  var source = fs.readFileSync(filename, "utf8").toString();
  var template = Handlebars.compile(source);
  var output = template(data);
  return output;
}

var data = JSON.parse(fs.readFileSync("./src/page.json", "utf8"));

for (var i = 0; i < data.page.length; i++) {
  var result = render("./src/page.handlebars", data.page[i]);
  fs.writeFileSync(
    "./dist/" + data.page[i].scriptFilenamePrefix + ".html",
    result
  );
}
