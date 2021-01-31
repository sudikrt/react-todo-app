import {useState} from 'react';


const AddTask = ({onAdd}) => {
    const [text, setText] = useState ();
    const [day, setDay] = useState ();
    const [reminder, setReminder] = useState ();

    const doOnSubmit = (e) => {
        e.preventDefault ();
        if (!text) {
            alert ('Please add a task');
            return;
        }

        if (!day) {
            alert ('Please add date & time');
            return;
        }

        onAdd ({text, day, reminder});

        setText ('');
        setDay ('');
        setReminder (false);
    }
    return (
        <form className="add-form" onSubmit={doOnSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" value={text || ''} onChange={ (e) => {setText (e.target.value)}}></input>
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder="Add Day & time" value={day || ''} onChange={ (e) => {setDay (e.target.value)}}></input>
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder || false} value={reminder} onChange={(e) => setReminder (e.currentTarget.checked)}></input>
            </div>
            <input type="submit" className="btn btn-block" value="Save Task"/>
        </form>
    )
}

<form className="add-form">

</form>
export default AddTask
