import { useState, createContext } from "react";
import { Movies } from "../../typings";

type Props = {
	searchContext: Movies[];
	/** this is used for direct change, use '(( )=>void)' if you will be mutating*/
	setSearchContext: React.Dispatch<React.SetStateAction<Movies[]>>;
};

const SeachedContent = createContext<Props | null>(null);

const SearchContextComponent = ({ children }: any) => {
	const [searchContext, setSearchContext] = useState<Movies[]>([]);

	return (
		<SeachedContent.Provider value={{ searchContext, setSearchContext }}>
			{children}
		</SeachedContent.Provider>
	);
};

export { SeachedContent, SearchContextComponent };
