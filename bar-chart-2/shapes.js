var dataArray = [5,11,18];

var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%");

//Adding bars
svg.selectAll("rect")
      .data(dataArray)
      .enter().append("rect")
                .attr("height",function(d,i){ return d*15;
                 })
                .attr("width","50")
                .attr("fill","pink")
                .attr("x",function(d,i){ return 60*i; })
                .attr("y",function(d,i){ return 300-(d*15);
                 });

//Adding a circle
svg.selectAll("circle")
      .data(dataArray)
      .enter().append("circle")
                .attr("cx",function(d,i){ return 300+(i*20) ; })
                .attr("cy","100")
                .attr("r","5");
