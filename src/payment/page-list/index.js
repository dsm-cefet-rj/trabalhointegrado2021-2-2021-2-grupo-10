import React from 'react';
import Card from '../list-card';
import {ReactComponent as RightArrow} from '../../img/icons/right-arrow.svg';
import { useSelector } from 'react-redux';
import { selectCards } from '../../store/paymentSlice.js';
import '../styles.css';

export default function List(props) {
    const cards = useSelector(selectCards);
    const hNew = props.hNew;

    return (
        <div id='configcardside' className='list-side columni hfill'>
            <div className='list'>
                {cards.map(
                    (card) => <Card
                        key={card.id}
                        id={card.id}
                        nome={card.nome}
                        num={card.num}
                        serv={card.serv}
                    />)
                }

                {/* <Card /> Debug */}

                <Card unheader={true} takein={true} onClick={() => hNew(true)}>
                    <>

                        <span>Adicione um novo cartão</span>
                        <RightArrow style={{height: '30px', width: '30px'}} />

                    </>
                </Card>
            </div>
        </div>
    );
}