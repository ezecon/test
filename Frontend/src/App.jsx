import  { useState, useEffect } from 'react';
import AddItemForm from './components/AddItemForm';
import ItemList from './components/ItemList';
import './App.css';
import axios from 'axios';

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = () => {
        axios.get('http://localhost:5000/api/items')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the items!', error);
            });
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>My Item Store</h1>
            </header>
            <main>
                <AddItemForm fetchItems={fetchItems} />
                <ItemList items={items} />
            </main>
        </div>
    );
}

export default App;
