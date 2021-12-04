import React from 'react';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { ConfigProvider } from 'contexts/ConfigContext';
import { AuthProvider } from 'contexts/AuthContext';

import Home from 'components/home/home'
import Signup from 'components/account/signup';
import Login from 'components/account/login';
import ForgotPassword from 'components/account/forgot-password';
import Profile from 'components/account/profile';
import Participants from 'components/participants/participants';
import ParticipantAdd from 'components/participants/participant-add';

import Layout from './layout/Layout'

const pageToShow = (pageName, props) => {
	if (pageName === 'home') return <Home props={props} />;
	if (pageName === 'signup') return <Signup props={props} />;
	if (pageName === 'login') return <Login props={props} />;
	if (pageName === 'forgot-password') return <ForgotPassword props={props} />;
	if (pageName === 'profile') return <Profile props={props} />;
	if (pageName === 'participants') return <Participants props={props} />;
	if (pageName === 'participant-add') return <ParticipantAdd props={props} />;
	return <div>Not Found</div>;
};

const App = ({ pageName, props = null }) => {
	return (
		<SSRProvider>
			<ConfigProvider>
				<AuthProvider>
					<Layout>{pageToShow(pageName, props)}</Layout>
				</AuthProvider>
			</ConfigProvider>
		</SSRProvider>
	);
};

export default App;
