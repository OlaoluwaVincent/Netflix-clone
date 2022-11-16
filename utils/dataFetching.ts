import { DetailedMovie, Movies } from '../typings'

// MOVIES

export const getFullDetailOfMovie = async (id:number) => {
    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=f5ea505f0d7d67fe191c61ef531b8428&language=en-US`
        );
        const data = await res.json();
        const result: DetailedMovie = data;
        return result;
    } catch (error) {
        console.log(error);
    }
};
export const getLatestMovie = async () => {
    try {
        const res = await fetch(
            "https://api.themoviedb.org/3/movie/latest?api_key=f5ea505f0d7d67fe191c61ef531b8428&language=en-US"
        );
        const data = await res.json();
        const result: Movies = data;
        return result;
    } catch (error) {
        console.log(error);
    }
};


export const getPopularMovies = async () => {
    try {
        const res = await fetch(
            "https://api.themoviedb.org/3/movie/popular?api_key=f5ea505f0d7d67fe191c61ef531b8428&language=en-US&page=1"
        );
        const data = await res.json();
        const result: Movies[] = data.results.slice(0, 10);
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const getNowPlayingMovies = async () => {
    try {
        const res = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing?api_key=f5ea505f0d7d67fe191c61ef531b8428&language=en-US&page=1"
        );
        const data = await res.json();
        const result: Movies[] = data.results.slice(0, 10);
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const getTopRatedMovies = async () => {
    try {
        const res = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated?api_key=f5ea505f0d7d67fe191c61ef531b8428&language=en-US&page=1&"
        );
        const data = await res.json();
        const result: Movies[] = data.results.slice(0, 10);
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const getUpcomingMovies = async () => {
    // Region can be specified
    try {
        const res = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming?api_key=f5ea505f0d7d67fe191c61ef531b8428&language=en-US&page=1"
        );
        const data = await res.json();
        const result: Movies[] = data.results.slice(0, 10);
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const getTrendingMovies = async () => {
    // Region can be specified
    try {
        const res = await fetch("https://api.themoviedb.org/3/trending/all/week?api_key=f5ea505f0d7d67fe191c61ef531b8428");
        const data = await res.json();
        const result: Movies[] = data.results.slice(0, 10);
        return result;
    } catch (error) {
        console.log(error);
    }
};





// SERIES

export const getLatestSerie = async () => {
    // Region can be specified
    try {
        const res = await fetch(
            "https://api.themoviedb.org/3/tv/latest?api_key=f5ea505f0d7d67fe191c61ef531b8428&language=en-US"
        );
        const data = await res.json();
        const result: Movies = data;
        return result;
    } catch (error) {
        console.log(error);
    }
};

// f5ea505f0d7d67fe191c61ef531b8428