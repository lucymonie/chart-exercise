var boroughs = ["Bexley", "Bromley", "Havering", "Bedford Borough", "Milton Keynes", "Swindon", "Essex", "Southend", "Thurrock", "Kent", "Medway"];
var durationOfCare = [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 249].map(function (duration) { return duration.toString() });
var boroughCodes = Object.keys(chart2.result);
var filteredData = filterDurationData();
var dataWithKeys = addKeysToDurationData(filteredData);
var completeDataSet = addBoroughsToData(dataWithKeys);

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable(completeDataSet);

    var options = {
      chart: {
        legend:'left',
        title: 'Chart 2',
        subtitle: '14712 Periods of Care are included in this analysis',
      },
      width: 900,
      height: 600,
      vAxis: { title: 'Periods of Care count' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
  }

  function filterDurationData () {
    return durationOfCare.reduce(function (filteredData, duration) {
    	filteredData.push(boroughCodes.map(function (code) {
    		return chart2.result[code].values[duration];
    	}));
    	return filteredData;
    }, []);
  }

  function addKeysToDurationData (filteredData) {
    return filteredData.reduce(function (newfilteredData, dataset, i) {
      dataset.unshift(durationOfCare[i]);
      newfilteredData.push(dataset);
      return newfilteredData;
    }, []);
  }

  function addBoroughsToData (filteredData) {
  	var newfilteredData = Object.assign([], filteredData);
    var newBoroughs = Object.assign([], boroughs);
    newBoroughs.unshift('Boroughs');
  	newfilteredData.unshift(newBoroughs);
  	return newfilteredData;
  }
