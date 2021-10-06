import NewMeetupForm from "../components/meetups/NewMeetupForm";
import Firebase_url from "../stashed_urls";


function NewMeetupPage() {
    function addMeetupForm(meetupData) {
        fetch(
            Firebase_url + '/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    "Content-type": "application/json",
                }
            }
        );
    }

    return (
        <section>
            <h1>New Meetups Page</h1>);
            <NewMeetupForm onAddMeetup={addMeetupForm}/>
        </section>)
}

export default NewMeetupPage;