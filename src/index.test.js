var expect = require('chai').expect;
var list = require ('./index');


describe('list',function(){
  it('should be array of strings',function(){
    expect(list.all).to.satisfy(isArrayOfStrings);

    function isArrayOfStrings(){
      return list.all.every(function(item){
        return typeof item === 'string';
      })
    }
  });
});
