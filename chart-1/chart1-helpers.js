var categories = Object.keys(chart1.result);
var placementDays = chart1.result.C1['buckets'];
var allData = getAllData();
var dataWithKeys = addKeysToData(allData);
var withCategoriesAdded = addCategories(dataWithKeys);
google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);


function drawChart() {
  var data = google.visualization.arrayToDataTable(withCategoriesAdded);

  var options = {
    chart: {
      legend:'left',
      title: 'Chart 1',
      subtitle: '14712 Periods of Care are included in this analysis',
    },
    width: 900,
    height: 600,
    vAxis: { title: 'Periods of Care count' }
  };

  var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}

function getAllData () {
  return placementDays.map(function (number) {
    return getDataByPlacements(number);
  });
}

function getDataByPlacements (number) {
	var placementsData = [];
  categories.forEach(function (category) {
    placementsData.push(chart1.result[category].values[number]);
  });
  return placementsData;
}

function addKeysToData (allData) {
	var count = 0;
	return allData.map(function(dataPoint) {
		dataPoint.unshift(count.toString());
		count++;
		return dataPoint;
	});
}

function addCategories (data) {
	data.unshift(categories);
  data[0].unshift('Number of placements (1 placement bins)');
	return data;
}
