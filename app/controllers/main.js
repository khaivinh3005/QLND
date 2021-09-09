var dstt = new DanhSach();
var val = new Validation();
function getID(id) {
    return document.getElementById(id)
}

function layDS() {
    dstt.layDS()
        .then(function (response) {
            hienThiTable(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
}
layDS();

function hienThiTable(mangDS) {
    var content = "";
    mangDS.map(function (item, index) {
        content += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.taiKhoan}</td>
                <td>${item.matKhau}</td>
                <td>${item.hoTen}</td>
                <td>${item.email}</td>
                <td>${item.ngonNgu}</td>
                <td>${item.loaiND}</td>
                <td>
                    <button class="btn btn-success" data-toggle="modal"
                    data-target="#myModal" onclick="xemND('${item.id}')">Xem</button>
                    <button class="btn btn-danger" onclick="xoaND('${item.id}')">Xoa</button>
                </td>
            </tr>
        `
    })
    getID("tblDanhSachNguoiDung").innerHTML = content;
}

function themND() {

    var taiKhoan = getID("TaiKhoan").value;
    var hoTen = getID("HoTen").value;
    var matKhau = getID("MatKhau").value;
    var email = getID("Email").value;
    var loaiNguoiDung = getID("loaiNguoiDung").value;
    var hinhAnh = getID("HinhAnh").value;
    var loaiNgonNgu = getID("loaiNgonNgu").value;
    var moTa = getID("MoTa").value;


    var isVal = false;
    isVal = val.checkEmpty(taiKhoan, "spanTK", "Vui lòng nhập đầy đủ thông tin") && val.checkTrungTK(taiKhoan, "spanTK", "Tài khoản không được trùng");
    isVal &= val.checkEmpty(hoTen, "spanHT", "Vui lòng nhập đầy đủ thông tin") && val.checkHoTen(hoTen, "spanHT", "Họ và tên không hợp lệ");
    isVal &= val.checkEmpty(matKhau, "spanPass", "Mật khẩu không được để trống") && val.checkPass(matKhau, "spanPass", `(pass có ít nhất 1 ký tự hoa, 1 ký tự đặc biệt, 1 ký tự
        số, độ dài 6-8) `);
    isVal &= val.checkEmpty(email, "spanEmail", "Email không được để để trống") && val.checkEmail(email, "spanEmail", "Email không đúng cú pháp");
    isVal &= val.checkEmpty(hinhAnh, "spanHA", "Vui lòng nhập đầy đủ thông tin");
    isVal &= val.checkLoaiND(loaiNguoiDung, "spanLoaiND", "Vui lòng lựa chọn thông tin hợp lệ");
    isVal &= val.checkLoaiNN(loaiNgonNgu, "spanLoaiNN", "Vui lòng lựa chọn thông tin hợp lệ");
    isVal &= val.checkEmpty(moTa, "spanMota", "Vui lòng nhập đầy đủ thông tin") && val.checkText(moTa, "spanMota", "không vượt quá 60 ký tự");


    if (isVal) {
        var nd = new NguoiDung(taiKhoan, hoTen, matKhau, email, loaiNguoiDung, hinhAnh, loaiNgonNgu, moTa);
        dstt.them(nd)
            .then(function (response) {
                console.log(response.data);
                layDS();
                document.querySelector("#myModal .close").click();
            })
            .catch(function (error) {
                console.log(error)
            })
    }
}


function xoaND(id) {
    dstt.xoa(id)
        .then(function (response) {
            console.log(response.data);
            layDS();
        })
        .catch(function (error) {
            console.log(error)
        })
}

function xemND(id) {
    clearForm();

    dstt.xem(id)
        .then(function (response) {
            console.log(response.data);
            getID("TaiKhoan").value = response.data.taiKhoan
            getID("HoTen").value = response.data.hoTen
            getID("MatKhau").value = response.data.matKhau
            getID("Email").value = response.data.email
            getID("loaiNguoiDung").value = response.data.loaiNguoiDung
            getID("HinhAnh").value = response.data.hinhAnh
            getID("loaiNgonNgu").value = response.data.loaiNgonNgu
            getID("MoTa").value = response.data.moTa
            document.querySelector(".modal-footer").innerHTML =
                `
     <button class="btn btn-success" onclick="capNhatND('${response.data.id}')">Cập Nhật</button>
    `
        })
        .catch(function (error) {
            console.log(error)
        })
}

function capNhatND(id) {
    var taiKhoan = getID("TaiKhoan").value;
    var hoTen = getID("HoTen").value;
    var matKhau = getID("MatKhau").value;
    var email = getID("Email").value;
    var loaiNguoiDung = getID("loaiNguoiDung").value;
    var hinhAnh = getID("HinhAnh").value;
    var loaiNgonNgu = getID("loaiNgonNgu").value;
    var moTa = getID("MoTa").value;

    var isVal = false;
    isVal = val.checkEmpty(taiKhoan, "spanTK", "Vui lòng nhập đầy đủ thông tin") && val.checkTrungTK(taiKhoan, "spanTK", "Tài khoản không được trùng");
    isVal &= val.checkEmpty(hoTen, "spanHT", "Vui lòng nhập đầy đủ thông tin") && val.checkHoTen(hoTen, "spanHT", "Họ và tên không hợp lệ");
    isVal &= val.checkEmpty(matKhau, "spanPass", "Mật khẩu không được để trống") && val.checkPass(matKhau, "spanPass", `(pass có ít nhất 1 ký tự hoa, 1 ký tự đặc biệt, 1 ký tự
        số, độ dài 6-8) `);
    isVal &= val.checkEmpty(email, "spanEmail", "Email không được để để trống") && val.checkEmail(email, "spanEmail", "Email không đúng cú pháp");
    isVal &= val.checkEmpty(hinhAnh, "spanHA", "Vui lòng nhập đầy đủ thông tin");
    isVal &= val.checkEmpty(loaiNguoiDung, "spanLoaiND", "Vui lòng lựa chọn thông tin hợp lệ") && val.checkLoaiND(loaiNguoiDung, "spanLoaiND", "Vui lòng lựa chọn thông tin hợp lệ");
    isVal &= val.checkEmpty(loaiNgonNgu, "spanLoaiNN", "Vui lòng lựa chọn thông tin hợp lệ") && val.checkLoaiNN(loaiNgonNgu, "spanLoaiNN", "Vui lòng lựa chọn thông tin hợp lệ");
    isVal &= val.checkEmpty(moTa, "spanMota", "Vui lòng nhập đầy đủ thông tin") && val.checkText(moTa, "spanMota", "không vượt quá 60 ký tự");

    if (isVal) {
        var nd = new NguoiDung(taiKhoan, hoTen, matKhau, email, loaiNguoiDung, hinhAnh, loaiNgonNgu, moTa);
        dstt.capNhat(id, nd)
            .then(function (response) {
                console.log(response.data);
                layDS();
                document.querySelector("#myModal .close").click();
            })
            .catch(function (error) {
                console.log(error)
            })
    }
}

function clearForm() {
    var inputs = document.querySelectorAll("#myModal input, #myModal textarea , #myModal span");
    var selects = document.querySelectorAll("#myModal select");

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }

    for (var i = 0; i < selects.length; i++) {
        selects[i].selectedIndex = null;
    }

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].innerHTML = '';
    }

}

getID("btnThemNguoiDung").addEventListener("click", function () {
    clearForm();
    document.querySelector(".modal-footer").innerHTML =
        `
     <button id="btnThem" class="btn btn-success" onclick="themND()">Thêm</button>
    `
})

//ClearForm = Jquery
// $('#myModal').on('hidden.bs.modal', function (event) {
//     $(this).find("input, textarea").val("");
//     $(this).find("select").prop('selectedIndex', 0);
//   })


function timKiem() {
    var value = document.querySelector(".input-group input").value;
    var arr = val.timKiemTK(value);
    hienThiTable(arr);
}

getID("basic-addon2").addEventListener("click",timKiem);


