import { useHabitContext } from "../context/HabitContext";
import { HabitItem } from "./HabitItem";

export const HabitList = () => {
  const { habits } = useHabitContext();

  return (
    <div className="w-full flex items-center justify-center">
      <ul className="mt-8 flex flex-col items-center justify-around  text-(--text-main) py-2">
        {habits.map((habit) => (
          <HabitItem key={habit.id} habit={habit} />
        ))}
      </ul>
    </div>
  );
};
