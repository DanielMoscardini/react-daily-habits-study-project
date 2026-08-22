import { HabitForm } from "./components/HabitForm";
import { Header } from "./components/Header";
import { HabitProvider } from "./context/HabitContext";

function App() {
  return (
    <HabitProvider>
      <Header />
      <HabitForm />
    </HabitProvider>
  );
}

export default App;
