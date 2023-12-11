import React from "react";
import { Col, Row } from "antd";
import { WrapperHeader, TextItalic, Text, TextItalic1 } from "./style";
import { redirect } from "react-router";

const ContactPage = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "#efefef",
        marginBottom: 0,
      }}
    >
      <div
        style={{
          width: "1270px",
          margin: "0 auto",
          paddingBottom: "100px",
          marginLeft: "200px",
          paddingRight: 100,
        }}
      >
        <WrapperHeader> Liên Hệ </WrapperHeader>
        <Row>
          <Col span={12}>
            <TextItalic>
              Quý khách có nhu cầu liên lạc, trao đổi hoặc đóng góp ý kiến, vui
              lòng tham khảo các thông tin sau:
            </TextItalic>
            <Text>
              <span style={{ color: "red", fontWeight: 600 }}>Điện thoại:</span>{" "}
              0981 523 7901 hoặc 0837 937 750{" "}
            </Text>
            <Text>
              <span style={{ color: "red", fontWeight: 600 }}>Email:</span>{" "}
              kookie160501@gmail.com
            </Text>
            <Text>
              <span style={{ color: "red", fontWeight: 600 }}>Social:</span>
            </Text>
          </Col>
          <Col span={12}>
            <div
              style={{
                width: "100%",
                background: "#00adb5",
                paddingLeft: 15,
              }}
            >
              <TextItalic1>
                <span style={{ fontWeight: 600, color: "white" }}>
                  Đối tác có nhu cầu hợp tác quảng cáo hoặc kinh doanh:
                </span>{" "}
                kookie160501@gmail.com
              </TextItalic1>
              <TextItalic1>
                (Tham khảo{" "}
                <span style={{ color: "black" }}>
                  hướng dẫn đổi, trả, bảo hành
                </span>{" "}
                hoặc <span style={{ color: "black" }}>liên hệ</span>{" "}
                <span>
                  <a
                    class="link"
                    href="tel:0981523790"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    0981 523 790
                  </a>
                </span>{" "}
                để được hướng dẫn trước khi gửi sản phẩm về vivita.vn).
              </TextItalic1>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default ContactPage;
