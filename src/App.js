import './App.css';
import Board from './components/Board/Board';
import { reducer } from './reducer/reducer';
import { useReducer, useState } from 'react';
import { initGameState } from './constants';
import AppContext from './contexts/Context';
import Control from './components/Control/Control';
import TakeBack from './components/Control/bits/TakeBack';
import MovesList from './components/Control/bits/MovesList';
import { convertMovesToFEN } from './utils/convertToFEN';
import { fetchStockfishAnalysis } from './utils/fetchStockfish';

function App() {
    const [appState, dispatch] = useReducer(reducer, initGameState);
    const [analysis, setAnalysis] = useState(null);

    const handleAnalyze = async () => {
        try {
            const fen = convertMovesToFEN(appState.movesList);
            console.log("Generated FEN:", fen); // Log the FEN string
            const result = await fetchStockfishAnalysis(fen);
            console.log("Stockfish Analysis Result:", result); // Log the API response
            setAnalysis(result);
        } catch (error) {
            console.error("Error fetching Stockfish analysis:", error);
        }
    };

    return (
        <AppContext.Provider value={{ appState, dispatch }}>
            <div className="App">
                <Board />
                <Control onAnalyze={handleAnalyze}>
                    <MovesList />
                    <TakeBack />
                </Control>
                {analysis && (
                    <div className="analysis">
                        <h3>Stockfish Analysis</h3>
                        <p>{analysis.text}</p>
                    </div>
                )}
            </div>
        </AppContext.Provider>
    );
}

export default App;
