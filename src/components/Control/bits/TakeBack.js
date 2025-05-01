import { useAppContext } from '../../../contexts/Context';
import { takeBack } from '../../../reducer/actions/move';

const TakeBack = () => {
    const { dispatch } = useAppContext();

    return (
        <div>
            <button
                onClick={() => dispatch(takeBack())}
                className="analyze-button" // Use the same class as the analyze button
            >
                Take Back
            </button>
        </div>
    );
};

export default TakeBack;