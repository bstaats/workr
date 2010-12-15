Workr.main = function main() {

  // append #fixtures to url in order to use them
  if (window.location.hash.toString().match('fixtures')) {
    CoreWorkr.set('remoteDataSource', false);
  }

  // Create the main store with the appropriate data source(s).
  if (CoreWorkr.remoteDataSource === YES) {
    console.log('No remote datasource defined.. yet. Append #fixtures to the URL');
  } else {
    this.set('store', SC.Store.create().from(SC.Record.fixtures));
    console.log('Initialized main store with fixtures data source.');
  }


  Workr.stateChart.initStatechart();

} ;

function main() { Workr.main(); }
