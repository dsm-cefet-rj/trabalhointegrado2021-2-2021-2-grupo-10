import React from 'react';
import flag from '../../img/mastercard-logo.png'
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../store/paymentSlice.js';
import '../styles.css';

function Header (props) {
    const dispatch = useDispatch();

    return (
        <div className='card-header'>
            <div style={{width: '100%'}}>
                <div style={{display: 'flex', float: 'right'}}>
                    <button className='bttn-card clicky' style={{width: '12px'}} onClick={() => dispatch(deleteCard(props.id))}>
                        x
                    </button>
                </div>

                <div className='middle'>
                    <svg width="18" height="18" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.70532 5.79711H3.86474C3.96724 5.79711 4.06554 5.75639 4.13801 5.68391C4.21049 5.61143 4.25121 5.51313 4.25121 5.41063C4.25121 5.30813 4.21049 5.20983 4.13801 5.13736C4.06554 5.06488 3.96724 5.02416 3.86474 5.02416H2.70532C2.60282 5.02416 2.50452 5.06488 2.43204 5.13736C2.35956 5.20983 2.31884 5.30813 2.31884 5.41063C2.31884 5.51313 2.35956 5.61143 2.43204 5.68391C2.50452 5.75639 2.60282 5.79711 2.70532 5.79711ZM7.343 1.93237H1.93237C1.62487 1.93237 1.32997 2.05453 1.11254 2.27196C0.895102 2.48939 0.772949 2.7843 0.772949 3.09179V6.57005C0.772949 6.87755 0.895102 7.17245 1.11254 7.38989C1.32997 7.60732 1.62487 7.72947 1.93237 7.72947H7.343C7.65049 7.72947 7.9454 7.60732 8.16283 7.38989C8.38026 7.17245 8.50242 6.87755 8.50242 6.57005V3.09179C8.50242 2.7843 8.38026 2.48939 8.16283 2.27196C7.9454 2.05453 7.65049 1.93237 7.343 1.93237ZM7.72947 6.57005C7.72947 6.67255 7.68875 6.77085 7.61628 6.84333C7.5438 6.91581 7.4455 6.95653 7.343 6.95653H1.93237C1.82987 6.95653 1.73157 6.91581 1.65909 6.84333C1.58661 6.77085 1.5459 6.67255 1.5459 6.57005V4.25121H7.72947V6.57005ZM7.72947 3.47827H1.5459V3.09179C1.5459 2.98929 1.58661 2.89099 1.65909 2.81852C1.73157 2.74604 1.82987 2.70532 1.93237 2.70532H7.343C7.4455 2.70532 7.5438 2.74604 7.61628 2.81852C7.68875 2.89099 7.72947 2.98929 7.72947 3.09179V3.47827Z" fill="#535353"/>
                    </svg>

                    <p>{props.serv}</p>
                </div>
            </div>
        </div>
    );
}

function Summary (props) {
    return (
        <>
            <img src={flag} alt=':/' />
                <div className='inside-card-content'>    
                    <p>{props.nome}</p>
                    <p>{props.num}</p>
                </div>
            <input type='radio' />
        </>
    );
}

export default function Card (props) {
    const deleteData = props.deleteData;
    const unheader = props.unheader;
    const takein = props.takein;

    return (
        <div className='columni card'>
            {!unheader &&
                <Header
                    id={props.id}
                    serv={props.serv}
                    deleteData={deleteData}
                />
            }
            <button onClick={props.onClick} className='bttn-card clicky'>
                <div className='card-content middle hfill'>
                    {takein
                        ? <>{props.children}</>
                        : <Summary
                                nome={props.nome} 
                                num={props.num} 
                            />
                    }
                </div>
            </button>
        </div>
    );
}