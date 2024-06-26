import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

function AddItemForm({ fetchItems }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            name: name,
            description: description,
            price: price
        };

        axios.post('http://localhost:5000/api/items', newItem)
            .then(response => {
                console.log('Item added:', response.data);
                setName('');
                setDescription('');
                setPrice('');
                fetchItems(); // Fetch items after adding a new one
            })
            .catch(error => {
                console.error('Error adding item:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Description:
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label>
                Price:
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </label>
            <button type="submit">Add Item</button>
        </form>
    );
}

AddItemForm.propTypes = {
    fetchItems: PropTypes.func.isRequired
};

export default AddItemForm;
