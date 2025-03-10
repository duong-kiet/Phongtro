const LatestPosts = () => {
  const latestPosts = [
    "Hướng dẫn cách xem và tính tiền điện nước phòng trọ chuẩn",
    "Thuê phòng trọ cần những giấy tờ gì?",
    "Vì sao tiền điện nước trong phòng trọ thường cao hơn?",
    "Tiền cọc phòng trọ để làm gì? Có lấy lại được không?",
    "Định nghĩa phòng trọ là gì?",
    "Xu hướng thuê phòng trọ 2025: Người thuê muốn gì?",
  ];

  return (
    <div
      style={{
        background: "white",
        borderRadius: "8px",
        width: "100%",
        marginTop: "2vw",
        padding: "1vw",
      }}
    >
      <h3
        style={{
          color: "#333",
          fontWeight: 600,
          margin: "0",
          fontSize: "1.1vw",
        }}
      >
        Bài viết mới
      </h3>
      <ul style={{ listStyle: "none", padding: 0, marginTop: "0.2vw" }}>
        {latestPosts.map((post, index) => (
          <li key={index} style={{ color: "red", fontSize: "1vw" }}>
            <span style={{ fontSize: "1.2vw" }}> ›</span>{" "}
            <span style={{ color: "black" }}>{post}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const RecommendedPosts = () => {
  const recommendedPosts = [
    "Mẫu hợp đồng cho thuê phòng trọ",
    "Cẩn thận các kiểu lừa đảo khi thuê phòng trọ",
    "Kinh nghiệm thuê phòng trọ Sinh Viên",
  ];

  return (
    <div
      style={{
        background: "white",
        borderRadius: "8px",
        width: "100%",
        marginTop: "2vw",
        padding: "1vw",
      }}
    >
      <h3
        style={{
          color: "#333",
          fontWeight: 600,
          margin: "0",
          fontSize: "1.1vw",
        }}
      >
        Có thể bạn quan tâm
      </h3>
      <ul style={{ listStyle: "none", padding: 0, marginTop: "0.2vw" }}>
        {recommendedPosts.map((post, index) => (
          <li key={index} style={{ color: "red", fontSize: "1vw" }}>
            <span style={{ fontSize: "1.2vw" }}> ›</span>{" "}
            <span style={{ color: "black" }}>{post}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SideBar = () => {
  return (
    <div>
      <LatestPosts />
      <RecommendedPosts />
    </div>
  );
};

export default SideBar;
