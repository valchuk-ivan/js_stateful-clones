// function hasUniqueQuccurences(arr) {
//   const counter = {};

//   for (const elem of arr) {
//     counter[elem] = (counter[elem] || 0) + 1;
//   }

//   const value = Object.values(counter);

//   const x = new Set(value);

//   // for (let i = 0; i < value.length; i++) {
//   //   if (value.slice(i).includes(i)) {
//   //     return false;
//   //   }
//   // }

//   // for (let i = 0; i < value.length; i++) {
//   //   for (let j = i + 1; j < value.length; j++) {
//   //     if (value[i] === value[j]) {
//   //       return false;
//   //     }
//   //   }
//   // }

//   return value.length === x.size;
// }

'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */

function transformStateWithClones(state, actions) {
  const finalArray = [];
  let currentState = { ...state };

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        currentState = Object.assign(currentState, action.extraData);
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete currentState[key];
        }
        break;

      case 'clear':
        for (const key in currentState) {
          delete currentState[key];
        }
        break;

      default:
        break;
    }

    finalArray.push({ ...currentState });
  }

  return finalArray;
}

module.exports = transformStateWithClones;
