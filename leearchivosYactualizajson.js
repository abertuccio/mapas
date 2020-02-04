var fs = require('fs');

const dirname = 'boundaries/buenos_aires/';

  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach(function(filename) {
        // console.log(filename);
      fs.readFile(dirname + filename, 'utf-8', function(err, content) {
        if (err) {
          console.log(err)
        }
        console.log(content);
      });
    });
  });
