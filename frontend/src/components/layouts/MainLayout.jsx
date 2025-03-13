import { Outlet } from "react-router-dom";
import NavBar from "../common/NavBar";
import PriceAreaFilter from "../common/PriceAreaFilter";
import SideBar from "../common/SideBar";
import LatestListings from "../common/LatestListings";

const MainLayout = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        overflowX: "hidden",
        width: "98.98vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100%",
          //  height: "8vw",
          backgroundColor: "white",
        }}
      >
        <NavBar />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          backgroundColor: "#fdf5ed",
        }}
      >
        <div
          style={{
            marginLeft: "13%",
            marginRight: "2%",
            width: "50%",
          }}
        >
          <Outlet />
        </div>
        <div
          style={{
            mariginTop: "5vw",
            marginRight: "15%",
            width: "22%",
          }}
        >
          <PriceAreaFilter />
          <LatestListings />
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
