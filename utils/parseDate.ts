const parseDate = (date:string | Date) => {
    const newDate = new Date(date)    
    return {date: newDate.toLocaleDateString(), time: newDate.toLocaleTimeString()}
}
export default parseDate