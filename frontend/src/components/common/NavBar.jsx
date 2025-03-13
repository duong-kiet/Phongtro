import { Search, Filter, Heart, Folder, User, Pencil } from "lucide-react";

import { Link, useLocation } from "react-router-dom";

const categories = [
  { category: "Phòng trọ", link: "/" },
  { category: "Nhà nguyên căn", link: "/nha-cho-thue" },
  { category: "Căn hộ chung cư", link: "/cho-thue-can-ho" },
  { category: "Căn hộ mini", link: "/cho-thue-can-ho-chung-cu-mini" },
  { category: "Căn hộ dịch vụ", link: "/cho-thue-can-ho-dich-vu" },
  { category: "Ở ghép", link: "/tim-nguoi-o-ghep" },
];

const Navbar = () => {
  const location = useLocation();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.6vw 0 0 0 ",
        backgroundColor: "#fff",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div
        style={{
          width: "90%",
          borderBottom: "1px solid #ddd",
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "0.6vw",
        }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: "1.3vw",
                fontWeight: "bold",
                color: "#007BFF",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              PHONGTRO<span style={{ color: "red" }}>123</span>
              <span style={{ color: "#999" }}>.COM</span>
            </span>
            <span
              style={{ fontSize: "0.68vw", color: "#666", fontWeight: "bold" }}
            >
              Kênh thông tin phòng trọ số 1 Việt Nam
            </span>
          </div>
          {/* Search + Filter */}
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <div
              style={{
                margin: "0 2vw",
                display: "flex",
                alignItems: "center",
                gap: "0.3vw",
                backgroundColor: "#F3F4F6",
                padding: "0.5vw 6vw 0.5vw 1.5vw",
                borderRadius: "50px",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Search size={16} color="#666" />
              <span style={{ fontSize: "1vw", color: "#666" }}>
                Tìm theo khu vực
              </span>
            </div>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.3vw",
                border: "1px solid #ddd",
                borderRadius: "50px",
                padding: "0.5vw 0.8vw",
                backgroundColor: "#fff",
                cursor: "pointer",
              }}
            >
              <Filter color={"#666"} size={16} />
              <span style={{ fontSize: "0.9vw", color: "#666" }}>Bộ lọc</span>
            </button>
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              gap: "30px",
              alignItems: "center",
              color: "black",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Heart size={18} />
              <span style={{ fontSize: "1vw" }}>Tin đã lưu</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Folder size={18} />
              <span style={{ fontSize: "1vw" }}>Quản lý</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  border: "1px solid #ddd",
                  borderRadius: "50%",
                  padding: "8px",
                  backgroundColor: "#F3F4F6",
                  margin: "0 1vw",
                }}
              >
                <User color="black" size={18} />
              </button>
              <span style={{ fontSize: "1vw" }}>Tài khoản</span>
            </div>

            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                backgroundColor: "#E60012",
                color: "#fff",
                borderRadius: "50px",
                padding: "10px 15px",
                fontSize: "1vw",
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
              }}
            >
              <Pencil size={16} />
              Đăng tin
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "74%",
          display: "flex",
          justifyContent: "flex-start",
          paddingTop: "5px",
          //border: "1px solid black",
          height:"100%"
        }}
      >
        {categories.map((item, index) => {
          const isActive = location.pathname === item.link;
          return (
            <Link
              key={index}
              to={item.link}
              style={{
                textDecoration: "none",
                color: isActive ? "#d32f2f" : "black",
                fontWeight: "normal",
                padding: "0px 15px",
                fontSize: "1vw",
                position: "relative",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                alignContent: "space-between",
                alignItems: "space-between",
              }}
            >
              <div>{item.category}</div>
              {isActive && (
                <div
                  style={{
                    width: "100%",
                    height: "2px",
                    backgroundColor: "#d32f2f",
                    left: "0",
                    marginTop: "0.5vw"
                  }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
