export const HabitItem = ({ habit }) => {
  return (
    <li className="bg-zinc-600 py-2 px-2 m-2 rounded-xl min-w-100 flex items-center gap-2">
      <span>{habit.name} -</span>
      <span>{habit.count}</span>
    </li>
  );
};
