import React from "react";
import { Image } from "antd";
import { WrapperHeader, Text, Header, Header1 } from "./style";

const GuidePage = () => {
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
        <WrapperHeader>Hướng Dẫn Mua Hàng</WrapperHeader>
        <Text></Text>
        <Header>HƯỚNG DẪN MUA HÀNG TẠI ECONUTRI</Header>
        <Text>
          Nhằm giúp cho khách hàng mua hàng nhanh chóng, thuận tiện. Econutri
          xin chia sẻ cho quý khách 3 bước đặt hàng như sau:
        </Text>
        <Header1>Cách 1: Nhấn nút mua ngay để đặt hàng</Header1>
        <Text>
          <span style={{ fontWeight: "bold" }}>Bước 1:</span> Chọn sản phẩm bạn
          muốn mua.
        </Text>
        <Text>
          <span style={{ fontWeight: "bold" }}>Bước 2:</span> Nhấn vào nút MUA
          NGAY.
        </Text>
        <Text>
          <span style={{ fontWeight: "bold" }}>Bước 3:</span> Điền đầy đủ thông
          tin vào form bên dưới gồm: tên bạn, số điện thoại, email, địa chỉ nhà.
        </Text>
        <Text>
          <span style={{ fontWeight: "bold" }}>Bước 4:</span> Nhấn nút “Tiến
          Hàng Đặt Hàng” là hoàn thành việc mua hàng. Nhân viên tư vấn sẽ gọi
          điện lại và xác nhận đơn hàng của bạn.
        </Text>
        <Header1>Cách 2: Gọi điện thoại vào hotline</Header1>
        <Text>
          Gọi điện trực tiếp cho tư vấn viên của Econutri qua Hotline 0122 8800
          hoặc số điện thoại 0981 523 790 để được tư vấn miễn phí.
        </Text>
        <Header1>Cách 3: Chat với tư vấn viên</Header1>
        <Text>
          <span style={{ fontWeight: "bold" }}>Bước 1:</span> Truy cập vào
          Website ECONUTRI.
        </Text>
        <Text>
          <span style={{ fontWeight: "bold" }}>Bước 2:</span> Nhấp vào hình dược
          sĩ ở góc phải bên dưới màn hình.
        </Text>
        <Text>
          Lúc này bạn có thể hỏi những vấn đề bạn đang thắc mắc với dược sĩ của
          công ty hoặc nhắn tin đặt hàng qua phương thức này.
        </Text>
        <Text style={{ fontStyle: "italic" }}>
          Lưu ý: Khi tắt website thì sẽ không nhắn tin được với tư vấn viên nữa.
        </Text>
        <Image src="https://vivita.cdn.vccloud.vn/wp-content/uploads/2020/04/huong-dan-mua-hang-tai-vivita-scaled.jpg" />
        <Text style={{ fontSize: "26px" }}>
          Hy vọng những chia sẻ trên sẽ giúp bạn mua hàng tại ECONUTRI nhanh
          chóng và thuận tiện nhất.
        </Text>
      </div>
    </div>
  );
};
export default GuidePage;
