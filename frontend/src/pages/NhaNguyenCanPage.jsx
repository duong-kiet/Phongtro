import PostCard from "../components/common/PostCard";
import PostStack from "../components/common/PostStack";
const NhaNguyenCanPage = () => {
  let mockData = [
    {
      title:
        "Phòng trọ ngay Thành Thái, trung tâm Quận 10, đẹp, trang bị đầy đủ nội thất",
      link: "https://phongtro123.com/phong-tro-ngay-thanh-thai-trung-tam-quan-10-dep-trang-bi-day-du-noi-that-pr612116.html",
      images: [
        "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/01/27/z4064025740041-0c32a1d0197c20b63c64a57df8c64959_1674785592.jpg",
        "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/01/27/z4064025765105-04e4c8e3b0c79ad50f7c6b1939162823_1674785595.jpg",
        "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/01/27/z4064025759263-7ca73cc7c52cfc53a6b4a9960f37d3f8_1674785596.jpg",
        "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/01/27/z4064025757084-0d37877ed5b25c44a86f2a31961b5db1_1674785595.jpg",
      ],
      rating: "5",
      price: "4.5 triệu/tháng",
      acrage: "25 m2",
      address: "Quận 10, Hồ Chí Minh",
      description:
        "Cho thuê phòng trọ ngay trung tâm Quận 10, gần ngay Vạn Hạnh Mall, trường đại học Bách Khoa, Huflit (5 phút đi bộ là tới), trường Đại học Y Dược Phạm…",
      author: "Việt 275 (*)",
      avatar: "https://phongtro123.com/images/default-user.svg",
      phone: "0938297275",
    },
    {
      title:
        "Phòng trọ ngay Thành Thái, trung tâm Quận 10, đẹp, trang bị đầy đủ nội thất",
      link: "https://phongtro123.com/phong-tro-ngay-thanh-thai-trung-tam-quan-10-dep-trang-bi-day-du-noi-that-pr612116.html",
      images: [
        "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/01/27/z4064025740041-0c32a1d0197c20b63c64a57df8c64959_1674785592.jpg",
        "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/01/27/z4064025765105-04e4c8e3b0c79ad50f7c6b1939162823_1674785595.jpg",
        "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/01/27/z4064025759263-7ca73cc7c52cfc53a6b4a9960f37d3f8_1674785596.jpg",
        "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/01/27/z4064025757084-0d37877ed5b25c44a86f2a31961b5db1_1674785595.jpg",
      ],
      rating: "5",
      price: "4.5 triệu/tháng",
      acrage: "25 m2",
      address: "Quận 10, Hồ Chí Minh",
      description:
        "Cho thuê phòng trọ ngay trung tâm Quận 10, gần ngay Vạn Hạnh Mall, trường đại học Bách Khoa, Huflit (5 phút đi bộ là tới), trường Đại học Y Dược Phạm…",
      author: "Việt 275 (*)",
      avatar: "https://phongtro123.com/images/default-user.svg",
      phone: "0938297275",
    },
    {
      title:
        "Phòng trọ ngay Thành Thái, trung tâm Quận 10, đẹp, trang bị đầy đủ nội thất",
      link: "https://phongtro123.com/phong-tro-ngay-thanh-thai-trung-tam-quan-10-dep-trang-bi-day-du-noi-that-pr612116.html",
      images: [
        "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/01/27/z4064025740041-0c32a1d0197c20b63c64a57df8c64959_1674785592.jpg",
        "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/01/27/z4064025765105-04e4c8e3b0c79ad50f7c6b1939162823_1674785595.jpg",
        "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/01/27/z4064025759263-7ca73cc7c52cfc53a6b4a9960f37d3f8_1674785596.jpg",
        "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/01/27/z4064025757084-0d37877ed5b25c44a86f2a31961b5db1_1674785595.jpg",
      ],
      rating: "5",
      price: "4.5 triệu/tháng",
      acrage: "25 m2",
      address: "Quận 10, Hồ Chí Minh",
      description:
        "Cho thuê phòng trọ ngay trung tâm Quận 10, gần ngay Vạn Hạnh Mall, trường đại học Bách Khoa, Huflit (5 phút đi bộ là tới), trường Đại học Y Dược Phạm…",
      author: "Việt 275 (*)",
      avatar: "https://phongtro123.com/images/default-user.svg",
      phone: "0938297275",
    },
  ];
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <div>
        <h3 style={{ color: "black", fontWeight: 600, fontSize: 22 }}>
          Kênh thông tin Phòng trọ số 1 Việt Nam
        </h3>
      </div>
      <PostStack posts={mockData}>
        {(post) => <PostCard key={post.link} post={post} />}
      </PostStack>
    </div>
  );
};
export default NhaNguyenCanPage;
