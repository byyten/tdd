//const capitalise = require('./index')
const {reverse, capitalise, calc, caesar, analyzeArray }= require('./index')

it('capitalise', () => {
    expect(capitalise('fsdsf')).toBe('Fsdsf')
})

it('reverse_success', () => {
    expect(reverse('string')).toBe('gnirts')
})

it('calc add', () => {
    c = calc()
    expect(c.add(3,5)).toBe(8)
})

it('calc add', () => {
    c = calc()
    expect(c.subtract(3,5)).toBe(-2)
})

it('calc multiply', () => {
    c = calc()
    expect(c.multiply(3,5)).toBe(15)
})

it('calc divide', () => {
    c = calc()
    expect(c.divide(3,5)).toBe(0.6)
})

it('caesar', () => {
    enc_str = caesar('attackatdawn', 25)
    expect(enc_str).toBe('ZSSZBJZSCZVM')
})


it('caesar', () => {
    stats = analyzeArray([6,4,5,4,4,4,4,4])
    expect(stats.average).toBe(4.375)
    expect(stats.min).toBe(4)
    expect(stats.max).toBe(5)
    expect(stats.length).toBe(9)
})
