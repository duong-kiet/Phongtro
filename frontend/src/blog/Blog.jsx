// src/components/Blog.jsx
import React from "react";
import "./Blog.css"; // Nếu cần CSS riêng

const blogData = {
  header: {
    title: "Tin tức thị trường, chia sẻ kinh nghiệm Bất động sản",
  },
  posts: [
    {
      link: "https://phongtro123.com/thue-phong-tro-can-nhung-giay-to-gi.html",
      thumbnail:
        "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2025/02/21/thue-phong-tro-can-nhung-giay-to-gi_1740122970.png",
      title: "Thuê phòng trọ cần những giấy tờ gì?",
      category: "TIN TỨC THỊ TRƯỜNG",
      description:
        "Hiện nay, khi đi thuê phòng trọ, thì bạn chỉ cần mang theo Chứng minh nhân dân/Căn cước công dân (bản sao) là đã có thể thuê phòng trọ rồi - chủ yếu là…",
    },
    {
      link: "https://phongtro123.com/vi-sao-tien-dien-nuoc-trong-phong-tro-thuong-cao-hon.html",
      thumbnail:
        "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2025/02/19/vi-sao-tien-dien-nuoc-o-phong-tro-thuong-cao-hon_1739955806.png",
      title: "Vì sao tiền điện nước trong phòng trọ thường cao hơn?",
      category: "TIN TỨC THỊ TRƯỜNG",
      description:
        "Ai đã từng thuê trọ chắc không ít lần nhăn mặt khi nhận hóa đơn điện nước. Tiền điện, tiền nước mỗi tháng không dùng quá nhiều, mà giá lại khá là…",
    },
    // Thêm bài viết khác...
    {
      link: "https://phongtro123.com/tien-coc-phong-tro-de-lam-gi-co-lay-lai-duoc-khong.html",
      thumbnail:
        "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2025/02/18/tien-coc-phong-tro-de-lam-gi_1739862136.png",
      title: "Tiền cọc phòng trọ để làm gì? Có lấy lại được không?",
      category: "TIN TỨC THỊ TRƯỜNG",
      description:
        "Nhiều người có thắc mắc: “Tiền cọc phòng trọ để làm gì nhỉ? Đưa rồi có lấy lại được không?”Tiền cọc phòng trọ để làm gì? Có lấy lại…",
    },
    {
      link: "https://phongtro123.com/dinh-nghia-phong-tro-la-gi.html",
      thumbnail:
        "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2025/02/15/dinh-nghia-phong-tro-la-gi_1739608457.png",
      title: "Định nghĩa phòng trọ là gì?",
      category: "TIN TỨC THỊ TRƯỜNG",
      description:
        "Những ngày đầu xa nhà lên thành phố với một chiếc balo nhỏ, vài bộ quần áo, và số tiền mà mẹ gửi theo. Mẹ dặn: “Lên thành phố tìm một chỗ ở,…",
    },
    {
      link: "https://phongtro123.com/xu-huong-thue-phong-tro-2025-nguoi-thue-muon-gi.html",
      thumbnail:
        "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2025/02/14/xu-huong-thue-phong-tro-2025_1739523995.png",
      title: "Xu hướng thuê phòng trọ 2025: Người thuê muốn gì?",
      category: "TIN TỨC THỊ TRƯỜNG",
      description:
        "2025 rồi, ai còn nghĩ thuê trọ chỉ là tìm chỗ ăn, chỗ ngủ qua ngày? Thời buổi này thuê nhà cũng phải có “phong cách” riêng!Xu hướng thuê phòng trọ…",
    },
    {
      link: "https://phongtro123.com/bi-quyet-kinh-doanh-nha-tro-sieu-loi-nhuan-chi-voi-100m2-dat.html",
      thumbnail:
        "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/12/31/100m2-dien-tich-dat-xay-dung-duoc-bao-nhieu-phong-tro_1735638293.jpg",
      title: "Bí quyết kinh doanh nhà trọ siêu lợi nhuận chỉ với 100m² đất",
      category: "KINH NGHIỆM",
      description:
        "Kinh doanh cho thuê phòng trọ siêu lợi nhuận từ 100m2 đấtPhòng trọ bao nhiêu m² là hợp lý tại các thành phố lớn?1. Tính toán diện tích xây dựng…",
    },
    {
      link: "https://phongtro123.com/top-5-cau-hoi-khi-den-xem-phong-tro-sinh-vien-nen-hoi-chu-nha.html",
      thumbnail:
        "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/12/16/top-5-cau-hoi-nen-hoi-chu-nha-khi-xem-phong-tro_1734342402.jpg",
      title: "Top 5 câu hỏi khi đến xem phòng trọ sinh viên nên hỏi chủ nhà",
      category: "KINH NGHIỆM",
      description:
        "Top 5 câu hỏi nên hỏi chủ nhà khi đến xem phòng trọHiện trạng sinh viên tìm phòng trọ tại các thành phố lớnHiện nay, việc tìm phòng trọ cho sinh…",
    },
    {
      link: "https://phongtro123.com/vach-tran-thu-doan-cho-thue-phong-tro-gia-re-de-lua-tien-coc.html",
      thumbnail:
        "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/12/12/vach-tran-thu-doan-cho-thue-phong-tro-gia-re-lua-tien-coc_1733994343.jpg",
      title: "Vạch trần thủ đoạn cho thuê phòng trọ giá rẻ để lừa tiền cọc",
      category: "TIN TỨC THỊ TRƯỜNG",
      description:
        "Vạch trần thủ đoạn lừa tiền cọc phòng trọ giá rẻChia sẻ những câu chuyện thuê phòng trọ giá rẻDưới áp lực giá cho thuê chung cư và phòng trọ…",
    },
    {
      link: "https://phongtro123.com/gia-thue-phong-tro-tang-manh-sinh-vien-tim-cho-o-theo-xu-huong-yono.html",
      thumbnail:
        "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/12/09/gia-thue-phong-tro-tang-manh-sinh-vien-tim-cho-o-theo-xu-huong-yono_1733735283.jpg",
      title:
        "Giá thuê phòng trọ tăng mạnh, sinh viên tìm chỗ ở theo xu hướng 'YONO'",
      category: "TIN TỨC THỊ TRƯỜNG",
      description:
        "Sinh viên chật vật tìm phòng trọ giá rẻ mua nhập họcThực trạng giá phòng trọ tăng cao mùa nhập họcGiá phòng trọ tại các khu vực tập trung nhiều…",
    },
    {
      link: "https://phongtro123.com/con-sot-tang-gia-phong-tro-gan-tuyen-metro-sap-khai-truong.html",
      thumbnail:
        "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/12/02/con-sot-tang-gia-phong-tro-gan-tuyen-metro-sap-khai-truong_1733133003.png",
      title: '"Cơn sốt" tăng giá phòng trọ gần tuyến Metro sắp khai trương',
      category: "TIN TỨC THỊ TRƯỜNG",
      description:
        'Nhiều tin đăng phòng trọ với nội dung gần "metro" để kéo kháchThực trạng nhà trọ Hồ Chí Minh khi “metro” sắp khai trươngViệc tuyến metro sắp đi…',
    },
    {
      link: "https://phongtro123.com/sinh-vien-lao-dao-vi-gia-phong-tro-tphcm-cham-noc-mua-nhap-hoc.html",
      thumbnail:
        "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/11/28/sinh-vien-lao-dao-vi-gia-phong-tro-tphcm-cham-noc-mua-nhap-hoc_1732785880.jpg",
      title: "Sinh viên lao đao vì giá phòng trọ TPHCM 'chạm nóc' mùa nhập học",
      category: "TIN TỨC THỊ TRƯỜNG",
      description:
        "Sinh viên lao đao tìm nhà trọ giá rẻ TPHCM mùa nhập họcTình hình giá thuê phòng trọ TPHCM mùa nhập họcTheo khảo sát mới nhất của Phongtro123.com, giá…",
    },
    {
      link: "https://phongtro123.com/chu-nha-khoc-thet-vi-cho-thue-nha-mai-doi-khong-duoc.html",
      thumbnail:
        "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/11/16/chu-nha-khoc-thet-vi-cho-thue-nha-ma-khong-doi-duoc_1731748342.jpg",
      title: "Chủ nhà “khóc thét” vì cho thuê nhà mãi đòi không được",
      category: "TIN TỨC THỊ TRƯỜNG",
      description:
        "Vụ việc cho thuê nhà nhưng mãi không đòi được tại Cái Răng, Cần ThơCâu chuyện cho thuê nhà mãi đòi không đượcMột vụ việc kéo dài suốt gần 2…",
    },
    {
      link: "https://phongtro123.com/quy-dinh-an-toan-phong-chay-chua-chay-tai-cac-nha-tro-cho-thue.html",
      thumbnail:
        "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/07/11/quy-dinh-an-toan-phong-chay-chua-chay-tai-nha-tro-cho-thue_1720691139.jpg",
      title: "Vấn nạn an toàn phòng cháy chữa cháy tại các nhà trọ cho thuê",
      category: "TIN TỨC THỊ TRƯỜNG",
      description:
        "Quy định an toàn phòng cháy chữa cháy tại các nhà trọ cho thuêHiện trạng an toàn phòng cháy chữa cháy cho phòng trọ tại các thành phố lớn1. Thực…",
    },
    {
      link: "https://phongtro123.com/tien-dat-coc-thue-phong-tro-co-lay-lai-duoc-khong.html",
      thumbnail:
        "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/07/11/tien-coc-thue-tro-co-lay-lai-duoc-khong_1720661417.jpg",
      title: "Tiền đặt cọc thuê phòng trọ có lấy lại được không?",
      category: "HỎI ĐÁP",
      description:
        "Tiền cọc thuê trọ có lấy lại được không?Team tư vấn/CSKH Phongtro123 trả lời:Chào Hà Vy, cảm ơn bạn đã tin tưởng và gửi yêu cầu tư vấn đến…",
    },
    {
      link: "https://phongtro123.com/dong-tien-thue-phong-tro-dau-thang-hay-cuoi-thang.html",
      thumbnail:
        "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/07/10/dong-tien-tro-dau-thang-hay-cuoi-thang_1720575516.jpg",
      title: "Đóng tiền thuê phòng trọ đầu tháng hay cuối tháng?",
      category: "HỎI ĐÁP",
      description:
        " Đóng tiền trọ đầu tháng hay cuối tháng?Phongtro123 trả lời:Chào bạn, cảm ơn bạn đã gửi yêu cầu tư vấn đến trang web Phongtro123.com của chúng…",
    },
    {
      link: "https://phongtro123.com/lo-dien-top-5-khu-vuc-hot-nhat-de-thue-phong-tro-tai-tphcm.html",
      thumbnail:
        "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/07/06/top-5-khu-vuc-hot-nhat-thue-phong-tro-tphcm_1720236454.jpg",
      title: 'Lộ diện top 5 khu vực "hot" nhất để thuê phòng trọ tại TPHCM',
      category: "TIN TỨC THỊ TRƯỜNG",
      description:
        'Top 5 khu vực "hot nhất" để thuê phòng trọ tại TPHCMXu hướng tìm thuê và cho thuê phòng trọ TPHCM hiện nayTrong những năm trở lại đây, nhu cầu thuê và…',
    },
    {
      link: "https://phongtro123.com/quy-trinh-dang-ky-tam-tru-cho-nguoi-thue-phong-tro-moi-nhat.html",
      thumbnail:
        "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/01/19/dang-ky-tam-tru-cho-nguoi-thue-phong-tro_1705647964.jpg",
      title: "Quy trình đăng ký tạm trú cho người thuê phòng trọ mới nhất",
      category: "KINH NGHIỆM",
      description:
        "Quy trình đăng ký tạm trú chính xác dành cho người thuê phòng trọĐăng ký tạm trú là gì?Tạm trú là nơi công dân sinh sống trong một khoảng thời gian…",
    },
    {
      link: "https://phongtro123.com/thu-tuc-thue-phong-tro-chinh-xac-danh-cho-nguoi-nuoc-ngoai.html",
      thumbnail:
        "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/01/02/thu-tuc-thue-tro-danh-cho-nguoi-nuoc-ngoai_1704182042.jpg",
      title: "Thủ tục thuê phòng trọ chính xác dành cho người nước ngoài",
      category: "",
      description:
        "Thủ tục thuê phòng trọ chính xác dành cho người nước ngoàiĐiều kiện cho người nước ngoài thuê phòng trọTheo quy định tại Điều 119 Luật Nhà ở…",
    },
    {
      link: "https://phongtro123.com/cho-thue-phong-tro-co-can-dang-ky-giay-phep-kinh-doanh-hay-khong.html",
      thumbnail:
        "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2023/12/29/dang-ky-giay-phep-kinh-doanh-phong-tro_1703823377.jpg",
      title:
        "Cho thuê phòng trọ có cần đăng ký giấy phép kinh doanh hay không?",
      category: "",
      description:
        "Cho thuê phòng trọ cần đăng ký giấy phép kinh doanh không?Đăng ký giấy phép kinh doanh là gì?Giấy phép kinh doanh là một loại giấy tờ pháp lý do cơ quan…",
    },
    {
      link: "https://phongtro123.com/kinh-doanh-cho-thue-phong-tro-can-dong-nhung-loai-thue-nao.html",
      thumbnail:
        "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2023/12/26/kinh-doanh-cho-thue-phong-tro-can-dong-thue-khong_1703562815.jpg",
      title: "Kinh doanh cho thuê phòng trọ cần đóng những loại thuế nào?",
      category: "KINH NGHIỆM",
      description:
        "Cho thuê phòng trọ cần nộp những loại phí nào?Mô hình kinh doanh cho thuê phòng trọKinh doanh cho thuê phòng trọ là hoạt động thương mại, trong đó chủ…",
    },
    {
      link: "https://phongtro123.com/sinh-vien-ha-noi-nen-o-tro-hay-ky-tuc-xa-can-luu-y-dieu-gi-khi-thue-tro.html",
      thumbnail:
        "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2023/12/23/nen-thue-nha-tro-hay-ky-tuc-xa-tai-ha-noi_1703303460.jpg",
      title:
        "Sinh viên Hà Nội nên ở trọ hay ký túc xá? Cần lưu ý điều gì khi thuê trọ?",
      category: "KINH NGHIỆM",
      description:
        "So sánh loại hình phòng trọ và ký túc xá tại Hà Nội1. Ưu nhược điểm của phòng trọ Hà NộiƯu điểm- Tự do, thoải mái: Khi thuê phòng trọ, bạn sẽ…",
    },
  ],
};

const Blog = () => {
  return (
    <div className="blog-container">
      <h1>{blogData.header.title}</h1>
      <div className="blog-grid">
        {blogData.posts.map((post, index) => (
          <div className="blog-card" key={index}>
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              <img
                src={post.thumbnail}
                alt={post.title}
                className="blog-thumbnail"
              />
            </a>
            <div className="blog-content">
              <p className="blog-category">{post.category}</p>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <h2 className="blog-title">{post.title}</h2>
              </a>
              <p className="blog-description">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blog;
