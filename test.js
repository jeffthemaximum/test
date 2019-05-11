const {
  describe,
  expect,
  it
} = require('./index')

function adder(a, b) {
  return a + b
}

describe('adder', () => {
  it('adds two numbers', () => {
    const result = adder(1, 2)
    expect(result).toBe(3)
  })
})
