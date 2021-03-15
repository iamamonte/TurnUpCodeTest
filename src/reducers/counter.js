let counter= 0;
export default function(state=counter, action){
  switch (action.type) {
    case "INCREMENT": counter++;
      break;
    case "DECREMENT": counter--;
      break;
  }
  return counter;
}

