var pdf_table_extractor = require("pdf-table-extractor");
var fs = require('fs');

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
            'isoCGL': parseInt(cur[1]),
            'sic': parseInt(newLineToArray(cur[2])[k]),
            'naics': parseInt(newLineToArray(cur[3])[k]),
            'generalDescription': newLineToArray(cur[4])[k],
            'ncci': parseInt(newLineToArray(cur[5])[k]),
            'caWC': parseInt(newLineToArray(cur[6])[k]),
            'deWC': parseInt(newLineToArray(cur[7])[k]),
            'miWC': parseInt(newLineToArray(cur[8])[k]),
            'njWC': parseInt(newLineToArray(cur[9])[k]),
            'nyWC': parseInt(newLineToArray(cur[10])[k]),
            'paWC': parseInt(newLineToArray(cur[11])[k]),
            'txWC': parseInt(newLineToArray(cur[12])[k])
          };
          parsedData.push(row);
        }
      } else {
        const row = {
          'isoDescription': cur[0],
          'isoCGL': parseInt(cur[1]),
          'sic': parseInt(cur[2]),
          'naics': parseInt(cur[3]),
          'generalDescription': cur[4],
          'ncci': parseInt(cur[5]),
          'caWC': parseInt(cur[6]),
          'deWC': parseInt(cur[7]),
          'miWC': parseInt(cur[8]),
          'njWC': parseInt(cur[9]),
          'nyWC': parseInt(cur[10]),
          'paWC': parseInt(cur[11]),
          'txWC': parseInt(cur[12])
        };
        parsedData.push(row);
      }
    }
  }

  fs.writeFile('./src/assets/output.json', JSON.stringify(parsedData), function(err) {
    if (err) {
      return console.log(err);
    }

    console.log("Saved File");
  });
}

//Error
function error(err) {
  console.error('Error: ' + err);
}

module.exports = {
  parsePdfFile: function(fileName) {
    pdf_table_extractor(fileName, success, error); // "pdfData.pdf""
  },
}
