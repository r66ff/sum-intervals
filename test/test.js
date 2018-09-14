var expect = require('chai').expect;
var should = require('chai').should();
var sumIntervals = require('../index.js');

it('Should return 7', function(){
      var arr = [ [1,4],
				  [7, 10],
				  [3, 5]
				];
      var result = sumIntervals(arr);
      result.should.equal(7);
});

it('Should return 9', function(){
      var arr = [ [1,2],
				  [6, 10],
				  [11, 15]
				];
      var result = sumIntervals(arr);
      result.should.equal(9);
});

it('Should return 19', function(){
      var arr = [ [1,5],
				  [10, 20],
				  [1, 6],
				  [16, 19],
				  [5, 11]
				];
      var result = sumIntervals(arr);
      result.should.equal(19);
});
