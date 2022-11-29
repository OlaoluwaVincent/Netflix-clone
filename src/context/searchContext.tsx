import { useState, createContext } from "react";
import { Movies } from "../../typings";

type Props = {
	search: Movies[];
	/** this is used for direct change, use '(( )=>void)' if you will be mutating*/
	setSearch: React.Dispatch<React.SetStateAction<Movies[]>>;
};

const SeachedContent = createContext<Props | null>(null);

const SearchContext = ({ children }: any) => {
	const [search, setSearch] = useState<Movies[]>([]);

	return (
		<SeachedContent.Provider value={{ search, setSearch }}>
			{children}
		</SeachedContent.Provider>
	);
};

export { SeachedContent, SearchContext };
