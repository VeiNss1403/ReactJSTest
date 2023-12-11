import React from "react";
import { WrapperHeader, Text, TextItalic, TextTitle, Text1 } from "./style";
import { LineOutlined, CaretRightFilled } from "@ant-design/icons";

const AboutPage = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "#efefef",
        minHeight: "100vh",
        marginBottom: 30,
      }}
    >
      <div
        style={{
          width: "1270px",
          margin: "0 auto",
          paddingBottom: "30px",
          marginLeft: "150px",
          paddingRight: 0,
        }}
      >
        <WrapperHeader>Giới thiệu </WrapperHeader>
        <TextItalic>
          Cám ơn bạn đã ghé qua Trang Giới Thiệu của Econutri – Hệ thống chuyên
          phân phối các sản phẩm chăm sóc sức khoẻ và sắc đẹp dành cho người
          Việt.
        </TextItalic>
        <Text>
          <LineOutlined />
        </Text>
        <Text>
          <span style={{ fontWeight: 600 }}>Econutri</span> là một trang web
          chuyên cung cấp thực phẩm chức năng và sản phẩm liên quan đến sức khỏe
          và dinh dưỡng. Chúng tôi
          <span style={{ fontWeight: 600 }}> cam kết </span>
          mang đến cho khách hàng những
          <span style={{ fontWeight: 600 }}>
            {" "}
            sản phẩm chất lượng và an toàn{" "}
          </span>
          để cải thiện sức khỏe và chất lượng cuộc sống.
        </Text>
        <TextTitle>
          Econutri.vn – Chuyên Phân Phối Lẻ Sản Phẩm Chăm Sóc Sức Khoẻ và Làm
          Đẹp Dành Cho Người Việt
        </TextTitle>
        <Text>
          <Text1>Econutri cam kết</Text1>
          Cung cấp các
          <span style={{ fontWeight: 600 }}>
            {" "}
            sản phẩm thực phẩm chức năng chất lượng
          </span>
          , được sản xuất bởi các nhà cung cấp uy tín và tuân thủ các
          <span style={{ fontWeight: 600 }}>
            {" "}
            tiêu chuẩn an toàn và chất lượng cao
          </span>
          . Chúng tôi mong muốn giúp khách hàng cải thiện sức khỏe và phong cách
          sống thông qua việc cung cấp các sản phẩm chức năng hiệu quả.
        </Text>
        <Text1>
          Các sản phẩm <span style={{ fontWeight: 600 }}>Econutri.vn</span> cung
          cấp, bao gồm:
        </Text1>
        <Text>
          <CaretRightFilled />
          Thực phẩm chức năng bổ sung Vitamin và khoáng chất
        </Text>
        <Text>
          <CaretRightFilled />
          Dược Mỹ Phẩm: Sản phẩm chăm sóc sức khỏe và làm đẹp
        </Text>
        <Text>
          <CaretRightFilled />
          Thảo dược quý tự nhiên
        </Text>
        <Text>
          <CaretRightFilled />
          Thiết bị chăm sóc sức khoẻ gia đình
        </Text>
        <Text>
          <CaretRightFilled />
          Sản phẩm chăm sóc cá nhân cơ bản
        </Text>
        <Text1>
          Ngoài những cam kết đã nêu trên, đến với Econutri.vn, bạn còn nhận
          được <span style={{ fontWeight: 600 }}>2 QUYỀN LỢI</span>:
        </Text1>
        <Text>
          1/ Hỗ trợ <span style={{ fontWeight: 600 }}>giao hàng tận nhà</span>,
          hướng dẫn sử dụng trực tiếp
        </Text>
        <Text>
          2/ Đồng hành mọi lúc bạn cần qua
          <span style={{ fontWeight: 600 }}> tổng đài miễn cước</span> . Tư vấn
          miễn phí mọi vấn đề liên quan đến sức khoẻ. Có
          <span style={{ fontWeight: 600 }}>
            {" "}
            chăm sóc viên hỗ trợ riêng qua Facebook.
          </span>
        </Text>
        <Text1>Tầm Nhìn – Sứ Mệnh – Giá Trị Cốt Lõi</Text1>
        <Text>
          <span style={{ fontWeight: 600, lineHeight: 2 }}>Tầm Nhìn: </span>
          Trang web của chúng tôi thúc đẩy một cuộc sống khỏe mạnh và hạnh phúc
          cho mọi người. Chúng tôi tin rằng sức khỏe và dinh dưỡng là nền tảng
          của cuộc sống thịnh vượng và muốn mang lại sự cải thiện rõ rệt cho sức
          khỏe của mọi khách hàng.
        </Text>
        <Text>
          <span style={{ fontWeight: 600, lineHeight: 2 }}>Sứ Mệnh: </span>
          Sứ mệnh của chúng tôi là cung cấp các sản phẩm thực phẩm chức năng
          chất lượng cao và thông tin dinh dưỡng đáng tin cậy để giúp mọi người
          thúc đẩy sức khỏe và chất lượng cuộc sống của họ. Chúng tôi cam kết
          cung cấp sự hỗ trợ tận tâm và tư vấn dinh dưỡng chuyên nghiệp để khách
          hàng có thể đạt được mục tiêu sức khỏe của họ.
        </Text>
        <Text>
          <span style={{ fontWeight: 600, lineHeight: 2 }}>
            Giá Trị Cốt Lõi:{" "}
          </span>
          Chuyên nghiệp tư vấn, Chân thành hỗ trợ, Lạc quan chia sẻ.
        </Text>
      </div>
    </div>
  );
};

export default AboutPage;
