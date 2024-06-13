import React from 'react';
import DolceItem from './DolceItem.tsx';

interface Dolce {
    id: string;
    nome: string;
    prezzo: number;
    data: string;
    quantita: number;
}

interface DolceListProps {
    dolci: Dolce[];
}

const DolceList: React.FC<DolceListProps> = ({ dolci }) => {
    return (
        <div className="dolci-list">
            {dolci.map(dolce => (
                <DolceItem key={dolce.id} {...dolce} />
            ))}
        </div>
    );
};

export default DolceList;
