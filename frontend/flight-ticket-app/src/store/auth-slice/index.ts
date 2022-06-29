import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null,
	token: null,
	isAuthenticated: true
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {

		login(_, action) {
			const { payload } = action;

			return {
				user: payload.user,
				token: payload.token,
				isAuthenticated: true
			};
		},

		logout() {
			return initialState;
		}
	}
});

export default authSlice;
