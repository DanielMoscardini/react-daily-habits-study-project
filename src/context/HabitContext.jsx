import { createContext, useContext, useState } from "react";

const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const addHabit = (name) => {
    const newHabit = {
      id: crypto.randomUUID(),
      name,
      count: 0,
    };

    setHabits((prev) => [...prev, newHabit]);
  };

  return (
    <HabitContext.Provider value={{ habits, addHabit }}>
      {children}
    </HabitContext.Provider>
  );
};

export const useHabitContext = () => useContext(HabitContext);
