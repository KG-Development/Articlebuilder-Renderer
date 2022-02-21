# Articlebuilder-Renderer

A fully self-written editor for building Articles and/or Webpages in a web-based sandbox. 
The Parts are stored in JSON format and can be interpreted by our renderer.
As this is part of a separate project, it is still to be ported -> substantial features are missing here and will be added in the next days. 

Ported right now:

- fully supported drag-and-drop for every element -> the code manages the creating and styling of the elements
- you can design every element as you imagine
- you can save every created article/html page via our save modal (this is stored in localstorage as this project doesn't feature a database (as the parent project for this tool))


To be ported:

- images
- pdf's
- downloadables
- Back Button
- Edit Button

To run the program:
For editing the articles:
Open the "createArticle.html" with LiveServer or something just like that and you are ready to go.
For seeing the edited Articles run the "news.html" and there you can access all the articles stored in your local storage so far.
