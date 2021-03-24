import axios from 'axios';

const POST_NEW_DEBT = 'POST_NEW_DEBT';

export const postNewDebt = (newDebt) => ({
  type: POST_NEW_DEBT,
  newDebt,
});

export const postNewDebtThunk = (newDebt) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      'https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json',
      newDebt
    );
    dispatch(postNewDebt(data));
  } catch (error) {
    console.error('Error posting single campus');
  }
};

const reducer = (state = { banks: {} }, action) => {
  switch (action.type) {
    case POST_NEW_DEBT:
      const newDebt = {
        id: action.id,
        creditorName: action.newDebt,
      };
  }
};
