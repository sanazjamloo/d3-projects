var dataArray = [25,26,28,32,37,45,55,70,90,120,135,150,160,168,172,177,180];
var dataYears = ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016'];

var height = 200;
var width = 500;


var margin = {left:50, right:50, top:40, bottom:0};
//Adding scale
var y = d3.scaleLinear()
            .domain([0,180])
//The values in the range are inverted because this is for our Y axis.
            .range([height,0]);

//Declaring axis generator
var yAxis = d3.axisLeft(y).ticks(4);

console.log(y(0));
console.log(y(90));
console.log(y(180));


var area = d3.area()
                .x(function(d,i){ return i*20; })
                .y0(height)
                .y1(function(d){ return y(d); });
var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100");
var chartGroup = svg.append("g").attr("transform", "translate("+margin.left+", "+margin.top+")");
chartGroup.append("path").attr("d", area(dataArray));
chartGroup.append("g")
        .attr("class", "axis y")
        .call(yAxis);
