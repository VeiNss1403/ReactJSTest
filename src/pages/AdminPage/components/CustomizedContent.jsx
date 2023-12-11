import {
  UserOutlined,
  AppstoreOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import Loading from "../../../components/LoadingComponent/Loading";

const CustomizedContent = (props) => {
  const { data, colors, setKeySelected } = props;
  return (
    <div style={{ display: "flex", gap: "40px", justifyContent: "center" }}>
      {Object.keys(data).map((item) => {
        return (
          <div
            key={item}
            style={{
              width: 300,
              background: `linear-gradient(${
                colors[item] && colors[item][0]
              }, ${colors[item] && colors[item][1]})`,
              height: 200,
              gap: 20,
              borderRadius: "10px",
              cursor: "pointer",
              textAlign: "center",
            }}
            onClick={() => setKeySelected(item)}
          >
            <div style={{ marginTop: 54 }}>
              <span style={{ color: "#fff", fontSize: 30, marginRight: 4 }}>
                {item === "users" && <UserOutlined />}
                {item === "products" && <AppstoreOutlined />}
                {item === "orders" && <ShoppingCartOutlined />}
              </span>
              <span
                style={{
                  color: "#fff",
                  fontSize: 30,
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                {item}
              </span>
            </div>

            <Loading isLoading={!(data?.[item] || data?.[item] === 0)} style={{marginTop:30}}>
              <div
                style={{
                  color: "#fff",
                  fontSize: 48,
                  fontWeight: "bold",
                  lineHeight: "50px",
                }}
              >
                {data?.[item]}
              </div>
            </Loading>
          </div>
        );
      })}
    </div>
  );
};

export default CustomizedContent;
