import Papa from 'papaparse';

export const parseChessGames = async () => {
    const response = await fetch('/chess_games.csv');
    const csvText = await response.text();

    const data = Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
    }).data;

    // Create a mapping of positions to moves
    const positionToMoves = {};

    data.forEach(game => {
        const moves = game.moves.split(' ');
        let position = 'start'; // Use 'start' for the initial position

        moves.forEach((move, index) => {
            if (!positionToMoves[position]) {
                positionToMoves[position] = {};
            }

            if (!positionToMoves[position][move]) {
                positionToMoves[position][move] = 0;
            }

            positionToMoves[position][move] += 1;

            // Update the position (you'll need a function to calculate the new position)
            position = updatePosition(position, move); // Implement `updatePosition` based on your board logic
        });
    });

    return positionToMoves;
};