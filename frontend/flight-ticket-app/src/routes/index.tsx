import { RootState } from '@store/index';
import React from 'react';
import { useSelector } from 'react-redux';
import PrivateRoutes from './private.routes';
import PublicRoutes from './public.routes';

const Routes = () => {

	const isAuthenticated = useSelector<RootState, boolean>((state) => state.auth.isAuthenticated);

	return(
		<React.Fragment>
			{ !isAuthenticated && <PublicRoutes/> }
			{ isAuthenticated && <PrivateRoutes/>}
		</React.Fragment>
	);
};

export default Routes;
