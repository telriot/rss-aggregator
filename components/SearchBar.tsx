//  ======================================== IMPORTS
import React, {FC} from 'react'
import clsx from 'clsx';

//  ======================================== COMPONENT
export interface SearchBarProps {
	className?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
	id?: string;
}

const SearchBar: FC<SearchBarProps> = ({
	className,
	onChange,
	value,
	id = 'search-bar'
}) => {
    //  ======================================== HOOKS
    //  ======================================== STATE
    //  ======================================== HANDLERS
    //  ======================================== EFFECTS
    //  ======================================== JSX
    return (
		<div className={clsx(className)}>
			<input
				aria-label={id}
				className=' w-full py-2 px-2 rounded '
				type='text'
				onChange={onChange}
				value={value}
				placeholder='Search articles...'
			/>
		</div>
    )
}
 
//  ======================================== EXPORTS
export default SearchBar
//  ========================================