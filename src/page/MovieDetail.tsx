import { useNavigate, useParams } from "react-router-dom";
import useSwr from "swr";
// Typings
import { DetailedMovie } from "../../typings";

type Props = {
	data: DetailedMovie;
	error: {
		status_code: number;
		status_message: string;
		success: boolean;
	};
};

const MovieDetail = () => {
	// ID comes from the url on the browser
	const { id } = useParams();
	const navigate = useNavigate();
	if (!id) {
		navigate(-1);
	}
	// Function for the SWR call
	const fetcher = (url: string) =>
		fetch(url).then((r) => {
			if (!r.ok) {
				throw new Error("Invalid URL");
			}
			return r.json();
		});

	const { data, error } = useSwr(
		`https://api.themoviedb.org/3/movie/${id}?api_key=f5ea505f0d7d67fe191c61ef531b8428&language=en-US`,
		fetcher,
		// { suspense: true }
	) as Props;

	return <div className="moviePage">MovieDetail</div>;
};

export default MovieDetail;
