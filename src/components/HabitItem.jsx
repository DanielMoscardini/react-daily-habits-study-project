import { useHabitContext } from "../context/HabitContext";
import { IncrementIcon, DecrementIcon, DeleteIcon } from "../icons";

export const HabitItem = ({ habit }) => {
  const { incrementHabitCount, decrementHabitCount, deleteHabit } =
    useHabitContext();

  return (
    <li className="bg-zinc-600 py-2 px-2 m-2 rounded-xl min-w-100 flex items-center gap-2">
      <span>{habit.name} -</span>
      <span>{habit.count}</span>
      <button onClick={() => incrementHabitCount(habit.id)}>
        <IncrementIcon />
      </button>

      <button onClick={() => decrementHabitCount(habit.id)}>
        <DecrementIcon />
      </button>

      <button onClick={() => deleteHabit(habit.id)}>
        <DeleteIcon />
      </button>
    </li>
  );
};
