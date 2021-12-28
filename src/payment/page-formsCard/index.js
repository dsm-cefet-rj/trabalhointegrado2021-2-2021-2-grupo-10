import React, { useState } from 'react';
import card from '../../img/card.png'
import { useDispatch } from 'react-redux';
import { createCard } from '../../store/paymentSlice.js';
import '../styles.css';

export default function FormsCard (props) {
    const [ nome, setNome ] = useState();
    const [ num, setNum ] = useState();
    const [ val, setVal ] = useState();
    const [ cvv, setCVV ] = useState();
    const [ serv, setServ ] = useState();

    const dispatch = useDispatch();
    const hNew = props.hNew;

    return (
        <div id='configcardforms' className='columni hfill vfill'>
            <div className='space-card-form columni'>
                <form onSubmit={e => handleSubmit(e)}>     
                    <div className='middle'>
                        <div className='card-form middle columni'>
                            <img src={card} alt=':/' width='260px' />
                            
                            <input
                                name='nome' type='text'
                                onChange={e => setNome(e.target.value)}
                                placeholder='Nome do Titular' />

                            <input
                                name='num'
                                type='text'
                                onChange={e => setNum(e.target.value)}
                                placeholder='Número' />

                            <div
                                style={{
                                    display: 'flex',
                                    columnGap:'12px',
                                    width: '100%'
                                }}>

                                <input
                                    name='val'
                                    type='text'
                                    onChange={e => setVal(e.target.value)}
                                    placeholder='Validade' />

                                <input
                                    name='cvv'
                                    type='text'
                                    onChange={e => setCVV(e.target.value)}
                                    placeholder='CVV' />

                            </div>

                            <select
                                name="serv"
                                onChange={e => setServ(e.target.value)}
                                defaultValue="na" required>

                                <option value="na" disabled hidden>
                                        Escolha o tipo de cartão
                                </option>

                                <option value="Crédito">
                                        Crédito
                                </option>

                                <option value="Débito">
                                        Débito
                                </option>

                            </select>
                        </div>
                    </div>

                    <br />

                    <div style={{float: 'right'}}>
                        <input type='submit' value='Atualizar'/>
                    </div>
                </form>
            </div>
        </div>
    );

    function handleSubmit (e) {
        e.preventDefault();
        dispatch(createCard({
            id: new Date().getTime(),
            nome: nome,
            num: num,
            val: val,
            cvv: cvv,
            serv: serv,
        }));
        hNew(false);
    }
}