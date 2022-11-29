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
    media_type: {
  
        tv: string;
        series: string;
        collection: string;
        people: string;
    }
    release_date: string;
}

export interface DetailedMovie extends Movies {
    genres: Genre[],
    tagline: string,
    vote_count: number,
}

interface Genre {
    id: number,
    name: string,
}
interface Video{
     /** This is the way to document with TYPESCRIPT*/
    id:string;
    key:string;
    official:boolean;
}