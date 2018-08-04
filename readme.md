# Cat Clicker

An Udacity Front-End web development exercise that shows students how to adjust a project based on changing requirements and maintain and organize the codebase. Different branches hold different versions of the app.

## Reflections on the 5 Cat Version (completed 8/4/2018)
It took longer than I wanted it to but it looks better than I thought it would. I did try to build it with expansion in mind so I built everything again from scratch. 

**Things I'm proud of:**
* I remembered to use event delegation to watch the parent ul element of my cat list, which saved a little space.
* Instead of hardcoding the cat names to the buttons, I generated them with a loop and pulled the names from the object array. This is in case more cats are added or the names change. I would need to implement a way to dynamically create the li elements and/or change the layout if more cats are added, but this is good for now.
* The beaded borders are pretty nice, and the border-radius shaping on the links. 

**What could be better:**
* The logic for the click events is a little repetitive. I feel like it should be less clunky. I might need to use some sort of binding to make sure the right cat object is updated. As of now I capture the object used in a variable and use that to increment the # of clicks.
* I could have thought it out a little better at the start. i wrote down what I intended and didn't use any of it but the page layout. That's something that happens but I wish I could have forseen it. But this ended up being better in the end (but not perfect).


August 2018 Amy Rutherford