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

export interface Single_Movie {
	adult: boolean;
	backdrop_path: string;
	genres: {
		id: number;
		name: string;
	};
	id: number;
	original_title: string;
	overview: string;
	poster_path: string;
	production_companies: {
		id: number;
		logo_path: string;
		name: string;
		origin_country: string;
	};
	release_date: string;
	spoken_languages: {
		english_name: string;
		name: string;
	};
	status: string;
	title: string;
	vote_average: number;
	vote_count: number;
}

export interface Cast {
	adult: boolean;
	cast_id: number;
	character: string;
	credit_id: string;
	gender: number;
	id: number;
	known_for_department: string;
	name: string;
	order: number;
	original_name: string;
	popularity: number;
	profile_path: srting;
}
