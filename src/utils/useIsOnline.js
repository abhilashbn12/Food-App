import React, { useState, useEffect } from "react";

const useIsOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    const onlineHandler = () => {
        setIsOnline(true);
    }
    const offlineHandler = () => {
        setIsOnline(false);
    }

    useEffect(() => {
        window.addEventListener("online", onlineHandler);
        window.addEventListener("offline", offlineHandler);

        return () => {
            window.removeEventListener("online", onlineHandler);
            window.removeEventListener("offline", offlineHandler);
        }
    }, [])
    return isOnline;
}

export default useIsOnline;