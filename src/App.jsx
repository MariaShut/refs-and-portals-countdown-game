import { Player } from "./components/Player";
import { TimerChallenge } from "./components/TimerChallenge";

function App() {
  return (
    <>
      <Player />
      <div className="challenges">
        <TimerChallenge title="easy" targetTime={1}/>
      </div>
    </>
  );
}

export default App;
