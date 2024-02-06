import { useRef, useState } from "react";

const Message = () => {

    const nameRef = useRef(null);
    const [name, setName] = useState('Juan Perez');
    
    function handleClick(e){
        e.preventDefault();
        const newName = nameRef.current.value;

        if(newName){
            setName(newName);
        };

    };

    return (
        <>
            <h1>Hola haha {name}</h1>
            <p>hehe</p>
        <form action="submit" onSubmit={handleClick}>
            <input required ref= {nameRef}/>
            <button type="submit">Enter name</button>
        </form>
    
        </>
    )    
};

export default Message;