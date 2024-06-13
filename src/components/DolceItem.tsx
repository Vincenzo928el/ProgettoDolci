import React from 'react';

interface DolceProps {
    id: string;
    nome: string;
    prezzo: number;
    data: string;
    quantita: number;
}

const DolceItem: React.FC<DolceProps> = ({ id, nome, prezzo, data, quantita }) => {
    return (
        <div className="dolce">
            <h2>{nome}</h2>
            <p>Prezzo: €{prezzo.toFixed(2)}</p>
            <p>Data: {data}</p>
            <p>Quantità disponibile: {quantita}</p>
        </div>
    );
};

export default DolceItem;
