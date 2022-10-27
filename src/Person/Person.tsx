import React from "react";
interface PersonProps extends React.PropsWithChildren {
  name: string;
  age: number;
  onHeaderClick: React.MouseEventHandler;
  onNameChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Person: React.FC<PersonProps> = (props) => {
  return (
    <div className="person">
      <h1 onClick={props.onHeaderClick}>{props.name}</h1>
      <p>Age: {props.age}</p>
      <p>{props.children}</p>
      <p>
        <input value={props.name} onChange={props.onNameChange}/>
      </p>
    </div>
  );
};

export default Person;