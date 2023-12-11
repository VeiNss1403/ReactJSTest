import React from "react";
import { Image } from "antd";
import { WrapperHeader, Header, Header1, Text } from "./style";

const CODPage = () => {
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
        <WrapperHeader> Chính Sách Giao Nhận Và Thanh Toán </WrapperHeader>
        <Image
          width={1270}
          height={700}
          src="https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2021/12/b3d01a73-lam-shipper-cho-cong-ty-nao-tot-nhat-thumb.jpeg"
        />
        <Header style={{ paddingTop: "50px" }}>I.CHÍNH SÁCH GIAO HÀNG</Header>
        <Header1>a. Giao Hàng</Header1>
        <Text>
          Sau khi nhận được thông tin đặt hàng của bạn, chuyên viên của Econutri
          sẽ liên lạc với bạn để thống nhất thời gian giao hàng sẽ giao sản phẩm
          đến địa điểm mà bạn đã cung cấp trong đơn đặt hàng.
        </Text>
        <Text>
          Econutri sẽ cố gắng giao hàng trong thời gian từ{" "}
          <span style={{ fontWeight: "bold" }}>
            24h đối với quý khách hàng ở HCM, Hà Nội và từ 48 đến 72h
          </span>
          đối với các tỉnh thành khác trên toàn quốc kể từ lúc quý khách đặt
          hàng. Tuy nhiên, vẫn có những sự chậm trễ do nguyên nhân khách quan
          (lễ, tết, địa chỉ nhận hàng khó tìm, sự chậm trễ từ dịch vụ chuyển
          phát…), rất mong bạn có thể thông cảm vì những lý do ngoài sự chi phối
          của chúng tôi.
        </Text>
        <Text>
          Trong trường hợp có phát sinh lỗi, quý khách hàng không thể nhận hàng
          được đợt nhận hàng thứ nhất, Econutri sẽ liên lạc lại với quý khách để
          sắp xếp thời gian giao hàng lần 2 hoặc hướng dẫn quý khách đến công ty
          vận chuyển để nhận hàng. Nhân viên hỗ trợ của Econutri sẽ báo ngay đến
          bạn nếu có sự chậm trễ khi giao hàng, nhưng trong phạm vi pháp luật
          cho phép, chúng tôi sẽ không chịu trách nhiệm cho bất cứ tổn thất nào,
          các khoản nợ, thiệt hại hoặc chi phí phát sinh từ việc giao hàng trễ.
        </Text>
        <Text>
          Econutri lưu ý với bạn rằng có một số địa điểm mà dịch vụ chuyển phát
          không thể giao hàng được. Khi đó, Econutri sẽ thông báo đến bạn qua
          thông tin liên lạc mà bạn đã cung cấp khi đặt hàng. Chúng tôi có thể
          sắp xếp giao hàng đến một địa chỉ khác thuận tiện hơn hoặc tiến hành
          hủy đơn hàng.
        </Text>
        <Text>
          Khi nhận sản phẩm, quý khách vui lòng kiểm tra kỹ sản phẩm trước khi
          ký nhận hàng hóa. Bạn nên giữ lại biên lai mua hàng để làm bằng chứng
          trong trường hợp muốn liên hệ lại về sản phẩm đã mua.
        </Text>
        <Text>
          Quý khách nên cẩn thận khi sử dụng vật sắc nhọn để mở sản phẩm vì bạn
          có thể làm hỏng sản phẩm. Vivita.vn không chịu bất cứ rủi ro, tổn
          thất, hư hại về sản phẩm sau khi bạn đã kiểm tra kỹ lưỡng và ký nhận
          sản phẩm.
        </Text>
        <Text>
          Sản phẩm được đóng gói theo tiêu chuẩn đóng gói của Econutri. Nếu bạn
          có nhu cầu đóng gói đặc biệt khác, vui lòng cộng thêm phí phát sinh
          (nếu có). Trong trường hợp những đơn hàng đã xác nhận của quý khách
          được đặt ở những ngày gần nhau, Econutri sẽ cố gắng bổ sung vào đơn
          hàng và giao chung một lần cho quý khách. Mọi thông tin về việc thay
          đổi hay hủy bỏ đơn hàng đề nghị quý khách thông báo sớm để Econutri có
          thể hủy hoặc chỉnh sửa đơn hàng cho bạn.
        </Text>
        <Text>
          Econutri chỉ nhận giao nhận sản phẩm trực tiếp đối với các khách hàng
          thuộc phạm vi khu vực Tp.HCM. Đối với khách hàng thuộc những khu vực
          quý khách có thể nhận được hàng sau khoảng 2 – 4 ngày tính từ ngày
          chuyển khoản (nếu không có vấn đề gì phát sinh).
        </Text>
        <Header1>b. Phí Giao Hàng</Header1>
        <Text>
          Đối với các đơn đặt hàng có giá trị giá{" "}
          <span style={{ fontWeight: "bold" }}>
            dưới 400.000đ, phí giao hàng áp dụng: 30.000đ.
          </span>
        </Text>
        <Text>
          Econutri – Hàng Luôn Luôn Mới thực hiện gửi hàng đến tận nơi khách
          hàng yêu cầu trên{" "}
          <span style={{ fontWeight: "bold" }}>
            toàn quốc miễn phí với hoá đơn trên 400.000đ (áp dụng với đa số sản
            phẩm,nếu có thay đổi sẽ được chuyên viên tư vấn thông báo mức phí)
          </span>{" "}
          . Thời gian vận chuyển tối đa 2 ngày (áp dụng với khu vực: TPHCM, Hà
          Nội), các khu vực khác thời gian vận chuyển tối đa là 7 ngày. Thời
          gian được tính từ lúc hoàn tất thủ tục đặt hàng với tổng đài viên đến
          khi nhận được hàng.
        </Text>
        <Text>
          Đối với các đơn hàng mà quý khách yêu cầu{" "}
          <span style={{ fontWeight: "bold" }}>
            giao gấp dưới 4h, phí giao hàng áp dụng là: 30.000đ
          </span>{" "}
          áp dụng với tất cả giá trị đơn hàng, phần phí phát sinh chênh lệch
          Econutri sẽ hỗ trợ cho quý khách hàng.
        </Text>
        <Header>II. CHÍNH SÁCH THANH TOÁN TẠI VIVITA</Header>

        <Text>
          Để thuận tiện cho quý khách hàng mua online, hiện tại Econutri đang áp
          dụng{" "}
          <span style={{ fontWeight: "bold" }}>2 hình thức thanh toán </span>{" "}
          như sau:
        </Text>
        <Text>
          📍COD: Nhận hàng kiểm tra hàng rồi mới thanh toán cho nhân viên giao
          hàng
        </Text>
        <Text>
          📍CHUYỂN KHOẢN: Quý khách có thể chuyển khoản trước qua tài khoản của
          công ty.
        </Text>
        <Text style={{ fontStyle: "italic" }}>
          Quý khách chỉ thanh toán khi thật sự hài lòng với sản phẩm và chất
          lượng dịch vụ của chúng tôi. Chúng tôi sẽ không tính bất kỳ khoản phí
          nào cho đến khi Quý khách hoàn toàn đồng ý.
        </Text>
      </div>
    </div>
  );
};

export default CODPage;
