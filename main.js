//sources: 
//
//get csv data: https://plot.ly/javascript/ajax-call/
//
// Range slider and time selectors: https://plot.ly/javascript/range-slider/
var str1 = 'https://www.quandl.com/api/v3/datasets/';
var str2 = 'MCX/GMU2018';
var str3 ='.csv?start_date=2017-08-30&end_date=2018-09-05&api_key=yE-Rd5yHF_7JSB3VxTmz';
var url='https://www.quandl.com/api/v3/datasets/MCX/GMU2018.csv?start_date=2017-08-30&end_date=2018-09-05&api_key=yE-Rd5yHF_7JSB3VxTmz'



//var url='https://www.quandl.com/api/v3/datasets/MCX/GMU2018.csv?api_key=yE-Rd5yHF_7JSB3VxTmz';
var selectorOptions = {
    buttons: [ {
        step: 'year',
        stepmode: 'backward',
        count: 5,
        label: '5yr'
    }, {
        step: 'year',
        stepmode: 'backward',
        count: 2,
        label: '2yr'
    }, {
        step: 'year',
        stepmode: 'backward',
        count: 1,
        label: '1y'
    }, {
        step: 'all',
    }],
};


var layout = {
        
        xaxis: {
            rangeselector: selectorOptions,
            rangeslider: {}
        },
        yaxis: {
            fixedrange: true
        }
    };


function makeplot() {
  Plotly.d3.csv(url, function(data){ processData(data) } );
};

function processData(allRows) {

  console.log(allRows);
  var x = [], y = [];

  for (var i=0; i<allRows.length; i++) {
    row = allRows[i];
    x.push( row['Date'] );
    y.push( row['Open'] );
  }
  console.log( 'X',x, 'Y',y );
  makePlotly( x, y );
}

function makePlotly( x, y ){
  var plotDiv = document.getElementById("plot");
  var traces = [{
    x: x,
    y: y
  }];

  Plotly.newPlot('myDiv', traces,
   layout);
};
  makeplot();
  
  

function myFunction() {
	
  str2=document.getElementById("myText").value;
  url=str1.concat(str2,str3);
  makeplot();

}
  
  