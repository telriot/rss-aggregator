import parseDate from "./parseDate";

test('Returns invalid date message on invalid input', ()=> {
    expect(parseDate('dgadgaxwcdg')).toEqual({ date: 'Invalid Date', time: 'Invalid Date' })
})

test('Returns appropriate date info from valid input', ()=> {
    expect(parseDate('12 June 2021 :: 03:01:23')).toEqual({ date: '6/12/2021', time: '3:01:23 AM' })
    expect(parseDate('10 June 2024 :: 13:11:33')).toEqual({ date: '6/10/2024', time: '1:11:33 PM' })

})