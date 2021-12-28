import React, { useState } from 'react';
import List from '../page-list';
import FormsCard from '../page-formsCard';
import '../styles.css';

export default function Config () {
    const [isNew, setNew] = useState(false);

    return (
        <div className='page'>
            <List hNew={setNew} />
            {isNew
                ? <FormsCard hNew={setNew} />
                : <></>
            }
        </div>
    );
}