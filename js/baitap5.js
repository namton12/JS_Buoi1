/**
 * Khối 1 : Input (Dữ liệu đầu vào)
 * + num1 : số hàng chục
 * + num2 : số hàng đơn vị
 * Khối 2 : 
 * B1 : Tạo biến và gán gía trị
 * B2 : Xây dựng công thức tính tổng sum
 * B3 : Hiện thị kết quả ra màn hình
 * Khối 3 : Output(Kết quả)
 * Tổng của các chữ số
 */

 var num = 12;
 var num1 = 0;
 var num2 = 0;
 var sum = 0;
 num1 = Math.floor(num/10);
 num2 = num % 10;
 sum = num1 + num2;
 console.log(sum);