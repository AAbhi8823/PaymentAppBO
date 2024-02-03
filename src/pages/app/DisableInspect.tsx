import React, { useEffect } from 'react';
import { ReactToastify } from '@app/components';

const DisableInspect: React.FC = () => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.ctrlKey) {
                const restrictedKeys = ['s', 'S', 'c', 'C', 'e', 'E', 'i', 'I', 'k', 'K', 'u', 'U'];
                if (restrictedKeys.includes(event.key)) {
                    event.preventDefault();
                    ReactToastify("Restricted Action", "error")
                }
            }
        };

        const handleContextMenu = (event: MouseEvent) => {
            event.preventDefault();
        };

        window.addEventListener('keydown', handleKeyDown);
        document.addEventListener('contextmenu', handleContextMenu);

        // Cleanup function to remove event listeners when the component unmounts
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('contextmenu', handleContextMenu);
        };
    }, []);

    return <></>;
};

export default DisableInspect;