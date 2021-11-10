import React from 'react'
import '../style.css'
export default function Popup({ setPopUp }) {
    return (
        <div>
            <div className="PopUp">
                {/* x close window */}
                <button className="popup-x button-popup" onClick={() => setPopUp(false)} >X</button>
                <div className="pu-content-container">
                    <form className="form">
                        <h1>Edit</h1>
                        <div >
                            <input type="text" placeholder="title" autoFocus={true} />
                        </div>
                        <div >
                            <textarea
                                placeholder="tell your story.."
                                type="text"

                            ></textarea>
                        </div>
                        <button className="button-popup" type="submit">Public</button>
                    </form>
                </div>
                {/* button controls */}
                <div className="pu-button-container">
                    <button className="button-popup" onClick={() => setPopUp(false)}> Edit </button>
                    <button className="button-popup" onClick={() => setPopUp(false)}> Cancel </button>
                </div>
            </div>
        </div>
    )
}
