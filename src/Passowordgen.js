import React, { useEffect, useState } from 'react'
import './App.css';
import { LC, SC, UC, NC } from './Data/PassChar';


function Passowordgen() {
    let [uppercase, setUppercase] = useState(false);
    let [lowercase, setLowercase] = useState(false);
    let [number, setNumber] = useState(false);
    let [symbols, setSymbols] = useState(false);
    let [passwordlen, setPasswordlen] = useState(10);
    let [fpass, setFpass] = useState('');

    let createPassword = () => {
        let finalPass = '';
        let charSet = '';

        if (uppercase || lowercase || number || symbols) {
            if (uppercase) charSet += UC;
            if (lowercase) charSet += LC;
            if (number) charSet += NC;
            if (symbols) charSet += SC;
            // console.log(CharSet);
            for (let i = 0; i < passwordlen; i++) {
                finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
            }
            // console.log(finalPass);
            setFpass(finalPass)
        }
        else {
            alert("Please atlest one CheckBox!......")
        }
    }
    let copyPass = () => {
        navigator.clipboard.writeText(fpass)
    }


    useEffect(()=>{
        console.log("Hellow ji");
    },[number])



    return (
        <>
            <div className='passwordBox'>
                <h3>Password Generator</h3>
                <div className='passwordBoxin'>
                    <input type='text' value={fpass} /> <button onClick={copyPass}>Copy</button>
                </div>
                <div className='passLenght'>
                    <label>Password length</label>
                    <input type='number' max={20} min={10} value={passwordlen} onChange={(event) => { setPasswordlen(event.target.value) }} />

                </div>

                <div className='passLenght'>
                    <label>Include uppecase letters</label>
                    <input type='checkbox' checked={uppercase} onClick={() => setUppercase(!uppercase)} />
                </div>

                <div className='passLenght'>
                    <label>Include lowercase letters</label>
                    <input type='checkbox' checked={lowercase} onClick={() => setLowercase(!lowercase)} />
                </div>

                <div className='passLenght'>
                    <label>Include numbers </label>
                    <input type='checkbox' checked={number} onClick={() => setNumber(!number)} />
                </div>

                <div className='passLenght'>
                    <label>Include symbols</label>
                    <input type='checkbox' checked={symbols} onClick={() => setSymbols(!symbols)} />
                </div>

                <button className='btn1' onClick={createPassword}>
                    Generate Password
                </button>

            </div>
        </>
    )
}

export default Passowordgen