import { RootState } from '@store/index';
import { useSelector } from 'react-redux';
import PrivateRoutes from './private.routes';
import PublicRoutes from './public.routes';

const Routes = () => {

	const isAuthenticated = useSelector<RootState, boolean>((state) => state.auth.isAuthenticated);

	return(
    { !isAuthenticated && <PublicRoutes/> }
    { isAuthenticated && <PrivateRoutes/> }
	);
};

export default Routes;
