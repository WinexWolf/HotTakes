import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <InputComponent
          label="Name:"
          type="text"
          placeholder="Enter your name"
        />
        <InputComponent
          label="Email:"
          type="email"
          placeholder="Enter your email"
        />
      </div>
    );
  }
}

export default App;
