import React, { useState } from 'react';

// Set the alignment of the checkbox and the font sizes
export default function prelimExam() {
    const [strawhatChecked, setStrawhatChecked] = useState(false);
    const [gumgumChecked, setGumgumChecked] = useState(false);
    const [redVestChecked, setRedVestChecked] = useState(false);

    const strawhatCheckbox = () => {
        setStrawhatChecked(!strawhatChecked);
    };

    const devilFruitCheckbox = () => {
        setGumgumChecked(!gumgumChecked);
    };

    const redvestCheckbox = () => {
        setRedVestChecked(!redVestChecked);
    };

    return (
        <div>
            <div>
                <h1>Things to bring</h1>
                <div style={{ display: 'flex', alignItems: 'center', backgroundColor: strawhatChecked ? 'green' : 'transparent' }}>
                    <input type="checkbox" onChange={strawhatCheckbox} />
                    <label htmlFor="">My Strawhat</label>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', backgroundColor: gumgumChecked ? 'green' : 'transparent' }}>
                    <input type="checkbox" onChange={devilFruitCheckbox} />
                    <label htmlFor="">Gum gum fruit</label>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', backgroundColor: redVestChecked ? 'pink' : 'transparent' }}>
                    <input type="checkbox" onChange={redvestCheckbox} />
                    <label htmlFor="">The Red vest</label>
                </div>
            </div>
        </div>
    );
}
