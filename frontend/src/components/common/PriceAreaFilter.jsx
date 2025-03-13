const PriceAreaFilter = () => {
  const priceRanges = [
    "Dưới 1 triệu",
    "Từ 1 - 2 triệu",
    "Từ 2 - 3 triệu",
    "Từ 3 - 5 triệu",
    "Từ 5 - 7 triệu",
    "Từ 7 - 10 triệu",
    "Từ 10 - 15 triệu",
    "Trên 15 triệu",
  ];

  const areaRanges = [
    "Dưới 20 m²",
    "Từ 20 - 30m²",
    "Từ 30 - 50m²",
    "Từ 50 - 70m²",
    "Từ 70 - 90m²",
    "Trên 90m²",
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
      {/* Khoảng giá */}
      <div
        style={{
          color: "#333",
          fontWeight: 600,
          margin: "0",
          fontSize: "1.1vw",
        }}
      >
        Xem theo khoảng giá
      </div>
      <div style={{ display: "flex", marginTop: "-1vw" }}>
        <ul style={{ listStyle: "none", padding: 0, flex: 1 }}>
          {priceRanges.slice(0, priceRanges.length / 2).map((item, index) => (
            <li key={index} style={{ color: "red", fontSize: "1vw" }}>
              <span style={{ fontSize: "1.2vw" }}> ›</span>{" "}
              <span style={{ color: "black" }}>{item}</span>
            </li>
          ))}
        </ul>
        <ul style={{ listStyle: "none", padding: 0, flex: 1 }}>
          {priceRanges.slice(priceRanges.length / 2).map((item, index) => (
            <li key={index} style={{ color: "red", fontSize: "1vw" }}>
              <span style={{ fontSize: "1.2vw" }}> ›</span>{" "}
              <span style={{ color: "black" }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Diện tích */}
      <h3
        style={{
          color: "#333",
          margin: "0",
          fontSize: "1.1vw",
          fontWeight: 600,
        }}
      >
        Xem theo diện tích
      </h3>
      <div style={{ display: "flex", marginTop: "-1vw" }}>
        <ul style={{ listStyle: "none", padding: 0, flex: 1 }}>
          {areaRanges.slice(0, areaRanges.length / 2).map((item, index) => (
            <li key={index} style={{ color: "red", fontSize: "1vw" }}>
              <span style={{ fontSize: "1.2vw" }}> ›</span>{" "}
              <span style={{ color: "black" }}>{item}</span>
            </li>
          ))}
        </ul>
        <ul style={{ listStyle: "none", padding: 0, flex: 1 }}>
          {areaRanges.slice(areaRanges.length / 2).map((item, index) => (
            <li key={index} style={{ color: "red", fontSize: "1vw" }}>
              <span style={{ fontSize: "1.2vw" }}> ›</span>{" "}
              <span style={{ color: "black" }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PriceAreaFilter;
