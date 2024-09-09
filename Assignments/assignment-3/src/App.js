import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.scss';

function App() {
  let year = new Date().getFullYear();
  const [time, setTime] = useState()
  // const [countDown, setCountDown] = useState(time)
  const [isRunning, setIsRunning] = useState(false)
  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1)
      }, 1000)
    }
    if (time === 0 && isRunning) {
      // alert("a3waerfghj")
    }
    return () => clearInterval(timer)

  }, [time, isRunning])

  const startTimer = () => {
    if (time > 0) {
      setIsRunning(true);
    }
  }
  const stopTimer = () => {
    setIsRunning(false);
  }
  const resetTimer = () => {
    setIsRunning(false);
    setTime(0)
  }

  return (
    <>
      <div className="img">
        <main>
          <div className="container pt-5">
            <div className="row">
              <div className="col d-flex justify-content-center text-center">
                <div className="count p-5" style={{ marginTop: "100px" }}>
                  <h1>CountDown Timer</h1>
                  <div className="d-flex justify-content-center rounded-2">
                    <input className='mt-5 mb-3' type="number" value={time} onChange={(e) => { setTime(e.target.value) }} disabled={isRunning} />
                  </div>
                  <h1>{time} Seconds</h1>
                  <div className="container">
                    <div className="row d-flex justify-content-center mt-5">
                      <div className="col-12 col-md-4 col-lg-4 mt-2">
                        <button className='btn btn-success ms-3' onClick={startTimer} disabled={isRunning}>Start</button>
                      </div>
                      <div className="col-12 col-md-4 col-lg-4 mt-2">
                        <button className='btn btn-danger ms-3' onClick={stopTimer} disabled={!isRunning}>Stop</button>
                      </div>
                      <div className="col-12 col-md-4 col-lg-4 mt-2">
                        <button className='btn btn-info ms-3' onClick={resetTimer}>Reset</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
