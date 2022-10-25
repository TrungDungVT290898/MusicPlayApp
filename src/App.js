import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import TrackList from "./components/TrackList";
import Controller from "./components/Controller";
import AppContainer from "./components/AppContainer";
const App = () => {
  return (
    <MusicPlayerProvider>
      <AppContainer />
    </MusicPlayerProvider>
  );
};

export default App;
