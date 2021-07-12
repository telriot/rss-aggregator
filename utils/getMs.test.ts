import getMs from './getMs'

test('Returns a correct ms value for the submitted date', () => {
    const ms = getMs('Mon 11 July, 2021')
    const date = new Date(ms)
    expect(date.getDate()).toBe(11)
    expect(date.getMonth()).toBe(6)
    expect(date.getFullYear()).toBe(2021)
})
test('Returns zero on wrong input', ()=> {
    expect(getMs('Sfdgdg')).toBe(0)
})