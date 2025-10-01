import Places from './Places.jsx';
import {useEffect, useState} from "react";
import ErrorPage from "./ErrorPage.jsx";
import {sortPlacesByDistance} from "../loc.js";
import {fetchAvailablePlaces} from "../http.js";

export default function AvailablePlaces({onSelectPlace}) {

    const [availablePlaces, setAvailablePlaces] = useState([]);
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchPlaces() {
            setIsLoading(true);
            try {
                const places = await fetchAvailablePlaces();
                navigator.geolocation.getCurrentPosition((position) => {
                    const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);
                    setAvailablePlaces(sortedPlaces);
                    setIsLoading(false);
                });
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        }

        fetchPlaces();
    }, []);

    if (error) {
        return <ErrorPage error={"Error Occured"} message={error.message}/>
    }

    return (<Places
        title="Available Places"
        places={availablePlaces}
        isLoading={isLoading}
        loadingText="Loading..."
        fallbackText="No places available."
        onSelectPlace={onSelectPlace}
    />);
}
