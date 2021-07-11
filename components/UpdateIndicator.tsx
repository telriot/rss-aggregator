//  ======================================== IMPORTS
import clsx from 'clsx'
import React, {FC} from 'react'
import { FeedItem } from 'types'
import Card from './common/Card'

//  ======================================== COMPONENT

interface UpdateIndicatorProps {
    updateItems:FeedItem[]
    onUpdate:() => void
}
const UpdateIndicator : FC<UpdateIndicatorProps> = ({updateItems, onUpdate}) => {
    //  ======================================== HOOKS
    //  ======================================== STATE
    //  ======================================== HANDLERS
    //  ======================================== EFFECTS
    //  ======================================== JSX
    return (
        <Card className={clsx('flex items-center justify-center p-3 bg-blue-400 text-white cursor-pointer', updateItems.length?'visible':'hidden')} onClick={onUpdate}>
            {updateItems.length} new {updateItems.length>1?'stories':'story'} available!
        </Card>
    )
}
 
//  ======================================== EXPORTS
export default UpdateIndicator
//  ========================================