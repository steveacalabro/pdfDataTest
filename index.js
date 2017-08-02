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

  for (let j = 0; j < 10; j++) {
    for (let i = 1; i < result.pageTables[j].tables.length; i++) {
      const cur = result.pageTables[j].tables[i];

      if (Array.isArray(newLineToArray(cur[3]))) {
        for (let k = 0; k < newLineToArray(cur[3]).length; k++) {
          const row = {
            'isoDescription': cur[0],
            'isoCGL': cur[1],
            'sic': newLineToArray(cur[2])[k],
            'naics': newLineToArray(cur[3])[k],
            'generalDescription': newLineToArray(cur[4])[k],
            'ncci': newLineToArray(cur[5])[k],
            'caWC': newLineToArray(cur[6])[k],
            'deWC': newLineToArray(cur[7])[k],
            'miWC': newLineToArray(cur[8])[k],
            'njWC': newLineToArray(cur[9])[k],
            'nyWC': newLineToArray(cur[10])[k],
            'paWC': newLineToArray(cur[11])[k],
            'txWC': newLineToArray(cur[12])[k]
          };
          parsedData.push(row);
        }
      } else {
        const row = {
          'isoDescription': cur[0],
          'isoCGL': cur[1],
          'sic': cur[2],
          'naics': cur[3],
          'generalDescription': cur[4],
          'ncci': cur[5],
          'caWC': cur[6],
          'deWC': cur[7],
          'miWC': cur[8],
          'njWC': cur[9],
          'nyWC': cur[10],
          'paWC': cur[11],
          'txWC': cur[12]
        };
        parsedData.push(row);
      }
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
