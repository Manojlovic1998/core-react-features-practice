import {useRef} from 'react';

import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

function NewMeetupForm(props) {
    let titleInput = useRef();
    let imageInput = useRef();
    let addressInput = useRef();
    let descriptionInput = useRef();

    function formSubmitHandler(event){
        event.preventDefault();

        const formData = {
            "title": titleInput.current.value,
            "titleInput": imageInput.current.value,
            "image": addressInput.current.value,
            "description": descriptionInput.current.value,
        };
        props.onAddMeetup(formData);
    }


    return(
        <Card>
            <form action="" className={classes.form} onSubmit={formSubmitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id={"title"} ref={titleInput}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id={"image"} ref={imageInput}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" required id={"address"} ref={addressInput}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Meetup Description</label>
                    <textarea required rows={"5"} id={"description"} ref={descriptionInput} />
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;