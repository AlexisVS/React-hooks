import React from 'react';

const App = () => {
  let timer;

  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  let refreshTime = () => {
    timer = setInterval(() => setTime(new Date().toLocaleTimeString()))
    return time
  }

  return (
    <div>
      <h1>{refreshTime()}</h1>
    </div>
  );
};

export default App;