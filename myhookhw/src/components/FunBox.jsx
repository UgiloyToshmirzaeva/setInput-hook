import React, { useState } from 'react';

export function FunBox() {
    let [input1, setInput1] = useState('');
    let [input2, setInput2] = useState('');
    let [input3, setInput3] = useState('');

    function handleInputChange(e) {
        if (e.target.name === 'input1') {
             setInput1(e.target.value)
        } else if (e.target.name === 'input2') { 
            setInput2(e.target.value)
        }else{  setInput3(e.target.value)}
    }
    
    return(
        <>
        <h1>functional component</h1>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', background: 'red' }}>
            <div style={{width: '700px',background: 'khaki', height: '660px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <input type="text" placeholder='Type smth it will be displayed on the board' name="input1" value={input1} onChange={handleInputChange} />
            <div style={{width: '600px',background: 'yellow', height: '500px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                <input type="text" placeholder='Type smth it will be displayed on the board' name="input2" value={input2} onChange={handleInputChange} />
                <div  style={{background: 'royalblue', width: '400px', height: '350px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                    <input type="text" placeholder='Type smth it will be displayed on the board' name="input3" value={input3} onChange={handleInputChange} />
                    <div style={{ background: 'blue', padding: '20px', border: '5px solid yellow', width: '140px', display: 'flex', justifyContent: 'center' }}>
                        <div style={{ background: 'gray', padding: '30px', border: '5px solid white', justifyContent: 'center', width: '200px' }}>
                            <p>{input1}</p>
                            <p>{input2}</p>
                            <p>{input3}</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}


