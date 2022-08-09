import './App.css';
import useSizing from "./hooks/useSizing";
import Mobile from "./components/mobile/Mobile";
import Desktop from "./components/desktop/Desktop";
import Laptop from "./components/laptop/Laptop";
import BigScreen from "./components/big-screen/BigScreen";
import TabletMobile from "./components/tablet-mobile/TabletMobile";

function App() {
  const {isBigScreen, isDesktop, isLaptop, isMobileDevice, isTabletDevice} = useSizing();
  return (
    <>
      <h1>React Responsive - a guide</h1>
      {isMobileDevice && <Mobile />}
      {isTabletDevice && (
        <>
          <TabletMobile />
          {isDesktop && <Desktop />}
          {isLaptop && <Laptop />}
          {isBigScreen && <BigScreen />}
        </>
      )}
    </>
  );
}

export default App;
