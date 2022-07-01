import { useEffect } from 'react';

export const useCloseModalWindow = ({
                                        modalRef,
                                        isVisible,
                                        closeHandler,
                                    }) => {
    const body = document.getElementsByTagName('body')[0];

    const closeListeners = (event) => {
        if (
            modalRef.current &&
            !modalRef.current.contains(event.target) &&
        body?.contains(event.target)
    )
        closeHandler();
    };

    useEffect(() => {
        const appContainer = document.getElementById('root');

        if (isVisible) {
            appContainer?.addEventListener('click', closeListeners, true);
        } else {
            appContainer?.removeEventListener('click', closeListeners, false);
        }

        return () => appContainer?.removeEventListener('click', closeListeners, true);
    }, [isVisible, modalRef]);

    return closeHandler;
};
