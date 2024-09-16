const page = require('./page')

test( 'properly adds two numbers' ,() => {
    expect(
        page.sum(1,2)
    ).toBe(3)
})
