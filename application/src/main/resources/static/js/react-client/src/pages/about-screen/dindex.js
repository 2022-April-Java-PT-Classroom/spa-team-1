import React, { useState } from 'react';

import axios from 'axios';
import style from './style.module.scss';

const Items = ({ items }) => {

    const [itemsState, setItemsState] = useState(items);

    const [itemState, setItemState] = useState({
        name: "",
        isSelected: false
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setItemState({
            ...itemState,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            name: itemState.name,
            isSelected: false
        };

            console.log(response.status);
            console.log('DATA', response.data);
            setItemsState(response.data);
    };

    const handleDelete = (itemId) => {
        axios.delete(`http://localhost:8080/api/items/${itemId}/delete-item`).then((response) => {
            console.log('Delete successful');
            console.log('DATA', response.data);
            setItemsState(response.data);
        });
    }

    const handleSelectUpdate = (itemId, itemName) => {
        const userData = {
            name: itemName,
            isSelected: true
        }
        axios.put(`http://localhost:8080/api/items/${itemId}/select-item`, userData).then((response) => {
            console.log('Update successful');
            console.log('DATA', response.data);
            setItemsState(response.data);
        });
    }

    return (
        <div className={style.itemForm}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={itemState.name}
                    onChange={handleChange}
                    placeholder='Enter name of item'
                />
                <button type="submit">Add Item</button>
            </form>
            <h3>Your items</h3>
            <div className={style.itemsContainer}>
                {itemsState.map(item => (
                    <div className={style.itemContainer} key={item.id}>
                        <p className={item.selected ? style.selected : null} onClick={() => handleSelectUpdate(item.id, item.name)}>{item.name}<button onClick={() => handleDelete(item.id)}>x</button></p>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Items;