import aggregateFeeds from './aggregateFeeds';
import buildFeed, {buildFeedItem} from '../tests/buildFeed'


test('Returns an empty array on empty input', () => {
	const res = aggregateFeeds([]);
	expect(res).toEqual([]);
});
test('Returns an array of the length of the contents of the items contained in the submitted feeds', () => {
	const res = aggregateFeeds([buildFeed(0, 4), buildFeed(1, 6)]);
	expect(res).toHaveLength(10);
});
test('Feed items content entries are correct', () => {
	const res =  aggregateFeeds([buildFeed(0, 4), buildFeed(1, 6)]);
    const testItem = res[0]
    expect(testItem.feed).toEqual('Test feed')
    expect(testItem.feedIndex).toEqual(0)
    expect(testItem.pubDate).toEqual(buildFeedItem(0).pubDate)
});