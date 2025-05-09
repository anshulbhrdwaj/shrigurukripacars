import { useDispatch } from 'react-redux';
import { Input } from './ui/input';
import { setSearch } from '@/redux/slices/filterSlice';
import { Search } from 'lucide-react';
import SortBy from './SortBy';

const SearchAndSortBar = () => {
	const dispatch = useDispatch();
	return (
		<div className="w-[70%] md:w-full h-16 rounded-3xl max-sm:absolute max-sm:top-4 max-sm:right-4 flex justify-between items-center gap-8">
			<div className="w-full md:w-6/10 lg:w-5/10 xl:w-3/10 h-full relative">
				<Input
					placeholder="Search"
					className="h-full w-full pl-12 pr-4 bg-foreground placeholder:text-muted-background text-background rounded-2xl"
					type="search"
					onChange={(e) => dispatch(setSearch(e.target.value))}
				/>
				<Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted w-5 h-5" />
			</div>

			<SortBy />
		</div>
	);
};


export default SearchAndSortBar