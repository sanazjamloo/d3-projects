 /* Both of these d3 methods take a CSS selector as parameter and return
 the selection of the DOM element. */

// Selects the first element matching the parameter.
d3.select();

// returns ALL of the elements matching the parameter.
d3.selectAll();

d3.select('h1').style('color', 'red')
.attr('class', 'heading')
.text('Updated h1 tag');

d3.select('body').append('p').text('First Paragraph');
d3.select('body').append('p').text('Second Paragraph');
d3.select('body').append('p').text('Third Paragraph');

d3.selectAll('p').style('color', 'blue');
