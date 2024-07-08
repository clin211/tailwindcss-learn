import React from 'react';
import '@/assets/styles/justify-content&flex-direction.css';

const Page = () => {
    return (
        <main>
            <div className="form">
                <label htmlFor="flex-direction">flex-direction:</label>
                <select name="flex-direction" id="flex-direction">
                    <option value="row">row</option>
                    <option value="row-reverse">row-reverse</option>
                    <option value="column">column</option>
                    <option value="column-reverse">column-reverse</option>
                </select>
                <label htmlFor="justify-content">justify-content:</label>
                <select name="justify-content" id="justify-content">
                    <option value="flex-start">flex-start</option>
                    <option value="center">center</option>
                    <option value="flex-end">flex-end</option>
                    <option value="start">start</option>
                    <option value="end">end</option>
                    <option value="space-around">space-around</option>
                    <option value="space-between">space-between</option>
                    <option value="space-evenly">space-evenly</option>
                    <option value="inherit">inherit</option>
                    <option value="initial">initial</option>
                    <option value="revert">revert</option>
                    <option value="unset">unset</option>
                </select>
            </div>
            <div className="container">
                <div className="item">1</div>
                <div className="item">2</div>
                <div className="item">3</div>
                <div className="item">4</div>
            </div>

            <div className="container">
                <div className="item">1</div>
                <div className="item">2</div>
                <div className="item">3</div>
                <div className="item">4</div>
                <div className="item">5</div>
                <div className="item">6</div>
                <div className="item">7</div>
                <div className="item">8</div>
            </div>
        </main>
    );
};

export default Page;
