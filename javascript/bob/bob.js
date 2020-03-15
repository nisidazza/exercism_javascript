/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = msg => {
  msg = msg.trim();

  if (ask(msg) && yell(msg)) {
    return "Calm down, I know what I'm doing!";
  }
  if (ask(msg)) {
    return "Sure.";
  }
  if (yell(msg)) {
    return "Whoa, chill out!";
  }
  if (silent(msg)) {
    return "Fine. Be that way!";
  }
  return "Whatever.";

  function ask(input) {
    return input.endsWith("?");
  }

  function yell(input) {
    return input === input.toUpperCase() && /[A-Z]+/.test(input);
  }

  function silent(input) {
    return input === "";
  }
};

const result = "ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!";
hey(result);
