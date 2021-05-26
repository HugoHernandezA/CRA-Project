import React from "react";

const Hobbies = ( { hobbies, showHobbies, count }) => {

    const rHobbies = [];
    for(let i = 0; i < hobbies.length;i++){
        rHobbies.push(hobbies[i].name);
    }
    const fixedHobbies = rHobbies.join(", ");

    return (
        <React.Fragment>
            <h2>My hobbies are: {fixedHobbies}<br />From which {count} are currently active.</h2>
        </React.Fragment>
    )
};

export default Hobbies;