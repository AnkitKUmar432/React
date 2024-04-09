// import React from 
import React from 'react';

import { useState } from 'react';
import { questions } from './Data/faqQestion';
import './App.css';



function Faqs() {
    let [currentId, setCurrentId] = useState(questions[0].id)
    let itesm = questions.map((itemsData, i) => {
        let itemDetails = {
            itemsData,
            currentId,
            setCurrentId
        }
        return (
            <FaqItems itemDetails={itemDetails} key={i} />
        )
    })
    return (
        <div>
            <h1>Frequently Asked Questions (FAQS)</h1>
            <div className='faqouter'>
                {itesm}
            </div>
        </div>
    )
}


function FaqItems({ itemDetails }) {
    let { itemsData, currentId, setCurrentId } = itemDetails;
    return (

        <div className='faqItems'>

            <h2 onClick={() => setCurrentId(itemsData.id)}> {itemsData.question} </h2>
            <p className={currentId === itemsData.id ? 'activeAns' : ''}>{itemDetails.itemsData.answer}</p>

        </div>
    )
}

export default Faqs