import React from "react";

const User = ( {name, description, age, avatar }) => {
    return (
        <React.Fragment>
            <h3>Hello my name is {name}, I am currently a {description} of {age} years old. <br />Look at this nice picture I found online. <br />{avatar}</h3>
        </React.Fragment>
    )
};

export default User;