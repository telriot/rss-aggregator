//  ======================================== IMPORTS
import React, {FC} from 'react'
import Card from 'components/common/Card'
import { FEEDS } from 'public/feeds'
import FeedSelector from './FeedSelector'
//  ======================================== COMPONENT
const FilterSection :FC = () => {
    //  ======================================== HOOKS
    //  ======================================== STATE
    //  ======================================== HANDLERS
    //  ======================================== EFFECTS
    //  ======================================== JSX
    return (
        <Card>
            <div className='flex flex-col py-2 px-1'>
                {FEEDS.map(feedData=><FeedSelector key={feedData.id} feedData={feedData}/>)}
            </div>
        </Card>
    )
}
 
//  ======================================== EXPORTS
export default FilterSection
//  ========================================