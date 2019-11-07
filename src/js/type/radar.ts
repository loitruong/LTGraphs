export { RadarChart };

class RadarChart {
  
  svg : any;
  mColors : Array<String>;
  mMaxPoint: Number;
  mData: Array<any>;
  mChartWidth: Number;
  mChartHeight: Number;

  constructor(){
    let self = this;
    //Data
    let skills = Array.apply(null, Array(Math.floor(Math.random() * 12) + 3)).map(
      (x:any, i:any):String => {
      return "Skill " + (i + 1);
    });

    self.mColors = ["rgba(110,211,207,.5)", "rgba(144,104,190,.5)", "rgba(230,39,57,.5)", "rgba(225,232,240,.5)"];
    self.mMaxPoint = 100;

    self.mData = self.randomData(skills);

    console.log(self.mData);

    //init svg element
    self.mChartWidth = 200;
    self.mChartHeight = 150;
    //self.svg = d3.select("#SkillChart").append("svg").attr("viewBox", "0 0 " + mChartWidth + " " + mChartHeight);
    // self.CenterX = ChartWidth / 2;
    // self.CenterY = (ChartHeight - 25) / 2;
    // self.PolygonSides = skills.length; //polygonsides will be base on number of skills
    // self.PolygonR = 10; //Radius of each polygon
    // self.NumberOfPolygons = 5;
    // self.LineStroke = 0.1;
    //this.draw();
  }

  // draw(): void {  
  //   //Create Polygons
  //   let GraphG:any = this.svg.append("g");
  //   for (let i = 1; i <= NumberOfPolygons; i++) {
  //     GraphG.append("polygon")
  //       .attr("points", function() {
  //         var pointsValue = "";
  //         for (let j = 1; j <= PolygonSides; j++) {
  //           var x = CenterX + ((PolygonR * i) * (Math.sin((180 - 360 / PolygonSides * j) * Math.PI / 180)));
  //           var y = CenterY + ((PolygonR * i) * (Math.cos((180 - 360 / PolygonSides * j) * Math.PI / 180)));
  //           pointsValue += x + "," + y + " ";
  //         }
  //         return pointsValue;
  //       })
  //       .attr("stroke", "black")
  //       .attr("stroke-width", LineStroke)
  //       .attr("fill", "transparent");

  //   }


  //   //create Lines and text 
  //   GraphG.selectAll("g").data(skills).enter().each(function(d, i) {
  //     var degree = (360 / PolygonSides * i);
  //     d3.select(this).append("line")
  //       .attr("x1", CenterX)
  //       .attr("y1", CenterY)
  //       .attr("x2", function() {
  //         return CenterX + ((PolygonR * NumberOfPolygons) * (Math.sin((180 - degree) * Math.PI / 180)));
  //       })
  //       .attr("y2", function() {
  //         return CenterY + ((PolygonR * NumberOfPolygons) * (Math.cos((180 - degree) * Math.PI / 180)));
  //       })
  //       .attr("stroke", "black")
  //       .attr("stroke-width", LineStroke);



  //     //Text offset position Y
  //     var TextPosY = d3.scaleLinear()
  //       .domain([0, 180, 360])
  //       .range([-3, 10, -3]);
  //     //Text offset position X
  //     var TextPosX = d3.scaleLinear()
  //       .domain([0, 90, 180, 270, 360])
  //       .range([0, 3, 0, -3, 0]);

  //     d3.select(this).append("text")
  //       .attr("x", function() {
  //         return CenterX + ((PolygonR * NumberOfPolygons) * (Math.sin((180 - degree) * Math.PI / 180))) + TextPosX(degree);
  //       })
  //       .attr("y", function() {
  //         return CenterY + ((PolygonR * NumberOfPolygons) * (Math.cos((180 - degree) * Math.PI / 180))) + TextPosY(degree);
  //       })
  //       .text(function() {
  //         return skills[i];
  //       })
  //       .attr("text-anchor", function() {
  //         if (degree > 0 && degree < 180) {
  //           return "start";
  //         } else if (degree > 180 && degree < 360) {
  //           return "end";
  //         } else {
  //           return "middle";
  //         }
  //       })
  //       .attr("font-size", 10);


  //   });


  //   //generate people Data
  //   var PeopleG = svg.append("g").attr("class", "GData");


  //   PeopleG.selectAll("g").data(PersonData).enter()
  //     .each(function(d, i) {
  //       var AnimationTime = 1300;
  //       var CurrentG = d3.select(this);
  //       var PeoplePointScale = d3.scaleLinear()
  //         .domain([0, 100])
  //         .range([0, 5]);
  //       setTimeout(function() {
  //         CurrentG.append("polygon")
  //           .attr("points", function() {
  //             var pointsValue = "";
  //             var degree = (360 / PolygonSides * i);
  //             for (j = 0; j < PolygonSides; j++) {
  //               var x = CenterX + ((PolygonR * 5) * (Math.sin((180 - 360 / PolygonSides * j) * Math.PI / 180)));
  //               var y = CenterY + ((PolygonR * 5) * (Math.cos((180 - 360 / PolygonSides * j) * Math.PI / 180)));
  //               pointsValue += x + "," + y + " ";
  //             }
  //             return pointsValue;
  //           })
  //           .attr("stroke", colors[i % colors.length])
  //           .attr("stroke-width", LineStroke)
  //           .attr("fill", colors[i % colors.length])
  //           .transition()
  //           .duration(AnimationTime)
  //           .ease(d3.easeLinear)
  //           .attr("points", function() {
  //             var pointsValue = "";
  //             for (j = 0; j < PolygonSides; j++) {
  //               var x = CenterX + ((PolygonR * PeoplePointScale(d.data[j])) * (Math.sin((180 - 360 / PolygonSides * j) * Math.PI / 180)));
  //               var y = CenterY + ((PolygonR * PeoplePointScale(d.data[j])) * (Math.cos((180 - 360 / PolygonSides * j) * Math.PI / 180)));
  //               pointsValue += x + "," + y + " ";
  //             }
  //             return pointsValue;
  //           });
  //       }, AnimationTime * i);

  //     });

  //   //keys
  //   var KeysG = svg.append("svg").attr("class", "Gkeys");
  //   var OffsetWidth = 0;
  //   KeysG.selectAll("g").data(PersonData)
  //     .enter().append("svg")
  //     .each(function(d, i) {
  //       d3.select(this).append("text")
  //         .attr("x", 11)
  //         .attr("y", ChartHeight - 8)
  //         .attr("font-size", 10)
  //         .text(d.key);
  //       d3.select(this).append("rect")
  //         .attr("width", 8)
  //         .attr("height", 8)
  //         .attr("x", 0)
  //         .attr("y", ChartHeight - 16)
  //         .attr("fill", colors[i]);
  //     })
  //     .attr("x", function(d, i) {
  //       OffsetWidth += i == 0 ? 0 : this.getBBox().width + 10;
  //       return OffsetWidth;
  //     })
  //     .on("click", function(d, i) {
  //       if (d3.select(".GData polygon:nth-child(" + (i + 1) + ")").style("display") == "none") {
  //         d3.select(".GData polygon:nth-child(" + (i + 1) + ")").style("display", "block");
  //       } else {
  //         d3.select(".GData polygon:nth-child(" + (i + 1) + ")").style("display", "none");
  //       }
  //     });
  //   d3.select(".Gkeys").attr("x", function() {
  //     return CenterX - this.getBBox().width / 2;
  //   });
  // }

  randomData(skills: any): any {
    var randomData = [];
    for (let i = 1; i <= Math.floor(Math.random() * 2) + 2; i++) {
      randomData.push({
        key: "Person " + i,
        data: (():Array<Number>=> {
          let randomScores:Array<Number> = [];
          for (let j = 0; j < skills.length; j++) {
            randomScores.push(Math.floor(Math.random() * 99) + 1);
          }
          return randomScores;
        })()
      });
    }



    return randomData;
  }
}


// d3.select(".GenerateChartDiv button").on("click", function() {
//   d3.select("#SkillChart").html("");
//   SkillChart();
// });



