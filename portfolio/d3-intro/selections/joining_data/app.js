//loading the data.
const data = [10, 20, 30, 40, 50]

//creating a selection to join the data to.
//using selectAll method because we have multiple li items.
const el = d3.select('ul')
    .selectAll('li')
    .data(data)
    .join('li')
    .text('Hello!')
//join method generates new elements, it doesnt add attributes or insert content into the existing elements.
console.log(el)
