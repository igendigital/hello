import { useState } from 'react';

const Item = () => {

    const [start, change] = useState('Name')

    function changestate() {
        change('ddddddd')
    }

    function changeName() {
        change('Hello new data')
    }


    return(
        <div>
            <h1>Hello {start}</h1>
            <button onClick={changestate} >Click</button>
            <button onClick={changeName} >Click</button>
        </div>
    )
}

export default Item