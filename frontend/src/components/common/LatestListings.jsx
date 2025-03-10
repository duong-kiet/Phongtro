const LatestListings = () => {
  const listings = [
    {
      id: 1,
      title:
        "Cần 2 nữ ở ghép vào ở ngay. Đầy đủ nội thất tại Bình Thạnh. Chỉ 1, x triệu. LH: 092 102 7 ",
      price: "1.69 triệu/tháng",
      time: "25 phút trước",
      image:
        "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/01/27/z4064025740041-0c32a1d0197c20b63c64a57df8c64959_1674785592.jpg",
      label: "CHO THUÊ NHANH",
    },
    {
      id: 2,
      title:
        "Cần 2 nữ ở ghép vào ở ngay. Đầy đủ nội thất tại Bình Thạnh. Chỉ 1, x triệu. LH: 092 102 7 ",
      price: "4.2 triệu/tháng",
      time: "2 phút trước",
      image:
        "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/01/27/z4064025740041-0c32a1d0197c20b63c64a57df8c64959_1674785592.jpg",
      label: "CHO THUÊ NHANH",
    },
    {
      id: 3,
      title:
        "Cần 2 nữ ở ghép vào ở ngay. Đầy đủ nội thất tại Bình Thạnh. Chỉ 1, x triệu. LH: 092 102 7 ",
      price: "1.69 triệu/tháng",
      time: "28 phút trước",
      image:
        "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/01/27/z4064025740041-0c32a1d0197c20b63c64a57df8c64959_1674785592.jpg",
      label: "CHO THUÊ NHANH",
    },
    {
      id: 4,
      title:
        "Cần 2 nữ ở ghép vào ở ngay. Đầy đủ nội thất tại Bình Thạnh. Chỉ 1, x triệu. LH: 092 102 7 ",
      price: "7.9 triệu/tháng",
      time: "48 phút trước",
      image:
        "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/01/27/z4064025740041-0c32a1d0197c20b63c64a57df8c64959_1674785592.jpg",
    },
    {
      id: 5,
      title:
        "Cần 2 nữ ở ghép vào ở ngay. Đầy đủ nội thất tại Bình Thạnh. Chỉ 1, x triệu. LH: 092 102 7 ",
      price: "8.4 triệu/tháng",
      time: "4 phút trước",
      image:
        "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/01/27/z4064025740041-0c32a1d0197c20b63c64a57df8c64959_1674785592.jpg",
    },
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
          marginTop: "0",
          fontSize: "1.1vw",
        }}
      >
        Tin mới đăng
      </h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {listings.map((listing) => (
          <li
            key={listing.id}
            style={{
              display: "flex",
              marginBottom: "15px",
              borderBottom: "1px solid #ddd",
              paddingBottom: "10px",
            }}
          >
            <div style={{ position: "relative", marginRight: "10px" }}>
              <img
                src={listing.image}
                alt={listing.title}
                style={{ width: "5.5vw", height: "5.5vw", borderRadius: "5px" }}
              />
            </div>

            <div style={{ flex: 1 }}>
              <p
                style={{
                  margin: "0 0 5px 0",
                  fontSize: "1vw",
                  color: "#d9534f",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {listing.title}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p style={{ margin: "0", color: "green", fontSize: "1vw" }}>
                  {listing.price}
                </p>
                <p style={{ margin: "0", fontSize: "0.8vw", color: "#888" }}>
                  {listing.time}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestListings;
