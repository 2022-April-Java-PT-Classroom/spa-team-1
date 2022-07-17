import React, {useState} from 'react';
import './style.css';

function Card(){

    const [name, setName]= useState('dev');
    const [bio, setBio] = useState('devBio');

return (
    <div className='Card'>
        <div className='front-container'>
            <div className='image-container'>
                <img src='/src\assets\about\gail.png'alt='' height='100px' width='100px' />
            </div>
        </div>
        <div className='back-container'>
            <h3> {name}</h3>
            <h3> {bio}</h3>
            <button></button>
        </div>
    </div>
)
}
export default Card;