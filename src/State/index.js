'use strict';

const State = {
  players: [],
};

export function addPlayer(playerName, playerColor) {
  State.players.push({ name: playerName, color: playerColor });
}
