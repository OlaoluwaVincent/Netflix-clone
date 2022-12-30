import { useState, createContext } from 'react';
import { Movies } from '../../typings';
import { useEffect } from 'react';

type Props = {
	searchContext: Movies[];
	localStore: Movies[];
	loggedInUser: string | undefined;
	/** this is used for direct change, use '(( )=>void)' if you will be mutating*/
	setSearchContext: React.Dispatch<React.SetStateAction<Movies[]>>;
	setLocalStore: React.Dispatch<React.SetStateAction<Movies[]>>;
	setLoggedInUser: (value: React.SetStateAction<string | undefined>) => void;
	saveToFavorite: (data?: Movies) => void;
};

const SeachedContent = createContext<Props | null>(null);

const SearchContextComponent = ({ children }: any) => {
	const [searchContext, setSearchContext] = useState<Movies[]>([]);
	const [localStore, setLocalStore] = useState<Movies[]>([]);
	const [loggedInUser, setLoggedInUser] = useState<string | undefined>();

	const uniqueData = (arr: Movies[]) => {
		const ids = arr.map((o) => o.id);
		const filtered = arr.filter(
			({ id }, index) => !ids.includes(id, index + 1)
		);
		return filtered;
	};

	/** Adding and Fetching Data to or from the Localstorage */
	const saveToFavorite = (data?: Movies) => {
		// get the data from the sysem LocalStorage
		const existingEntries: Movies[] = JSON.parse(
			localStorage.getItem('List') || '[]'
		);

		//If the data is available in the store, save it to the localstore state
		if (!data) {
			setLocalStore(uniqueData(existingEntries).reverse());
		} else {
			existingEntries.push(data);
			const updatedData = uniqueData(existingEntries);
			localStorage.setItem('List', JSON.stringify(updatedData));
		}
	};

	return (
		<SeachedContent.Provider
			value={{
				searchContext,
				localStore,
				loggedInUser,
				setLoggedInUser,
				setSearchContext,
				setLocalStore,
				saveToFavorite,
			}}
		>
			{children}
		</SeachedContent.Provider>
	);
};

export { SeachedContent, SearchContextComponent };
