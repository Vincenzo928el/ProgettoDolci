import React from 'react';
import DolceList from './components/DolceList.tsx';
import './styles.css';

const dolciData = [
    {
        id: "01bdefe9-1a98-4ee8-9bf3-a4db1dea314c",
        nome: "Torta di mele",
        prezzo: 10.01,
        data: "2021-07-22",
        quantita: 3,
    },
    {
        id: "24b7ae3b-4c16-4daa-a207-b887a2d63195",
        nome: "Sfogliatella",
        prezzo: 1.5,
        data: "2021-07-21",
        quantita: 1,
    },
    {
        id: "18375ceb-79b3-4526-91bd-6637ecc4004d",
        nome: "Cannolo",
        prezzo: 1.5,
        data: "2021-07-21",
        quantita: 1,
    }
];

const App: React.FC = () => {
    return (
        <div className="container">
            <h1>Dolci in vendita</h1>
            <DolceList dolci={dolciData} />
        </div>
    );
}

export default App;
