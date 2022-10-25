import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import AppContainer from "./components/AppContainer";
const App = () => {
  return (
    <MusicPlayerProvider>
      <AppContainer />
    </MusicPlayerProvider>
  );
};

export default App;
