export { Chart };

abstract class Chart {
  

  mDOM : any;
  mChart : SVGSVGElement = null;
  mWidth : number;
  mHeight: number;

  //==============================
  // all abstract should be here
  //===============================
  abstract drawChart(): void;



  constructor(domString: string, width: number, height: number) {
    let self = this;
    if (document.querySelector<HTMLElement>(domString) == null){
      self.errorHandler("Element Not Found");
      return;
    };

   self.mDOM =  document.querySelector<HTMLElement>(domString);

   self.mWidth = width;
   self.mHeight = height;


   this.render();

  }




  render(){
    //render svg chart
    this.mChart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.mChart.setAttribute('width', this.mWidth.toString());
    this.mChart.setAttribute('height', this.mHeight.toString());
    this.mChart.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    this.mDOM.appendChild(this.mChart);

    // let self = this;
    // self.mSVGDOM = document.querySelector(domString);
  }

  getChartCenterX():number{
    return this.mWidth/2;
  }

  getChartCenterY():number{
    return this.mHeight/2;
  }

  errorHandler(errorMessage : string){
    //for now just do console.log 
    //we will improve it later
    console.log(errorMessage);
  }
}


