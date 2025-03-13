import { Search, Filter, Heart, Folder, User, Pencil } from "lucide-react";
const PostCard = ({ post }) => {
  if (!post || !post.images || post.images.length < 3) {
    return <div>Không có dữ liệu hiển thị</div>;
  }

  return (
    <div
      style={{
        width: "100%",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        backgroundColor: "white",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        justifyContent: "center",
        marginTop: "2vw",
      }}
    >
      <div style={{ width: "95%", margin: "1vw 0" }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "stretch",
          }}
        >
          <div style={{ width: "55%" }}>
            <img
              src={post.images[0]}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "6px 0 0 6px",
                objectFit: "cover",
              }}
            />
          </div>
          <div
            style={{
              width: "44%",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <img
              src={post.images[1]}
              style={{
                width: "100%",
                height: "10vw",
                borderRadius: "0 6px 0 0",
                objectFit: "cover",
              }}
            />
            <img
              src={post.images[2]}
              style={{
                width: "100%",
                height: "10vw",
                borderRadius: "0 0 6px 0 ",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div>
          <div style={{ paddingTop: "0.5vw" }}>
            <h3
              style={{
                color: "red",
                fontSize: "1.1vw",
                fontWeight: "900",
                textTransform: "uppercase",
              }}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "red" }}
              >
                {post.title}
              </a>
            </h3>
            <div
              style={{
                marginTop: "-1.5vw",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <p
                style={{ color: "green", fontSize: "0.9vw", fontWeight: "bold" }}
              >
                {post.price} &nbsp;
              </p>
              <p style={{ color: "gray", fontSize: "0.9vw" }}>
                {"-"}&nbsp; {post.acrage} &nbsp;{"-"} &nbsp;{post.address}
              </p>
            </div>

            <p
              style={{
                marginTop: "0vw",
                fontSize: "0.9vw",
                color: "#8b8f92",
                fontWeight: "100",
              }}
            >
              {post.description}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "2.7vw",
                    height: "2.7vw",
                    border: "solid 1px #c7cbce ",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={post.avatar}
                    alt="Người đăng"
                    style={{
                      width: "2.5vw",
                      height: "2.5vw",
                      borderRadius: "50%",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "0.5vw",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: "0.9vw", color: "#3d4042" }}>
                    {post.author}
                  </span>
                  <span style={{ fontSize: "0.9vw", color: "white" }}>
                    {post.author}
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                }}
              >
                <a
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "0.3vw 0.6vw ",
                    backgroundColor: "green",
                    color: "white",
                    borderRadius: "5px",
                    textDecoration: "none",
                    fontSize: "0.9vw",
                    marginRight: "30px",
                  }}
                >
                  📞 {post.phone}
                </a>
                <Heart color={"black"} size={24} strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
