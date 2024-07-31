---
sidebar_label: 'Giới thiệu về Ethereum'
sidebar_position: 7
---
# Giới thiệu về Ethereum
## Ethereum là gì?
Ethereum là một blockchain được nhúng trong đó một máy tính. Nó là nền tảng để xây dựng các ứng dụng và tổ chức theo cách phi tập trung, không cần cấp phép, chống kiểm duyệt.

Trong vũ trụ Ethereum, có một máy tính chuẩn duy nhất (được gọi là Máy ảo Ethereum hoặc EVM) có trạng thái mà mọi người trên mạng Ethereum đều đồng ý. Mọi người tham gia vào mạng Ethereum (mỗi nút Ethereum) đều giữ một bản sao trạng thái của máy tính này. Ngoài ra, bất kỳ người tham gia nào cũng có thể phát yêu cầu máy tính này thực hiện tính toán tùy ý. Bất cứ khi nào một yêu cầu như vậy được phát đi, những người tham gia khác trên mạng sẽ xác minh, xác thực và thực hiện ("thực thi") tính toán. Việc thực thi này gây ra sự thay đổi trạng thái trong EVM, được cam kết và truyền bá trên toàn bộ mạng.

Các yêu cầu tính toán được gọi là yêu cầu giao dịch; bản ghi của tất cả các giao dịch và trạng thái hiện tại của EVM được lưu trữ trên blockchain, do đó được lưu trữ và đồng ý bởi tất cả các nút.

Cơ chế mật mã đảm bảo rằng khi các giao dịch được xác minh là hợp lệ và được thêm vào chuỗi khối, chúng sẽ không thể bị giả mạo sau này. Các cơ chế tương tự cũng đảm bảo rằng tất cả các giao dịch đều được ký và thực hiện với "quyền" thích hợp (không ai có thể gửi tài sản kỹ thuật số từ tài khoản của Alice, ngoại trừ chính Alice).
## Ether là gì?
Ether (ETH) là tiền điện tử gốc của Ethereum. Mục đích của ETH là cho phép tạo ra một thị trường tính toán. Một thị trường như vậy mang lại động lực kinh tế cho những người tham gia xác minh và thực hiện các yêu cầu giao dịch cũng như cung cấp tài nguyên tính toán cho mạng.

Bất kỳ người tham gia nào gửi yêu cầu giao dịch cũng phải cung cấp một số lượng ETH cho mạng dưới dạng tiền thưởng. Mạng sẽ trao phần thưởng này cho bất kỳ ai cuối cùng thực hiện công việc xác minh giao dịch, thực hiện nó, đưa nó vào chuỗi khối và phát nó lên mạng.

Số lượng ETH được trả tương ứng với các tài nguyên cần thiết để thực hiện tính toán. Những khoản tiền thưởng này cũng ngăn chặn những người tham gia độc hại cố tình làm tắc nghẽn mạng bằng cách yêu cầu thực thi tính toán vô hạn hoặc các tập lệnh sử dụng nhiều tài nguyên khác, vì những người tham gia này phải trả tiền cho tài nguyên tính toán.

ETH cũng được sử dụng để cung cấp bảo mật kinh tế tiền điện tử cho mạng theo ba cách chính: 1) nó được sử dụng như một phương tiện để thưởng cho những người xác nhận đề xuất chặn hoặc chỉ ra hành vi không trung thực của những người xác nhận khác; 2) Nó được đặt cược bởi những người xác nhận, đóng vai trò là tài sản thế chấp chống lại hành vi không trung thực—nếu người xác thực cố gắng làm sai thì ETH của họ có thể bị phá hủy; 3) nó được sử dụng để cân nhắc 'phiếu bầu' cho các khối mới được đề xuất, đưa vào phần lựa chọn ngã ba của cơ chế đồng thuận.
## Hợp đồng thông minh là gì?
Trong thực tế, người tham gia không viết mã mới mỗi lần họ muốn yêu cầu tính toán trên EVM. Thay vào đó, các nhà phát triển ứng dụng tải các chương trình (đoạn mã có thể tái sử dụng) lên trạng thái EVM và người dùng đưa ra yêu cầu thực thi các đoạn mã này với các tham số khác nhau. Chúng tôi gọi các chương trình được mạng lưới hợp đồng thông minh tải lên và thực thi.

Ở mức độ rất cơ bản, bạn có thể coi hợp đồng thông minh giống như một loại máy bán hàng tự động: một tập lệnh, khi được gọi với các tham số nhất định, sẽ thực hiện một số hành động hoặc tính toán nếu các điều kiện nhất định được thỏa mãn. Ví dụ: hợp đồng thông minh của nhà cung cấp đơn giản có thể tạo và chuyển nhượng quyền sở hữu tài sản kỹ thuật số nếu người gọi gửi ETH cho một người nhận cụ thể.

Bất kỳ nhà phát triển nào cũng có thể tạo hợp đồng thông minh và công khai nó trên mạng, sử dụng chuỗi khối làm lớp dữ liệu, với một khoản phí phải trả cho mạng. Sau đó, bất kỳ người dùng nào cũng có thể gọi hợp đồng thông minh để thực thi mã của nó với một khoản phí phải trả cho mạng.

Do đó, với hợp đồng thông minh, nhà phát triển có thể xây dựng và triển khai các ứng dụng và dịch vụ phức tạp tùy ý đối với người dùng như: chợ, công cụ tài chính, trò chơi, v.v.
## Định nghĩa trong Ethereum