"use client";
import { useEffect, useState } from "react";
import Card from "./card";

interface Game {
  id: number;
  name: string;
  imagePath: string;
  imageTitlePath: string;
}

const ListCard: React.FC = () => {
  const [data, setData] = useState<Game[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/game");
        if (!res.ok) {
          const errorMessage = await res.text();
          throw new Error(`Failed to fetch data: ${errorMessage}`);
        }
        const result = await res.json();
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
    return (
      <div className="w-full flex flex-wrap py-6 min-h-52 items-center justify-center">
        <span className="eos-icons--three-dots-loading"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex flex-wrap py-6 min-h-52 items-center justify-center">
        <p className="text-center">Error : {error}</p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-wrap py-6">
      {data?.map((game) => (
        <Card
          key={game.id}
          id={game.id}
          name={game.name}
          image={game.imagePath}
          imageTitle={game.imageTitlePath}
        />
      ))}
    </div>
  );
};

export default ListCard;
