//BT1
// đầu vào
let luongMotNgay = document.querySelector("#luongMotNgay");
let soNgayLam = document.querySelector("#soNgayLam");
let result_1 = document.querySelector("#result_1");
let tinhLuong = document.querySelector("#tinhLuong");
luongMotNgay.value = 1000;
// các bước thực hiện
tinhLuong = addEventListener("click", function () {
    let luongMotNgayValue = luongMotNgay.value;
    let soNgayLamValue = soNgayLam.value;
    let message = luongMotNgayValue * soNgayLamValue;
// đầu ra
    result_1.innerHTML = `Kết quả là: ${message}`;
});

// BT2
// đầu vào
let soa = document.querySelector("#soa");
let sob = document.querySelector("#sob");
let soc = document.querySelector("#soc");
let sod = document.querySelector("#sod");
let soe = document.querySelector("#soe");
let tinhTrungBinh = document.querySelector("#tinhTrungBinh");
let result_2 = document.querySelector("#result_2")
// các bước thực hiện
tinhTrungBinh = addEventListener("click", function () {
        let soaValue = soa.value;
        let sobValue = sob.value;
        let socValue = soc.value;
        let sodValue = sod.value;
        let soeValue = soe.value;
        let message = (soaValue/5) + (sobValue/5) + (socValue/5) + (sodValue/5) + (soeValue/5);
// đầu ra
        result_2.innerHTML = `Kết quả là: ${message}`;
}
);

//BT3
// đầu vào
let usd = document.querySelector("#USD");
let tienViet = document.querySelector("#tienViet");
let tinhTien = document.querySelector("#tinhTien");
let result_3 = document.querySelector("#result_3");
usd.value = 23500;
// các bước thực hiện
tinhTien = addEventListener("click", function () {
    let usdValue = usd.value;
    let tienVietValue = tienViet.value;
    let message = usdValue * tienVietValue;
// đầu ra
    result_3.innerHTML = `Kết quả là: ${message}`;
});

//BT4
// đầu vào
let chieuDai = document.querySelector("#chieuDai");
let chieuRong = document.querySelector("#chieuRong");
let tinh = document.querySelector("#tinh");
let chuVi = document.querySelector("#chuVi");
let dienTich = document.querySelector("#dienTich");
// các bước thực hiện
tinh = addEventListener("click", function () {
    let chieuDaiValue = chieuDai.value;
    let chieuRongValue = chieuRong.value;
    let message_1 = (chieuDaiValue*2) + (chieuRongValue*2);
    let message_2 = chieuDaiValue * chieuRongValue;
// đầu ra
    chuVi.innerHTML = `Chu vi là: ${message_1}`;
    dienTich.innerHTML = `Diện Tích là: ${message_2}`;
})

//BT5
// đầu vào
let soHaiChuSo = document.querySelector("#soHaiChuSo");
let tinhTong = document.querySelector("#tinhTong");
let result_4 = document.querySelector("#result_4");
let a,b;
// các bước thực hiện
tinhTong = addEventListener("click", function () {
    let soHaiChuSoValue = soHaiChuSo.value;
    a = soHaiChuSoValue % 10;
    b = Math.floor(soHaiChuSoValue/10);
    let message = a + b;
    result_4.innerHTML = `Tổng của số Hai Chữ Số là: ${message}`;

})







