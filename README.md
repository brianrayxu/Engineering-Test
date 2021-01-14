# Engineering-Test
Engineering Test Submission

## Overview
This submission is split into two parts.

The first part is an example of a python notebook which combines multiple csv files into a "combined.csv" that includes unique IP addresses from different environments. 

The second part is a node.js application which calls upon a weather API and inserts relevant information into a mongoDB Atlas cluster. The weather API used is called "7timer!".

Documentation for 7Timer: http://www.7timer.info/doc.php?lang=en

## Instructions
First, download the zip file of this repository onto your local machine

For the first part, just open the python notebook called "Engineering Test.ipynb" and run the cells within the notebook. This will generate a "combined.csv" file where the aggregate information will be displayed.

For the second part, navigate into the directory with "server.js" and run:
```
npm install
node server.js
```

This will query the API and insert an instance into the database. In addition, there is a teseting command that will print the entire database in order to show that each insert worked. Feel free to run "server.js" multiple times and see more instances get inserted into the DB. 
