import { Col, Image } from "antd";
import React from "react";

import {
  WrapperFooter,
  WrapperTextFooter,
  WrapperTextFooterSmall,
  WrapperText,
  WrapperText1,
} from "./style";
import { PhoneOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import logoImage from "../../Assets/Images/logo/logo.png";
const FooterComponent = () => {
  const navigate = useNavigate();

  const handleClickNavigate = (type) => {
    if (type === "about") {
      navigate("/about");
    } else if (type === "COD") {
      navigate("/COD");
    } else if (type === "rule") {
      navigate("/rule");
    } else if (type === "guide") {
      navigate("/guide");
    } else if (type === "policy") {
      navigate("/policy");
    } else if (type === "contact") {
      navigate("/contact");
    }
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <WrapperFooter>
        <Col span={10}>
          <Image
            src={logoImage}
            style={{
              cursor: "pointer",
            }}
            alt="Logo Image"
            preview={false}
            onClick={() => navigate("/")}
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            <PhoneOutlined style={{ fontSize: "45px", paddingRight: 10 }} />
            <div>
              <WrapperText1>Econutri Hỗ Trợ Tư Vấn 24/7</WrapperText1>
              <WrapperTextFooterSmall>
                <a
                  class="link"
                  href="tel:0981523790"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  0981 523 790
                </a>
              </WrapperTextFooterSmall>
              <WrapperTextFooterSmall> - </WrapperTextFooterSmall>
              <WrapperTextFooterSmall>
                <a
                  href="tel:0837937750"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  0837 937 750
                </a>
              </WrapperTextFooterSmall>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <WrapperTextFooter>HỖ TRỢ KHÁCH HÀNG</WrapperTextFooter>
          <WrapperText onClick={() => handleClickNavigate("policy")}>
            Chính sách đổi trả
          </WrapperText>
          <WrapperText onClick={() => handleClickNavigate("guide")}>
            Hướng dẫn mua hàng
          </WrapperText>
          <WrapperText onClick={() => handleClickNavigate("COD")}>
            Giao hàng & thanh toán
          </WrapperText>
          <WrapperText onClick={() => handleClickNavigate("rule")}>
            Điều khoản sử dụng
          </WrapperText>
        </Col>
        <Col span={8}>
          <WrapperTextFooter>VỀ CHÚNG TÔI </WrapperTextFooter>
          <WrapperText onClick={() => handleClickNavigate("about")}>
            Giới thiệu
          </WrapperText>
          <WrapperText onClick={() => handleClickNavigate("contact")}>
            Liên hệ
          </WrapperText>
          <WrapperTextFooter>MẠNG XÃ HỘI</WrapperTextFooter>
          <WrapperText>
            <a
              href="https://www.facebook.com/profile.php?id=61553987947106"
              style={{
                color: "#56493d",
                textDecoration: "none",
              }}
            >
              Facebook
            </a>
          </WrapperText>
        </Col>
      </WrapperFooter>
    </div>
  );
};

export default FooterComponent;
