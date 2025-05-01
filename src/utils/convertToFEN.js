import { Chess } from 'chess.js';

export const convertMovesToFEN = (moves) => {
    const chess = new Chess();
    moves.forEach(move => chess.move(move));
    return chess.fen();
};