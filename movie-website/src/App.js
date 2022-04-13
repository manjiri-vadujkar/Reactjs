// import Logo from './Logo.jfif'
import Trailer from './trailer.mp4'
import './App.css';

function App() {
  return (
    <div className="App">
      <navbar class="nav">
        <ul class="navlist">
          <li>Plot</li>
          <li>History</li>
          {/* <li id="li-logo"><img src={Logo} alt="logo" class="logo"></img></li> */}
          <li>Viewings</li>
          <li>Ratings</li>
        </ul>
      </navbar>
    
          <div class="content-video">
            <video width = "100%" height="80%" src={Trailer} autoPlay  />
          </div>
          <div class="content-text">
            <div class="content-left">
              <h2>Summary</h2>
              <p>If they hear you, they hunt you. A family must live in silence to avoid mysterious creatures that hunt by sound. 
                Knowing that even the slightest whisper or footstep can bring death, Evelyn and Lee are determined to find a way to protect their children 
                while desperately searching for a way to fight back.
              </p>
            </div>
            <div class="content-right">
              <h2>Ratings</h2>
              <p>If they hear you, they hunt you. A family must live in silence to avoid mysterious creatures that hunt by sound. 
                Knowing that even the slightest whisper or footstep can bring death, Evelyn and Lee are determined to find a way to protect their children 
                while desperately searching for a way to fight back.
              </p>
            </div>
          </div>
        </div>
  );
}

export default App;
 