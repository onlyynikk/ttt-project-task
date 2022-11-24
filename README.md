# ttt-project-task

## Description 

This project consists of taking a txt file and ploting a histogram based on the top 20 most repeated words.

## components

## Data.js

To fetch the data I made use of axios. Then replaces all the punctuation and converted every character to lowercase.

With the help of for loop compared the first word with the second then third and so on, and if the word is repeated then incremented the count by 1.

Stored the top 20 occurance of the repeated words inside a new object in key: value pair.(key=word, value=no of times repeated)

## Chart.js

In chart.js I separated the key:value pair and stored the keys and value in separate arrays.

Made use of react-chart-histogram library for ploting the histogram, taking key(words) as the x-axis and values(no of occurance) as the y-axis.
