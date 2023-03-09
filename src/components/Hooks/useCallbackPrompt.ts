import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useBlocker } from './index';

function useCallbackPrompt(when: boolean): Array<boolean | (() => void)> {
  const [show, setShow] = useState(true);
  const [lastLocation, setLastLocation] = useState<any>(null);
  const [confirmedNavigation, setConfirmedNavigation] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const cancelNavigation = useCallback(() => {
    setShow(false);
  }, []);

  const handleBlockedNavigation = useCallback(
    (nextLocation: any) => {
      if (!confirmedNavigation && nextLocation.location.pathname !== location.pathname) {
        setShow(false);
        setLastLocation(nextLocation);
        return false;
      }
      return true;
    },
    [confirmedNavigation]
  );

  const confirmNavigation = useCallback(() => {
    setShow(true);
    setConfirmedNavigation(true);
  }, []);

  useEffect(() => {
    if (confirmedNavigation && lastLocation != null) {
      navigate(lastLocation.location.pathname);
    }
  }, [confirmedNavigation, lastLocation]);

  useBlocker(handleBlockedNavigation, when);

  return [show, confirmNavigation, cancelNavigation];
}

export default useCallbackPrompt;
