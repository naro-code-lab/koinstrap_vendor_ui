import "@expo/match-media";

import { useMediaQuery } from "react-responsive";

export default function useScreenSize() {
  const isTabletOrMobileDevice = useMediaQuery({
    maxDeviceWidth: 992,
  });
  return isTabletOrMobileDevice;
}
