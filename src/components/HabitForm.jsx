export const HabitForm = () => {
  return (
    <div className="w-full mt-10 flex justify-center items-center">
      <form className="flex flex-col gap-4 w-full max-w-100 p-6 rounded-lg text-(--text-main) bg-(--bg-dark-classico)">
        <input
          className="bg-zinc-600 py-1 px-2 rounded-xl"
          type="text"
          placeholder="Type your habit"
        />
        <button className="bg-(--neon-blue) mx-auto py-2 px-2 rounded-2xl">
          Add Habit
        </button>
      </form>
    </div>
  );
};
