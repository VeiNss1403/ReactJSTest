import React from "react";
import { WrapperHeader, Header, Header1, Text, Text1 } from "./style";
import { useNavigate } from "react-router-dom";

const RulePage = () => {
  const navigate = useNavigate();

  const handleClickNavigate = (type) => {
    if (type === "policy") {
      navigate("/policy");
    }
  };

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
        <WrapperHeader> Điều Khoản Sử Dụng </WrapperHeader>
        <Header>QUY CHẾ HOẠT ĐỘNG WEBSITE CUNG CẤP DỊCH VỤ ECONUTRI</Header>
        <Header>I. Nguyên tắc chung</Header>
        <Text>
          Website thương mại điện tử ECONUTRI do Nhà Thuốc ECONUTRI thực hiện
          hoạt động và vận hành. Đối tượng phục vụ là tất cả khách hàng trên 63
          tỉnh thành Việt Nam có nhu cầu mua hàng nhưng không có thời gian đến
          cửa hàng hoặc đặt trước để khi đến cửa hàng là đảm bảo có hàng.
        </Text>
        <Text>
          Sản phẩm được kinh doanh tại ECONUTRI phải đáp ứng đầy đủ các quy định
          của pháp luật, không bán hàng nhái, hàng không rõ nguồn gốc, hàng xách
          tay.
        </Text>
        <Text>
          Hoạt động mua bán tại ECONUTRI phải được thực hiện công khai, minh
          bạch, đảm bảo quyền lợi của người tiêu dùng.
        </Text>
        <Header>II. Quy định chung</Header>
        <Header1>Tên Miền website Thương mại Điện tử:</Header1>
        <Text>
          Website thương mại điện tử ECONUTRI do Nhà Thuốc ECONUTRI phát triển
          với tên miền giao dịch là: ECONUTRI (sau đây gọi tắt là: “Website
          ECONUTRI”)
        </Text>
        <Header1>Định nghĩa chung:</Header1>
        <Text>Người bán là Nhà Thuốc ECONUTRI.</Text>
        <Text>
          Người mua là công dân Việt Nam trên khắp 63 tỉnh thành. Người mua có
          quyền đăng ký tài khoản hoặc không cần đăng ký để thực hiện giao dịch.
        </Text>
        <Text>
          Thành viên là bao gồm cả người mua và người tham khảo thông tin, thảo
          luận tại website.
        </Text>
        <Text>
          Nội dung bản Quy chế này tuân thủ theo các quy định hiện hành của Việt
          Nam. Thành viên khi tham gia website ECONUTRI phải tự tìm hiểu trách
          nhiệm pháp lý của mình đối với luật pháp hiện hành của Việt Nam và cam
          kết thực hiện đúng những nội dung trong Quy chế này.
        </Text>
        <Header>III. Quy trình giao dịch</Header>
        <Header1>Dành cho người mua hàng tại website ECONUTRI</Header1>
        <Text>
          <span style={{ fontWeight: "bold" }}>Bước 1:</span> Tìm sản phẩm cần
          mua.
        </Text>
        <Text>
          <span style={{ fontWeight: "bold" }}>Bước 2:</span> Xem giá và thông
          tin chi tiết sản phẩm đó, nếu quý khách đồng ý muốn đặt hàng, quý
          khách ấn vào nút mua hàng:
        </Text>
        <Text>
          <span style={{ fontWeight: "bold" }}>Bước 3:</span> Quý khách điền đầy
          đủ thông tin theo mua hàng theo mẫu
        </Text>
        <Text>
          <span style={{ fontWeight: "bold" }}>Bước 4:</span> Sau khi nhận đơn
          hàng của người mua, ECONUTRI sẽ liên lạc với khách hàng qua thông tin
          số điện quý khách hàng cung cấp bằng tổng đài 1900.2182 hoặc 0981 523
          790 để xác thực thông tin đơn hàng.
        </Text>
        <Text>
          <span style={{ fontWeight: "bold" }}>Bước 5:</span> ECONUTRI giao hàng
          tận nhà đến cho khách hàng hoặc khách hàng đến trực tiếp các cửa hàng
          ECONUTRI trên toàn quốc để nhận hàng.
        </Text>
        <Header1>Dành cho bên bán hàng là ECONUTRI</Header1>
        <Text>
          Chuẩn bị sản xuất nội dung gồm: hình ảnh sản phẩm chụp thực tế hoặc
          hình ảnh do hãng sản xuất cung cấp, bài viết giới thiệu, thông tin cấu
          hình sản phẩm.
        </Text>
        <Text>
          Nhập liệu bằng công cụ quản lý riêng dành cho nhân viên ECONUTRI.
        </Text>
        <Text>Định dạng hình ảnh sử dụng trên website: jpg, png.</Text>
        <Header1>Quy trình giao nhận vận chuyển</Header1>
        <Text>
          ECONUTRI thực hiện giao hàng trên toàn quốc. Khi nhận đơn hàng từ
          người mua và sau khi đã xác thông tin mua hàng qua điện thoại hoặc tin
          nhắn, ECONUTRI sẽ tiến hành giao hàng theo yêu cầu của quý khách hàng:
        </Text>
        <Text>
          Giao hàng tận nơi trong vòng 1h – 4h trong phạm vi bán kính 5 Km có
          cửa hàng ECONUTRI.
        </Text>
        <Text>
          Giao hàng tận nơi từ 2 – 4 ngày cho phạm vi bán kính ngoài khu vực
          TP.HCM
        </Text>
        <Text1 onClick={() => handleClickNavigate("policy")}>
          Xem thêm chính Sách Đổi Trả Sản Phẩm ECONUTRI Tại Đây!
        </Text1>
        <Header1>Đối với giao dịch của ECONUTRI</Header1>
        <Text>ECONUTRI tiếp nhận khiếu nại qua các hình thức sau:</Text>
        <Text>Tại website liên hệ, bình luận khách hàng</Text>
        <Text>Qua tổng đài giải quyết khiếu nại: 1900.2182</Text>
        <Text>Qua email: kookie160501@gmail.com</Text>
        <Header>IV. Quy trình thanh toán</Header>
        <Text>
          Người mua và bên bán có thể tham khảo các phương thức thanh toán sau
          đây và lựa chọn áp dụng phương thức phù hợp:
        </Text>
        <Text>
          <span style={{ fontWeight: "bold" }}>Cách 1:</span>
          Thanh toán sau (COD – giao hàng và thu tiền tận nơi):
        </Text>
        <Text>
          Bước 1: Người mua tìm hiểu thông tin về sản phẩm, dịch vụ được đăng
          tin.
        </Text>
        <Text>
          Bước 2: Người mua xác thực đơn hàng (điện thoại, tin nhắn, email).
        </Text>
        <Text>Bước 3: Người bán xác nhận thông tin Người mua.</Text>
        <Text>Bước 4: Người bán chuyển hàng.</Text>
        <Text>
          Bước 5: Người mua nhận hàng và thanh toán bằng tiền mặt, thẻ ATM nội
          địa hoặc thẻ tín dụng.
        </Text>
        <Text>
          <span style={{ fontWeight: "bold" }}>Cách 2:</span> Thanh toán online
          qua thẻ tín dụng, chuyển khoản:
        </Text>
        <Text>
          Bước 1: Người mua tìm hiểu thông tin về sản phẩm, dịch vụ được đăng
          tin.
        </Text>
        <Text>
          Bước 2: Người mua xác thực đơn hàng (điện thoại, tin nhắn, email).
        </Text>
        <Text>Bước 3: Người bán xác nhận thông tin Người mua.</Text>
        <Text>Bước 4: Người mua thanh toán.</Text>
        <Text>Bước 5: Người bán chuyển hàng.</Text>
        <Text>Bước 6: Người mua nhận hàng.</Text>
        <Header>V. Đảm bảo an toàn giao dịch</Header>
        <Text>
          Ban quản lý đã sử dụng các dịch vụ để bảo vệ thông tin về nội dung mà
          người bán đăng sản phẩm trên ECONUTRI. Để đảm bảo các giao dịch được
          tiến hành thành công, hạn chế tối đa rủi ro có thể phát sinh.
        </Text>
        <Text>
          Người mua nên cung cấp thông tin đầy đủ (tên, địa chỉ, số điện thoại,
          email) khi tham gia mua hàng của ECONUTRI để ECONUTRI có thể liên hệ
          nhanh lại với người mua trong trường hợp xảy ra lỗi.
        </Text>
        <Text>
          Trong trường hợp giao dịch nhận hàng tại nhà của người mua, thì người
          mua chỉ nên thanh toán sau khi đã kiểm tra hàng hoá chi tiết và hài
          lòng với sản phẩm.
        </Text>
        <Text>
          Khi thanh toán trực tuyến bằng thẻ ATM nội địa, Visa, Master người mua
          nên tự mình thực hiện và không được để lộ thông tin thẻ. ECONUTRI
          không lưu trữ thông tin thẻ của người mua sau khi thanh toán, mà thông
          qua hệ thống của ngân hàng liên kết. Nên tuyệt đối bảo mật thông tin
          thẻ cho khách hàng.
        </Text>
        <Text>
          Trong trường lỗi xảy ra trong quá trình thanh toán trực tuyến,
          ECONUTRI sẽ là đơn vị giải quyết cho khách hàng trong vòng 1 giờ làm
          việc từ khi tiếp nhận thông tin từ người thực hiện giao dịch.
        </Text>
        <Header>VI. Bảo vệ thông tin cá nhân khách hàng</Header>
        <Text>
          ECONUTRI cam kết sẽ bảo mật những thông tin mang tính riêng tư của
          bạn. Bạn vui lòng đọc bản “Chính sách bảo mật” dưới đây để hiểu hơn
          những cam kết mà chúng tôi thực hiện, nhằm tôn trọng và bảo vệ quyền
          lợi của người truy cập:
        </Text>
        <Header1>1. Mục đích và phạm vi thu thập</Header1>
        <Text>
          Để truy cập và sử dụng một số dịch vụ tại ECONUTRI, bạn có thể sẽ được
          yêu cầu đăng ký với chúng tôi thông tin cá nhân (Email, Họ tên, Số ĐT
          liên lạc…). Mọi thông tin khai báo phải đảm bảo tính chính xác và hợp
          pháp. ECONUTRI không chịu mọi trách nhiệm liên quan đến pháp luật của
          thông tin khai báo.
        </Text>
        <Text></Text>
        <Text>
          Chúng tôi cũng có thể thu thập thông tin về số lần viếng thăm, bao gồm
          số trang bạn xem, số links (liên kết) bạn click và những thông tin
          khác liên quan đến việc kết nối đến site ECONUTRI. Chúng tôi cũng thu
          thập các thông tin mà trình duyệt Web (Browser) bạn sử dụng mỗi khi
          truy cập vào ECONUTRI, bao gồm: địa chỉ IP, loại Browser, ngôn ngữ sử
          dụng, thời gian và những địa chỉ mà Browser truy xuất đến.
        </Text>
        <Header1>2. Phạm vi sử dụng thông tin</Header1>
        <Text>
          ECONUTRI thu thập và sử dụng thông tin cá nhân bạn với mục đích phù
          hợp và hoàn toàn tuân thủ nội dung của “Chính sách bảo mật” này. Khi
          cần thiết, chúng tôi có thể sử dụng những thông tin này để liên hệ
          trực tiếp với bạn dưới các hình thức như: gởi thư ngỏ, đơn đặt hàng,
          thư cảm ơn, sms, thông tin về kỹ thuật và bảo mật…
        </Text>
        <Header1>3. Thời gian lưu trữ thông tin</Header1>
        <Text>
          Dữ liệu cá nhân của Thành viên sẽ được lưu trữ cho đến khi có yêu cầu
          hủy bỏ hoặc tự thành viên đăng nhập và thực hiện hủy bỏ. Còn lại trong
          mọi trường hợp thông tin cá nhân thành viên sẽ được bảo mật trên máy
          chủ của ECONUTRI.
        </Text>
        <Header1>
          4. Phương tiện và công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu
          cá nhân
        </Header1>
        <Text>
          Hiện website chưa triển khai trang quản lý thông tin cá nhân của thành
          viên, vì thế việc tiếp cận và chỉnh sửa dữ liệu cá nhân dựa vào yêu
          cầu của khách hàng bằng cách hình thức sau:
        </Text>
        <Text>
          Gọi điện thoại đến tổng đài chăm sóc khách hàng 19002182, bằng nghiệp
          vụ chuyên môn xác định thông tin cá nhân và nhân viên tổng đài sẽ hỗ
          trợ chỉnh sửa thay người dùng
        </Text>
        <Text>
          Để lại bình luận hoặc gửi góp ý trực tiếp từ website ECONUTRI, quản
          trị viên kiểm tra thông tin và liên lạc lại với người dùng để xác nhận
          thông tin 1 lần nữa và quản trị viên chỉnh sửa thông tin cho người
          dùng.
        </Text>
        <Header1>5. Cam kết bảo mật thông tin cá nhân khách hàng</Header1>
        <Text>
          Thông tin cá nhân của thành viên trên ECONUTRI được ECONUTRI cam kết
          bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân của
          ECONUTRI. Việc thu thập và sử dụng thông tin của mỗi thành viên chỉ
          được thực hiện khi có sự đồng ý của khách hàng đó trừ những trường hợp
          pháp luật có quy định khác.
        </Text>
        <Text>
          Không sử dụng, không chuyển giao, cung cấp hay tiết lộ cho bên thứ 3
          nào về thông tin cá nhân của thành viên khi không có sự cho phép đồng
          ý từ thành viên.
        </Text>
        <Text>
          Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến
          mất mát dữ liệu cá nhân thành viên, ECONUTRI sẽ có trách nhiệm thông
          báo vụ việc cho cơ quan chức năng điều tra xử lý kịp thời và thông báo
          cho thành viên được biết.
        </Text>
        <Text>
          Bảo mật tuyệt đối mọi thông tin giao dịch trực tuyến của Thành viên
          bao gồm thông tin hóa đơn kế toán chứng từ số hóa tại khu vực dữ liệu
          trung tâm an toàn cấp 1 của ECONUTRI.
        </Text>
        <Text>
          Ban quản lý ECONUTRI yêu cầu các cá nhân khi đăng ký/mua hàng là thành
          viên, phải cung cấp đầy đủ thông tin cá nhân có liên quan như: Họ và
          tên, địa chỉ liên lạc, email, số chứng minh nhân dân, điện thoại, số
          tài khoản, số thẻ thanh toán …, và chịu trách nhiệm về tính pháp lý
          của những thông tin trên. Ban quản lý ECONUTRI không chịu trách nhiệm
          cũng như không giải quyết mọi khiếu nại có liên quan đến quyền lợi của
          Thành viên đó nếu xét thấy tất cả thông tin cá nhân của thành viên đó
          cung cấp khi đăng ký ban đầu là không chính xác
        </Text>
        <Header>VII. Quản lý thông tin xấu</Header>
        <Header1>Quy định thành viên</Header1>
        <Text>
          Thành viên sẽ tự chịu trách nhiệm về bảo mật và lưu giữ mọi hoạt động
          sử dụng dịch vụ dưới tên đăng ký, mật khẩu của mình. Thành viên có
          trách nhiệm thông báo kịp thời cho website ECONUTRI về những hành vi
          sử dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng ký và
          mật khẩu của bên thứ ba để có biện pháp giải quyết phù hợp.
        </Text>
        <Text>
          Thành viên không được thay đổi, chỉnh sửa, gán gép, copy, truyền bá,
          phân phối, cung cấp và tạo những công cụ tương tự của dịch vụ do
          website ECONUTRI cung cấp cho một bên thứ ba nếu không được sự đồng ý
          của website ECONUTRI trong bản Quy chế này.
        </Text>
        <Text>
          Thành viên không được hành động gây mất uy tín của website MTĐT
          ECONUTRI dưới mọi hình thức như gây mất đoàn kết giữa các thành viên
          bằng cách sử dụng tên đăng ký thứ hai, thông qua một bên thứ ba hoặc
          tuyên truyền, phổ biến những thông tin không có lợi cho uy tín của
          website ECONUTRI.
        </Text>
        <Header>
          VIII. Trách nhiệm trong trường hợp phát sinh lỗi kỹ thuật
        </Header>
        <Text>
          Website ECONUTRI cam kết nỗ lực đảm bảo sự an toàn và ổn định của toàn
          bộ hệ thống kỹ thuật. Tuy nhiên, trong trường hợp xảy ra sự cố do lỗi
          của ECONUTRI, ECONUTRI sẽ ngay lập tức áp dụng các biện pháp để đảm
          bảo quyền lợi cho người mua hàng.
        </Text>
        <Text>
          Khi thực hiện các giao dịch trên Sàn, bắt buộc các thành viên phải
          thực hiện đúng theo các quy trình hướng dẫn.
        </Text>
        <Text>
          Ban quản lý website ECONUTRI cam kết cung cấp chất lượng dịch vụ tốt
          nhất cho các thành viên tham gia giao dịch. Trường hợp phát sinh lỗi
          kỹ thuật, lỗi phần mềm hoặc các lỗi khách quan khác dẫn đến thành viên
          không thể tham gia giao dịch được thì các thành viên thông báo cho Ban
          quản lý website qua địa chỉ email kookie160501@gmail.com hoặc qua điện
          thoại 1900.2061 (từ 7:30 – 21:00 hằng ngày) chúng tôi sẽ khắc phục lỗi
          trong thời gian sớm nhất, tạo điều kiện cho các thành viên tham gia
          website ECONUTRI.
        </Text>
        <Text>
          Tuy nhiên, Ban quản lý website ECONUTRI sẽ không chịu trách nhiệm giải
          quyết trong trường hợp thông báo của các thành viên không đến được Ban
          quản lý, phát sinh từ lỗi kỹ thuật, lỗi đường truyền, phần mềm hoặc
          các lỗi khác không do Ban quản lý gây ra.
        </Text>
        <Header>IX. Quyền và nghĩa vụ của Ban quản lý website ECONUTRI</Header>
        <Header1>1. Quyền của Ban quản lý ECONUTRI:</Header1>
        <Text>
          Website ECONUTRI sẽ tiến hành cung cấp các dịch vụ, sản phẩm cho khách
          hàng sau khi đã hoàn thành các thủ tục và các điều kiện bắt buộc mà
          nêu ra.
        </Text>
        <Text>
          ECONUTRI sẽ tiến hành xây dựng các chính sách dịch vụ trên Trang web.
          Các chính sách này sẽ được công bố trên ECONUTRI.
        </Text>
        <Text>
          Trong trường hợp có cơ sở để chứng minh thành viên cung cấp thông tin
          cho Sàn giao dịch điện tử ECONUTRI không chính xác, sai lệch, không
          đầy đủ hoặc có dấu hiệu vi phạm pháp luật hay thuần phong mỹ tục Việt
          Nam thì Sàn giao dịch điện tử ECONUTRI có quyền từ chối, tạm ngừng
          hoặc chấm dứt quyền sử dụng dịch vụ của thành viên.
        </Text>
        <Text>
          Website ECONUTRI có thể chấm dứt quyền thành viên và quyền sử dụng một
          hoặc tất cả các dịch vụ của thành viên trong trường hợp thành viên vi
          phạm các Quy chế của Website ECONUTRI, hoặc có những hành vi ảnh hưởng
          đến hoạt động kinh doanh trên Website ECONUTRI.
        </Text>
        <Text>
          Website ECONUTRI có thể chấm dứt ngay quyền sử dụng dịch vụ và quyền
          thành viên của thành viên nếu Website ECONUTRI phát hiện thành viên đã
          phá sản, bị kết án hoặc đang trong thời gian thụ án, trong trường hợp
          thành viên tiếp tục hoạt động có thể gây cho Website ECONUTRI trách
          nhiệm pháp lý, có những hoạt động lừa đảo, giả mạo, gây rối loạn thị
          trường, gây mất đoàn kết đối với các thành viên khác của Website
          ECONUTRI, hoạt động vi phạm pháp luật hiện hành của Việt Nam.
        </Text>
        <Text>
          Trong trường hợp chấm dứt quyền thành viên và quyền sử dụng dịch vụ
          thì tất cả các chứng nhận, các quyền của thành viên được cấp sẽ mặc
          nhiên hết giá trị và bị chấm dứt.
        </Text>
        <Text>
          Website ECONUTRI giữ bản quyền sử dụng dịch vụ và các nội dung trên
          Website ECONUTRI theo các quy định pháp luật về bảo hộ sở hữu trí tuệ
          tại Việt Nam. Tất cả các biểu tượng, nội dung theo các ngôn ngữ khác
          nhau đều thuộc quyền sở hữu của Website ECONUTRI. Nghiêm cấm mọi hành
          vi sao chép, sử dụng và phổ biến bất hợp pháp các quyền sở hữu trên.
        </Text>
        <Text>
          Website ECONUTRI giữ quyền được thay đổi bảng, biểu giá dịch vụ và
          phương thức thanh toán trong thời gian cung cấp dịch vụ cho thành viên
          theo nhu cầu và điều kiện khả năng của Website ECONUTRI và sẽ báo
          trước cho thành viên thời hạn là một (01) tháng.
        </Text>
        <Header1>2. Nghĩa vụ của Ban quản lý ECONUTRI</Header1>
        <Text>
          Website ECONUTRI chịu trách nhiệm xây dựng dịch vụ bao gồm một số công
          việc chính như: nghiên cứu, thiết kế, mua sắm các thiết bị phần cứng
          và phần mềm, kết nối Internet, xây dựng chính sách phục vụ cho hoạt
          động Website ECONUTRI trong điều kiện và phạm vi cho phép.
        </Text>
        <Text>
          Website ECONUTRI sẽ tiến hành triển khai và hợp tác với các đối tác
          trong việc xây dựng hệ thống các dịch vụ, các công cụ tiện ích phục vụ
          cho việc giao dịch của các thành viên tham gia và người sử dụng trên
          Website ECONUTRI.
        </Text>
        <Text>
          Website ECONUTRI chịu trách nhiệm xây dựng, bổ sung hệ thống các kiến
          thức, thông tin về: nghiệp vụ ngoại thương, thương mại điện tử, hệ
          thống văn bản pháp luật thương mại trong nước và quốc tế, thị trường
          nước ngoài, cũng như các tin tức có liên quan đến hoạt động của
          Website ECONUTRI.
        </Text>
        <Text>
          Website ECONUTRI sẽ tiến hành các hoạt động xúc tiến, quảng bá Website
          ECONUTRI ra thị trường nước ngoài trong phạm vi và điều kiện cho phép,
          góp phần mở rộng, kết nối đáp ứng các nhu cầu tìm kiếm bạn hàng và
          phát triển thị trường nước ngoài của các thành viên tham gia Website
          ECONUTRI.
        </Text>
        <Text>
          Website ECONUTRI sẽ cố gắng đến mức cao nhất trong phạm vi và điều
          kiện có thể để duy trì hoạt động bình thường của Website ECONUTRI và
          khắc phục các sự cố như: sự cố kỹ thuật về máy móc, lỗi phần mềm, hệ
          thống đường truyền internet, nhân sự, các biến động xã hội, thiên tai,
          mất điện, các quyết định của cơ quan nhà nước hay một tổ chức liên
          quan thứ ba. Tuy nhiên nếu những sự cố trên xảy ra nằm ngoài khả năng
          kiểm soát, là những trường hợp bất khả kháng mà gây thiệt hại cho
          thành viên thì Website ECONUTRI không phải chịu trách nhiệm liên đới.
        </Text>
        <Header1>Website ECONUTRI phải có trách nhiệm:</Header1>
        <Text>
          Xây dựng và thực hiện cơ chế để đảm bảo việc đăng thông tin trên
          Website ECONUTRI được thực hiện chính xác.
        </Text>
        <Text>
          Không đăng tải những thông tin bán hàng hóa, dịch vụ thuộc danh mục
          hàng hóa, dịch vụ cấm kinh doanh theo quy định của pháp luật và hàng
          hóa hạn chế kinh doanh theo quy định tại Thông tư 47/2014/TT-BCT.
        </Text>
        <Header>
          X. Quyền và trách nhiệm thành viên tham gia website ECONUTRI
        </Header>
        <Header1>1. Quyền của Thành viên Website ECONUTRI</Header1>
        <Text>
          Khi đăng ký trở thành thành viên của ECONUTRI và được ECONUTRI đồng ý,
          thành viên sẽ được tham gia thảo luận, đánh giá sản phẩm, mua hàng tại
          ECONUTRI .
        </Text>
        <Text>
          Thành viên có quyền đóng góp ý kiến cho Website ECONUTRI trong quá
          trình hoạt động. Các kiến nghị được gửi trực tiếp bằng thư, fax hoặc
          email đến cho Website ECONUTRI.
        </Text>
        <Header1>2. Nghĩa vụ của Thành viên Website ECONUTRI</Header1>
        <Text>
          Thành viên sẽ tự chịu trách nhiệm về bảo mật và lưu giữ và mọi hoạt
          động sử dụng dịch vụ dưới tên đăng ký, mật khẩu và hộp thư điện tử của
          mình.
        </Text>
        <Text>
          Thành viên cam kết những thông tin cung cấp cho Website ECONUTRI và
          những thông tin đang tải lên Website ECONUTRI là chính xác.
        </Text>
        <Text>
          Thành viên cam kết không được thay đổi, chỉnh sửa, sao chép, truyền
          bá, phân phối, cung cấp và tạo những công cụ tương tự của dịch vụ do
          Website ECONUTRI cung cấp cho một bên thứ ba nếu không được sự đồng ý
          của Website ECONUTRI trong Quy định này.
        </Text>
        <Text>
          Thành viên không được hành động gây mất uy tín của Website ECONUTRI
          dưới mọi hình thức như gây mất đoàn kết giữa các thành viên bằng cách
          sử dụng tên đăng ký thứ hai, thông qua một bên thứ ba hoặc tuyên
          truyền, phổ biến những thông tin không có lợi cho uy tín của Website
          ECONUTRI.
        </Text>
        <Header>XI. Điều khoản áp dụng</Header>
        <Text>
          Mọi tranh chấp phát sinh giữa Website ECONUTRI và thành viên sẽ được
          giải quyết trên cơ sở thương lượng. Trường hợp không đạt được thỏa
          thuận như mong muốn, một trong hai bên có quyền đưa vụ việc ra Tòa án
          nhân dân có thẩm quyền tại Thành phố Hồ Chí Minh để giải quyết.
        </Text>
        <Text>
          Quy chế của Website ECONUTRI chính thức có hiệu lực thi hành kể từ
          ngày ký Quyết định ban hành kèm theo Quy chế này. Website ECONUTRI có
          quyền và có thể thay đổi Quy chế này bằng cách thông báo lên Website
          ECONUTRI cho các thành viên biết. Quy chế sửa đổi có hiệu lực kể từ
          ngày Quyết định về việc sửa đổi Quy chế có hiệu lực. Việc thành viên
          tiếp tục sử dụng dịch vụ sau khi Quy chế sửa đổi được công bố và thực
          thi đồng nghĩa với việc họ đã chấp nhận Quy chế sửa đổi này.
        </Text>
      </div>
    </div>
  );
};
export default RulePage;
