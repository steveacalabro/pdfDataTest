var pdf_table_extractor = require("pdf-table-extractor");
var fs = require('fs');

//PDF parsed
function success(result) {
  fs.writeFile('./output.json', JSON.stringify(result), function(err) {
    if (err)
      return console.log(err);
    console.log('output.json');
  });
}

//Error
function error(err) {
  console.error('Error: ' + err);
}

pdf_table_extractor("pdfData.pdf", success, error);
