import Header from "./components/Header";
import Modals from "./components/Modals";
import Tasks from "./components/Tasks";
import AppProvider from "./providers/AppProvider";

function App() {
  return (
    <AppProvider>
      <Header />
      <Tasks />
      <Modals />
    </AppProvider>
  );
}

export default App;
