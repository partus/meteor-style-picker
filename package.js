Package.describe({
  summary: "Pick bootstrap3 (bootswatch) them on the client"
});

var path = Npm.require("path"),
  fs = Npm.require("fs"),
  packagePath = path.join(path.resolve("."), "packages", "style-picker");


Package.on_use(function (api,where) {
  api.use(['deps','jquery','session'], 'client');
  api.add_files( 'styleSeter.js', 'client');
  //add styles folder 
  var files = fs.readdirSync(path.join(packagePath, "styles"));
  files.forEach(function(file){
    api.add_files(path.join("styles", file), "client", {isAsset: true});
  });
});


