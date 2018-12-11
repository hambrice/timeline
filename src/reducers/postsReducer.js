export default (state = [], action) => {
  switch(action.type) {

    case 'NEW_POST':
    debugger;
      return [...state, action.content]

    default:
      return state
  }
}
