/**
 *
 * @param date a feeditem pubdate
 * @returns the ms parsed time
 */
const getMs = (date: Date | string): number => {
	const dateObj = new Date(date);
	const ms = dateObj.getTime();
	if(isNaN(ms)){
		return 0
	}
	return ms
};

export default getMs;
