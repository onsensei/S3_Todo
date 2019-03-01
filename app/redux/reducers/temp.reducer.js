import * as actions from '../actions/index.action';

const temp = (prevState = {}, action) => {
  switch (action.type) {

  case actions.TEMP_ACTION: {
    return prevState;
  }

  default: return prevState;
  }
};

export default temp;
