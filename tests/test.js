test("each_slice", 12, function() {
    var count = 0;
    $('#test li').each_slice(2, function() {
        count++;
        ok(this.jquery, '`this` should be a jQuery collection');
        equals(this.length, 2, 'each iteration should have had a colelction with 2 elements');
        this.addClass('done');
    });
    
    equals(count, 5, 'should have had 5 iterations');
    equals($('#test li.done').length, 10, 'should have iterated over all elements');
});

test("each_slice", 12, function() {
    var results = [];
    $('#test_2 li').each_slice(2, function() {
        ok(this.jquery, '`this` should be a jQuery collection');
        results.push(this);
        this.addClass('done');
    });
    equals(results.length, 5, 'should have had 5 iterations');
    equals(results[0].length, 2, '1st iteration should have had a collection with 2 elements');
    equals(results[1].length, 2, '2nd iteration should have had a collection with 2 elements');
    equals(results[2].length, 2, '3rd iteration should have had a collection with 2 elements');
    equals(results[3].length, 2, '4th iteration should have had a colelction with 2 elements');
    equals(results[4].length, 1, '5th iteration should have had a colelction with 1 elements');
    equals($('#test_2 li.done').length, 9, 'should have iterated over all elements');
});