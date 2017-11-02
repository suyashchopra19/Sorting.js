describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('Sorts elemets in the correct order', function(){
  	expect(bubbleSort([5,3,7,1,8,2,4,6])).toEqual ([1,2,3,4,5,6,7,8]);
  })
});
