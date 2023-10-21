//loading the data.
const data = [10, 20, 30, 40, 50]

//creating a selection to join the data to.
//using selectAll method because we have multiple li items.
const el = d3.select('ul')
    .selectAll('li')
    .data(data)
    .join (
        enter => {
            return enter.append('li')
                .style('color', 'purple')
        },
        update => update.style('color', 'green'),
        exit => exit.remove()

    )
    // .text(function(d) {
    //     return d
    // })
    .text(d => d) //using es6 syntax to display the data associate with array items. 
//join method generates new elements, it doesnt add attributes or insert content into the existing elements.
console.log(el)

//enter and exist selections are the selections that we use whenever the ratio of the data and array list is not 1:1, meaning that we will need to either add data to the array or remove data from it using join() method. 
//in short, the join method, intelligently handles both situations. 
//to modify the join method's behavior, we use enter, update, and exist selections as functions inside the join method.