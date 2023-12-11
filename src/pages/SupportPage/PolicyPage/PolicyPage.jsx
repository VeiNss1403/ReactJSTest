import React from "react";
import { WrapperHeader, Text, Header, Header1, Text1 } from "./style";
import { LineOutlined, CaretRightOutlined } from "@ant-design/icons";

const PolicyPage = () => {
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
        <WrapperHeader> Chính Sách Đổi Trả </WrapperHeader>
        <Header>VÌ SAO ECONUTRI CHỈ CHO ĐỔI TRẢ TRONG 7 NGÀY?</Header>

        <Text>
          Với mong muốn đảm bảo cam kết{" "}
          <span style={{ fontWeight: "bold" }}>thuốc mới, chất lượng</span>,
          mang đến cho khách hàng sự an tâm khi mua hàng tại Econutri, chúng tôi
          áp dụng đổi trả trong 7 ngày với 2 lý do chính:
        </Text>
        <Text>
          <span style={{ fontWeight: "bold" }}>Thứ nhất:</span> Tiêu chí cam kết
          hàng đầu tại Econutri đối với khách hàng là
          <span style={{ fontWeight: "bold" }}> “Thuốc luôn luôn mới”</span>, vì
          vậy việc đổi trả sản phẩm đã qua thời gian quá dài, sẽ không đảm bảo
          được thuốc/ sản phẩm mới cho khách hàng mua sau. Nếu thời gian đổi trả
          quá dài sẽ gián tiếp mang lại rủi ro quá lớn về chất lượng sản phẩm
          cho những khách hàng mua phải những sản phẩm đổi trả này.
        </Text>
        <Text>
          <span style={{ fontWeight: "bold" }}>Thứ hai:</span> Do đặc thù sản
          phẩm dược phẩm luôn cần điều kiện bảo quản đặc biệt: nhiệt độ phòng
          lạnh hoặc trong tủ lạnh nên nhà thuốc chỉ chấp nhận đổi trả sản phẩm
          trong khoảng tối đa 7 ngày nhằm đảm bảo các sản phẩm đổi trả vẫn đạt
          chất lượng tốt nhất khi đến tay người sử dụng sau này.
        </Text>
        <Text style={{ fontStyle: "italic", fontSize: "24px" }}>
          Nhằm hỗ trợ tốt nhất cho quý khách hàng mua các sản phẩm sức khoẻ tại
          Econutri, chúng tôi áp dụng chính sách đổi trả như sau:
        </Text>
        <Header>SẢN PHẨM ECONUTRI CHẤP NHẬN BẢO HÀNH ĐỔI TRẢ</Header>
        <Header1>Sản phẩm lỗi của do nhà sản xuất</Header1>
        <Text>Miễn phí 1 đổi 1 (cùng loại sản phẩm).</Text>
        <Text>
          Trường hợp sản phẩm đổi hết hàng, Quý khách có thể đổi sang sản phẩm
          khác có cùng thành phần và công dụng tương đương. Econutri sẽ hoàn lại
          số tiền chênh lệch cho quý khách nếu có.
        </Text>
        <Header1>Hoặc:</Header1>
        <Text>
          Trả lại sản phẩm Miễn Phí: Econutri sẽ hoàn lại tiền cho Quý khách.
        </Text>
        <Header1>
          Sản phẩm không có lỗi, nhưng muốn đổi trả do hết nhu cầu sử dụng
        </Header1>
        <Text>Miễn phí đổi sang sản phẩm khác.</Text>
        <Text>
          Econutri sẽ hoàn lại số tiền chênh lệch cho quý khách nếu có.
        </Text>
        <Header1>Hoặc:</Header1>
        <Text>
          Trả lại sản phẩm: Econutri hoàn lại tiền với mức giá bằng 90% giá trên
          hoá đơn hoặc theo giá bán hiện tại của sản phẩm đổi trả được niêm yết
          tại trang sản phẩm đổi trả.
        </Text>
        <Header>SẢN PHẨM ECONUTRI KHÔNG CHẤP NHẬN ĐỔI TRẢ</Header>
        <Text>Econutri không áp dụng đổi trả đối với các sản phẩm sau:</Text>
        <Text1>
          <CaretRightOutlined style={{ paddingRight: "10px" }} />
          Sản phẩm đã quá hạn đổi trả (7 ngày).
        </Text1>
        <Text1>
          <CaretRightOutlined style={{ paddingRight: "10px" }} />
          Sản phẩm đã bị bóc tem nhãn, seal nếu có.
        </Text1>
        <Text1>
          <CaretRightOutlined style={{ paddingRight: "10px" }} />
          Sản phẩm khách đã thử hoặc qua sử dụng từ 1 lần trở lên.
        </Text1>
        <Text1>
          <CaretRightOutlined style={{ paddingRight: "10px" }} />
          Bao bì, vỏ hộp sản phẩm bị hư hỏng, trầy xước do lỗi từ phía khách
          hàng.
        </Text1>
        <Text1>
          <CaretRightOutlined style={{ paddingRight: "10px" }} />
          Sản phẩm không phải mua từ bên Econutri.vn hoặc tại cửa hàng Econutri
          Pharmacy.
        </Text1>
        <Text1>
          <CaretRightOutlined style={{ paddingRight: "10px" }} />
          Hóa đơn mua hàng bị mất, không tìm thấy trên hệ thống phần mềm.
        </Text1>
        <Text1>
          <CaretRightOutlined style={{ paddingRight: "10px" }} />
          Sản phẩm có yêu cầu bảo quản đặc biệt, lưu trữ đông lạnh.
        </Text1>
        <Text1>
          <CaretRightOutlined style={{ paddingRight: "10px" }} />
          Sản phẩm đặt biệt: Các loại thuốc tiêm/chích, Vớ y khoa.
        </Text1>
        <Text> </Text>
        <Text> </Text>
        <Header>CÁCH THỨC ĐỔI TRẢ</Header>
        <Text>
          Khách hàng gọi đến 0981 523 790 thông báo cho nhân viên Econutri lí do
          đổi trả và địa chỉ, số điện thoại liên lạc chính xác để Econutri có
          thể thực hiện quy trình đổi trả sản phẩm một cách nhanh chóng nhất
          theo yêu cầu của quý khách.
        </Text>
        <Text>
          Quý khách có thể chuyển hàng qua bưu điện & Liên hệ với nhân viên đã
          hỗ trợ mình trong việc đổi trả để Econutri có thể xử lý và gửi
          hàng/tiền lại sớm nhất khi nhận được sản phẩm.
        </Text>
        <Header>LƯU Ý VỀ QUY ĐỊNH ĐỔI TRẢ</Header>
        <Text1>
          <CaretRightOutlined style={{ paddingRight: "10px" }} />
          Số ngày đổi trả bắt đầu được tính kể từ khi Quý khách nhận được sản
          phẩm.
        </Text1>
        <Text1>
          <CaretRightOutlined style={{ paddingRight: "10px" }} />
          Sau 7 ngày Econutri không áp dụng đổi – trả dưới bất kỳ hình thức nào.
        </Text1>
        <Text1>
          <CaretRightOutlined style={{ paddingRight: "10px" }} />
          Khi nhận hàng, Quý khách vui lòng kiểm tra kỹ hàng hóa rồi mới thanh
          toán tiền cho nhân viên giao hàng, khi có những{" "}
          <span style={{ paddingLeft: "30px" }}>
            dấu hiệu bị cậy nắp, quý khách vui lòng gọi 0981523790, chúng tôi sẽ
            đổi lại miễn phí cho bạn một sản phẩm khác.
          </span>
        </Text1>
        <Text1>
          <CaretRightOutlined style={{ paddingRight: "10px" }} />
          Đối với Quý khách ở các tỉnh thành khác, trong quá trình vận chuyển vỏ
          hộp có thể bị móp méo với tỉ lệ chiếm từ 5% -{" "}
          <span style={{ paddingLeft: "30px" }}>10%</span>, trong những trường
          hợp này, nếu sản phẩm không có dấu hiệu cậy nắp thì quý khách có thể
          yên tâm sử dụng vì <span style={{ paddingLeft: "30px" }}>không</span>{" "}
          ảnh hưởng gì đến chất lượng sản phẩm.
        </Text1>
        <Header1>Phương thức hoàn tiền và thời gian hoàn tiền</Header1>
        <Text>
          Sau khi Econutri nhận được sản phẩm hoàn trả của quý khách, sẽ thực
          hiện hoàn tiền theo thời gian như sau:
        </Text>
        <Text1>
          <CaretRightOutlined style={{ paddingRight: "10px" }} />
          Nhận tiền mặt sau khi trả sản phẩm tại điểm đã mua.
        </Text1>
        <Text1>
          <CaretRightOutlined style={{ paddingRight: "10px" }} />
          Đối với khách hàng thanh toán bằng thẻ tín dụng việc hoàn tiền sẽ được
          thực hiện sau 5 – 20 ngày làm việc.
        </Text1>
      </div>
    </div>
  );
};
export default PolicyPage;
