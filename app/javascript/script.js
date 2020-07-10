var data = [
  ['佐藤', 28, 1, 2, 3, 4],
  ['鈴木', 19, , , , , , , , , , , , , , , , , , ,],
  ['田中', 25]
];

var grid = document.getElementById('grid');
var hot = new Handsontable(grid, {
  data: data,
  rowHeaders: ['john', 'jake'],
  colHeaders: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00'],
  licenseKey: 'non-commercial-and-evaluation'
});



// var grid = $('.grid');
// var hot = new Handsontable(grid, {
//   data: [],
//   minSpareRows: 5
//   // minSpareCols: 24
//   // colHeaders: ['5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '0:00', '1:00', '2:00', '3:00', '4:00'],
//   licenseKey: 'non-commercial-and-evaluation'
// });