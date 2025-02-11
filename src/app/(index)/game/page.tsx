"use client";
import { useEffect, useState } from "react";

interface Game {
  id: number;
  name: string;
}

const GameComponent = () => {
  const [data, setData] = useState<Game[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/game");
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(`Failed to fetch data: ${errorMessage}`);
        }
        const result = await response.json();
        setData(result.data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h1>Game Data</h1>
      <ul>
        {data?.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

// Ekspor komponen
export default function GamePage() {
  return (
    <div className="min-h-[40vh]">
      <div className="px-6 py-4">
        <GameComponent />
      </div>
    </div>
  );
}
