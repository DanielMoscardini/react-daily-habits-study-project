import { useState } from "react";
import { useHabitContext } from "../context/HabitContext";
import { IncrementIcon, DecrementIcon, DeleteIcon, EditIcon } from "../icons";

export const HabitItem = ({ habit }) => {
  const { incrementHabitCount, decrementHabitCount, editHabit, deleteHabit } =
    useHabitContext();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(habit.name);

  return (
    <li className="bg-zinc-600 py-2 px-2 m-2 rounded-xl min-w-100 flex items-center gap-2">
      {isEditing ? (
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => {
            editHabit(habit.id, name);
            setIsEditing(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              editHabit(habit.id, name);
              setIsEditing(false);
            }

            if (e.key === "Escape") {
              setName(habit.name);
              setIsEditing(false);
            }
          }}
          autoFocus
          className="bg-zinc-700 px-2 rounded"
        />
      ) : (
        <span>{habit.name} -</span>
      )}

      <span>{habit.count}</span>

      <button onClick={() => incrementHabitCount(habit.id)}>
        <IncrementIcon />
      </button>

      <button onClick={() => decrementHabitCount(habit.id)}>
        <DecrementIcon />
      </button>

      <button onClick={() => setIsEditing(true)}>
        <EditIcon />
      </button>

      <button onClick={() => deleteHabit(habit.id)}>
        <DeleteIcon />
      </button>
    </li>
  );
};
