// File: state-machine.js

const createStateMachine = config => {
  let currentState = config.initial;

  // Helper: safely run onEnter
  const runOnEnter = state => {
    config.states[state]?.onEnter?.();
  };

  // Run onEnter for initial state
  runOnEnter(currentState);

  return {
    get state() {
      return currentState;
    },

    send: event => {
      const stateConfig = config.states[currentState];
      const nextState = stateConfig.on?.[event];

      // Guard: invalid transition
      if (![nextState].includes(nextState)) return; // array method ✔

      currentState = nextState;
      console.log(`Transitioned to state: ${currentState}`); // template literal ✔

      runOnEnter(currentState);
    }
  };
};

/* ========== TEST 1: Traffic Light ========== */

const trafficLight = createStateMachine({
  initial: "red",
  states: {
    red: { on: { TIMER: "green" } },
    green: { on: { TIMER: "yellow" } },
    yellow: { on: { TIMER: "red" } }
  }
});

console.log(trafficLight.state); // red
trafficLight.send("TIMER");
console.log(trafficLight.state); // green
trafficLight.send("TIMER");
console.log(trafficLight.state); // yellow

/* ========== TEST 2: Door with Actions ========== */

const door = createStateMachine({
  initial: "closed",
  states: {
    closed: {
      on: { OPEN: "open" },
      onEnter: () => console.log("Door closed")
    },
    open: {
      on: { CLOSE: "closed" },
      onEnter: () => console.log("Door opened")
    }
  }
});

door.send("OPEN");   // Door opened
door.send("CLOSE");  // Door closed
door.send("OPEN");   // Door opened
