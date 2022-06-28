import { Credentails } from '@shared/model/types/user';
import { api } from '../api/axios.config';

const auth = () => {

	function authenticate(credentails: Credentails) {
		return api.post('/sign-in', credentails);
	}

	return {
		authenticate
	};
};

export default auth;
