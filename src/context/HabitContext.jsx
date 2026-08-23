import { createContext, useContext, useEffect, useState } from "react";

const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState(() => {
    const stored = localStorage.getItem("habits");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = (name) => {
    const newHabit = {
      id: crypto.randomUUID(),
      name,
      count: 0,
    };

    setHabits((prev) => [...prev, newHabit]);
  };

  const incrementHabitCount = (id) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id ? { ...habit, count: habit.count + 1 } : habit,
      ),
    );
  };

  const decrementHabitCount = (id) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id && habit.count > 0
          ? { ...habit, count: habit.count - 1 }
          : habit,
      ),
    );
  };

  const editHabit = (id, newName) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id ? { ...habit, name: newName } : habit,
      ),
    );
  };

  const deleteHabit = (id) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  };

  return (
    <HabitContext.Provider
      value={{
        habits,
        addHabit,
        incrementHabitCount,
        decrementHabitCount,
        editHabit,
        deleteHabit,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};

export const useHabitContext = () => useContext(HabitContext);
