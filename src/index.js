import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Square extends React.Component {
    render() {
        return (
            <button className="square">
                {/* TODO */}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
         return <Square />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div></div>
                <div>
                    
                </div>
            </div>
        )
    }
}