const page = require('./page')

test( 'properly substracts two numbers' ,() => {
    expect(
        page.subtract(2,1)
    ).toBe(1)
})
