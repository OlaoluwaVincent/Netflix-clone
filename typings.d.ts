export interface Movies {
	adult: boolean;
	backdrop_path: string;
	first_air_date: string;
	genre_ids: number[];
	id: number;
	media_type: string;
	original_language: string;
	original_name: string;
	original_title: string;
	overview: string;
	poster_path: string;
	rating: number;
	release_date: string;
	title: string;
	vote_average: number;
}

export interface DetailedMovie extends Movies {
	genres: Genre[];
	tagline: string;
	vote_count: number;
}

export interface MediaType {
	tv: string;
	series: string;
	collection: string;
	people: string;
}

interface Genre {
	id: number;
	name: string;
}

interface Video {
	/** This is the way to document with TYPESCRIPT*/
	id: string;
	key: string;
	official: boolean;
}
