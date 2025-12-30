// File: state-machine.js

function createStateMachine(config) {
  let currentState = config.initial;

  // Run onEnter for initial state (if exists)
  if (config.states[currentState].onEnter) {
    config.states[currentState].onEnter();
  }

  return {
    get state() {
      return currentState;
    },

    send(event) {
      const stateConfig = config.states[currentState];
      const nextState = stateConfig.on?.[event];

      if (!nextState) return;

      currentState = nextState;

      if (config.states[currentState].onEnter) {
        config.states[currentState].onEnter();
      }
    }
  };
}

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
