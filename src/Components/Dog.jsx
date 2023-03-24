import React from "react";

const Dog = (props) => {
    return (
        <div>
        <div>{props.name}</div>
        <div>
          {props.image && <img className="DogImage" src={props.image}></img>}  
        </div>
        
        </div>
    )
}

export default Dog;