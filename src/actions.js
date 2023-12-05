export const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';

export const fetchGreetingSuccess = greeting => ({
 type: FETCH_GREETING_SUCCESS,
 payload: { greeting }
});

export const fetchGreeting = () => async dispatch => {
 const response = await fetch('https://api.example.com/greeting');
 const greeting = await response.text();
 dispatch(fetchGreetingSuccess(greeting));
};
