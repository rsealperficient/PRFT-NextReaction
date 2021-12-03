import { createContext, useContext } from 'react';

const ConfigContext = createContext();

export function useConfig() {
	return useContext(ConfigContext);
}

const value = {
	themes: ['light', 'dark'],
};

export function ConfigProvider({ children }) {
	return (
		<ConfigContext.Provider value={value}>
			{children}
		</ConfigContext.Provider>
	);
}
