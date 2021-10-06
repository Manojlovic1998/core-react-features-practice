import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage(){
    function addMeetupForm (meetupData){
        console.log(meetupData);
    }

    return (
        <section>
            <h1>New Meetups Page</h1>);
            <NewMeetupForm onAddMeetup={addMeetupForm}/>
        </section>)
}

export default NewMeetupPage;