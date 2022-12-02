import { DetailedMovie, Movies, Video } from '../typings'

// MOVIES Functions

/** This returns a DetailedMovie Object */
export const getFullDetailOfMovie: (props:number) => Promise<DetailedMovie | undefined>  = async (id) => {
    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=f5ea505f0d7d67fe191c61ef531b8428&language=en-US`
        );
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

/**Returns a Promise of a Movie Object */
export const getLatestMovie: () => Promise<Movies | undefined> = async () => {
    try {
        const res = await fetch(
            "https://api.themoviedb.org/3/movie/latest?api_key=f5ea505f0d7d67fe191c61ef531b8428&language=en-US"
        );
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

/**Returns a Promise[ ] of Popular Movies  */
export const getPopularMovies:()=>Promise<Movies[] | undefined> = async () => {
    try {
        const res = await fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=f5ea505f0d7d67fe191c61ef531b8428&language=en-US&page=1"
        );
        const data = await res.json();
        return data.results.slice(0, 10);
    } catch (error) {
        console.log(error);
    }
};

/**Returns a Promise[ ] of Movies Playing currently in theaters  */
export const getNowPlayingMovies:()=>Promise<Movies[] | undefined> = async () => {
    try {
        const res = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing?api_key=f5ea505f0d7d67fe191c61ef531b8428&language=en-US&page=1"
        );
        const data = await res.json();
        return data.results.slice(0, 10);
    } catch (error) {
        console.log(error);
    }
};

/**Returns a Promise[ ] of Most Rated Movies */
export const getTopRatedMovie: () => Promise<Movies[] | undefined> = async () => {
    try {
        const res = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated?api_key=f5ea505f0d7d67fe191c61ef531b8428&language=en-US&page=1&"
        );
        const data = await res.json();
        return  data.results.slice(0, 10);;
    } catch (error) {
        console.log(error);
    }
};

/**Returns a Promise[ ] of Upcoming Movies */
export const getUpcomingMovies: () => Promise<Movies[] | undefined> = async () => {
    // Region can be specified
    try {
        const res = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming?api_key=f5ea505f0d7d67fe191c61ef531b8428&language=en-US&page=1"
        );
        const data = await res.json();
        return data.results.slice(0, 10);
    } catch (error) {
        console.log(error);
    }
};

/**Returns a Promise[ ] of Trending Movies */
export const getTrendingMovies: () => Promise<Movies[] | undefined> = async () => {
    // Region can be specified
    try {
        const res = await fetch("https://api.themoviedb.org/3/trending/all/week?api_key=f5ea505f0d7d67fe191c61ef531b8428");
        const data = await res.json();
        return data.results.slice(0, 10);
    } catch (error) {
        console.log(error);
    }
};


// SEARCH

/**Returns a Promise[ ] of Trending Movies */
export const searchForMovies: (query: string) => Promise<Movies[] | undefined> = async (query) => {
    // Region can be specified
    try {
        const res = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=f5ea505f0d7d67fe191c61ef531b8428&language=en-US&query=${query}&page=1`
        );
        const data = await res.json();
        return data.results;
    } catch (error) {
        console.log(error);
    }
};


// VIDEO

/**Returns a Video(Promise) base of the movieId and retuns a Video object  */
export const MovieVideo:(movieId: number) => Promise<Video | undefined> = async (movieId:number) => {
    // Region can be specified
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=f5ea505f0d7d67fe191c61ef531b8428&language=en-US` );
        const data = await res.json();
        return data.results![1];
    } catch (error) {
        console.log(error);
    }
};




// SERIES

export const getLatestSerie:() => Promise<Movies | undefined>  = async () => {
    // Region can be specified
    try {
        const res = await fetch(
            "https://api.themoviedb.org/3/tv/latest?api_key=f5ea505f0d7d67fe191c61ef531b8428&language=en-US"
        );
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};


// f5ea505f0d7d67fe191c61ef531b8428