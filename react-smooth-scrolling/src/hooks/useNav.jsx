import { useRef } from "react";
import { useOnScreen } from "./useOnScreen";
import { useContext } from "react";
import { NavContext } from "../context/NavContext";
import { useEffect } from "react";

export const useNav = (navLinkId) => {
  const ref = useRef(null);

  const { setActiveLinkId } = useContext(NavContext);

  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    if (isOnScreen) {
      setActiveLinkId(navLinkId);
    }
  }, [isOnScreen, setActiveLinkId, navLinkId]);

  return ref;
};
