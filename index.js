var pdf_table_extractor = require("pdf-table-extractor");
var fs = require('fs');

function searchAttribute(data) {
  console.log(data.filter(function(x) {
    return x.sic === 3291;
  }));
}

function newLineToArray(input) {
  if (input.indexOf('\n') > -1) {
    // Contains a newline Char
    return input.split('\n');
  }

  return input;
}

function success(result) {
  const parsedData = [];

  for (let j = 0; j < result.pageTables.length; j++) {
    for (let i = 1; i < result.pageTables[j].tables.length; i++) {
      const cur = result.pageTables[j].tables[i];

      const row = {
        'isoDescription': cur[0],
        'isoCGL': newLineToArray(cur[1]),
        'sic': newLineToArray(cur[2]),
        'naics': newLineToArray(cur[3]),
        'generalDescription': newLineToArray(cur[4]),
        'ncci': newLineToArray(cur[5]),
        'caWC': newLineToArray(cur[6]),
        'deWC': newLineToArray(cur[7]),
        'miWC': newLineToArray(cur[8]),
        'njWC': newLineToArray(cur[9]),
        'nyWC': newLineToArray(cur[10]),
        'paWC': newLineToArray(cur[11]),
        'txWC': newLineToArray(cur[12])
      };

      parsedData.push(row);
    }
  }

  fs.writeFile('./output2.json', JSON.stringify(parsedData), function(err) {
    if (err)
      return console.log(err);
  });
}

//Error
function error(err) {
  console.error('Error: ' + err);
}

pdf_table_extractor("pdfData.pdf", success, error);
