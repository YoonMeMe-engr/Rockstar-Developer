import { useState, createContext, useContext } from "react";

const UIStateContext = createContext();

export function useUIState() {
	return useContext(UIStateContext);
}

export default function UIStateProvider({ children }) {
	const [notiCount, setNotiCount] = useState(0);
	const [openDrawer, setOpenDrawer] = useState(false);
	const [openFeedback, setOpenFeedback] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState("");

	return (
		<UIStateContext.Provider
			value={{
				openDrawer,
				setOpenDrawer,
				openFeedback,
				setOpenFeedback,
                feedbackMessage,
                setFeedbackMessage,
                notiCount,
                setNotiCount,
			}}>
			{children}
		</UIStateContext.Provider>
	);
}
