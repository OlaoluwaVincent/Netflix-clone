export interface Movies {
    title: string;
    backdrop_path: string;
    id: number;
    media_type: string;
    poster_path: string;
    original_language: string;
    original_title: string;
    overview: string;
    vote_average: number;
    adult: boolean;
    genre_ids: number[];
    overview: string;
    rating: number;
}

export interface DetailedMovie {
    adult: boolean,
    backdrop_path: string,
    genres: Genre[],
    id: number,
    original_title: string,
    overview: string,
    release_date: string,
    tagline: string,
    title: string,
    vote_average: number,
    vote_count: number,
}

interface Genre {
    id: number,
    name: string,
}