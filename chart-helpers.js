var categories = Object.keys(chart1.result);
var placementDays = chart1.result.C1['buckets'];
var allData = getAllData();
var dataWithKeys = addKeysToData(allData);
console.log(dataWithKeys);

function getAllData () {
  return placementDays.map(function (numDays) {
    return getDataByPlacements(numDays);
  });
}

function getDataByPlacements (numDays) {
  var placementsData = [];
  categories.forEach(function (category) {
    placementsData.push(chart1.result[category].values[numDays]);
  });
  return placementsData;
}

function addKeysToData (allData) {
  var count = 0;
  return allData.map(function(dataPoint) {
    dataPoint.unshift(count);
    count++;
    return dataPoint;
  });
}

