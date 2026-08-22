import { useState } from "react";
import { useHabitContext } from "../context/HabitContext";

export const HabitForm = () => {
  const { addHabit } = useHabitContext();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return; // input vazio

    addHabit(inputValue);
    setInputValue("");
  };

  return (
    <div className="w-full mt-10 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-100 p-6 rounded-lg text-(--text-main) bg-(--bg-dark-classico)"
      >
        <input
          className="bg-zinc-600 py-1 px-2 rounded-xl"
          type="text"
          placeholder="Type your habit"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="bg-(--neon-blue) mx-auto py-2 px-2 rounded-2xl font-bold">
          Add Habit
        </button>
      </form>
    </div>
  );
};
