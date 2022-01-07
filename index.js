const JsonFind = require('json-find');
const jp = require('jsonpath');

function test() {
  const data = [
    {
      weather: {
        'ci ty': 'Mumbaidsds',
      },
      population: {
        count: 10000,
      },
    },
    {
      id: 1,
      first_name: 'Niel',
      last_name: 'McBryde',
      email: 'nmcbryde0@theguardian.com',
      gender: 'Polygender',
      age: 1,
    },
    {
      id: '2',
      source: 'RPT',
      table: 'EFG_SITES',
      records: '20 M',
      size: '0.30',
      columns: 5,
      null: 2,
      not_null: 28,
      host: '10.20.50',
      not_null_percent: 60,
      numeric: 5,
      date: 10,
      text: 12,
    },
  ];

  // check whether key Exists or not
  const doc = JsonFind(data);
  const keyExists = doc.checkKey('host');
  console.log(keyExists);

  // If key Exists
  if (keyExists) {
    // Get path's of key
    const paths = jp.paths(data, '$..host');
    console.log(paths);

    //changing value of all matching key's
    const nodes = jp.apply(data, '$..host', function (value) {
      return 'Changed hosturl';
    });

    console.log(data);
  }
}

test();
