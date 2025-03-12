import { Metadata } from "next";
import HandleAddGame from "./handleAddGame";
import ListGame from "./listGame";

export const metadata: Metadata = {
  title: "Game",
};

const GamePage = () => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-2xl ">Edit Game</p>
      <HandleAddGame />
      <ListGame />
    </div>
  );
};

export default GamePage;
