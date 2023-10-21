//loading the data.
const data = [10, 20, 30, 40, 50]

//creating a selection to join the data to.
//using selectAll method because we have multiple li items.
const el = d3.selectAll('li')
    .data(data)

console.log(el)
