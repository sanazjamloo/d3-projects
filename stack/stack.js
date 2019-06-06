//loading the data file into stack.js file
d3.xml("data2.xml").get(function(error, xml){

  xml = [].map.call(xml.querySelectorAll("dat"), function(d){
    return {
      date: d.getAttribute("id"),
      top: +d.querySelector("top").textContent,
      middle: +d.querySelector("middle").textContent,
      bottom: +d.querySelector("bottom").textContent,

    };
  })

});
