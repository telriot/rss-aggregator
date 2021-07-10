import { FeedItem } from "types";
import getMs from "./getMs";

const getMostRecentFeedItem = (items:FeedItem[]) => {
    let mostRecent: FeedItem
    items.forEach(item => {
        if (!mostRecent || getMs(item.pubDate) > getMs(mostRecent.pubDate)){
            mostRecent = item
        }
    })
    return mostRecent
}

const compareFeedUpdates = (oldItems:FeedItem[], newItems:FeedItem[]) : FeedItem[]=> {

    const mostRecentFeed = getMostRecentFeedItem(oldItems)
    const updates = newItems.filter(item => getMs(item.pubDate) > getMs(mostRecentFeed.pubDate))
    // console.log(updates)
    // console.log(mostRecentFeed)
    return updates
}
export default compareFeedUpdates