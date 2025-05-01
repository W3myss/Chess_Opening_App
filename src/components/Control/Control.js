import './Control.css';

const Control = ({ children, onAnalyze }) => {
    return (
        <div className="control">
            {children}
            <button onClick={onAnalyze} className="analyze-button">Analyse</button>
        </div>
    );
};

export default Control;