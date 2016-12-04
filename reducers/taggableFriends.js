
const taggableFriends = (
  state = {
    list: []
  },
  action
) => {
  switch (action.type) {
  case 'SET_TAGGABLE_FRIENDS':
    return { list: action.list };
  default:
    return state;
  }
};

export default taggableFriends;
