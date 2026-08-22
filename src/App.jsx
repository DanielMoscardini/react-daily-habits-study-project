import { HabitForm } from "./components/HabitForm";
import { HabitList } from "./components/HabitList";
import { Header } from "./components/Header";
import { HabitProvider } from "./context/HabitContext";

function App() {
  return (
    <HabitProvider>
      <Header />
      <HabitForm />
      <HabitList />
    </HabitProvider>
  );
}

export default App;
