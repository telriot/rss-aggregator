/**
 *
 * @param date a feeditem pubdate
 * @returns the ms parsed time
 */
const getMs = (date: Date | string): number => {
	const dateObj = new Date(date);
	return dateObj.getTime();
};

export default getMs;
