import {useEffect, useState} from "react";
import MeetupList from "../components/meetups/MeetupList";
import stashed_urls from "../stashed_urls";

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [fetchedData, setFetchedData] = useState();

    useEffect(() => {
        // Fetch the data from Firebase
        fetch(stashed_urls + '/meetups.json').then((response) => {
            return response.json();
        }).then((res) => {
            const meetups = [];

            for (const key in res) {
                const meetup = {
                    id: key,
                    ...res[key]
                };

                meetups.push(meetup);
            }

            setFetchedData(meetups);
            setIsLoading(false);
        });
    }, []);


    // Loading text
    if (isLoading) {
        return (<section>
            <p>Loading...</p>
        </section>);
    }

    // Once Data is loaded
    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={fetchedData}/>
        </section>
    );
}

export default AllMeetupsPage;