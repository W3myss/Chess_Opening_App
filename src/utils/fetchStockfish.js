export const fetchStockfishAnalysis = async (fen) => {
    try {
        const response = await fetch("https://chess-api.com/v1", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fen: fen,
                depth: 12, // Optional: Adjust depth as needed
                maxThinkingTime: 50, // Optional: Adjust thinking time as needed
            }),
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching Stockfish analysis:", error);
        throw error;
    }
};