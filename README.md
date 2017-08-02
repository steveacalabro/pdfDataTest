# Parsing PDF file
I have included a file called `example.js`. This file shows how one would use a fictitious npm package to call a function `parsePdfFile`. This will output a file to the src of the angular2 application so that you can use it in the front end to searchTerm

I have made this file easy to run the way a server cron job or anther node application would consume it. To run it run the following node script.

```
npm run parsePdf
```

# Starting the front end

To start the demo, simply run the following commands

```
npm install
ng serve
```

Once completed simple type in a search team and pick a key you will be searching. Results will be printed to the console as well as the the webpage.


# Bottle necks
Currently the file will run all of the pages of the pdf. I did this so that you can see the example run in full. If it needs to be quicker simply uncomment line number `17` of `pdfParse.js` and replace it with like `16` however the pre generated json file will also work well.

This is a bottle neck because it take time to parse the file. However once parsed it is relatively faster.

Anther step to get the code ready for production would be to replace the search function. Currently, the code is using built in `.filter()` method. This can hurt performance on a larger data set. I would suggest to implement a more complex algorithm for this.

# Extra Notes

I ended up using the following npm package to orginally parse the table
https://www.npmjs.com/package/pdf-table-extractor

I did got through a few of the avaible tools on npm but eventually landed on this one since it read table data specifically. The output however was less than optimal so alot of my code is parsing that data to a more optimal json array. 

If this was production I would attempt to rewrite this package internally because it seems to not have a lot of traction and maintenance which scares me personally. 
