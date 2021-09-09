function Validation() {
    var mang = [];
    var ds = new DanhSach();
    ds.layDS()
        .then(function (response) {
            response.data.map(function (item, index) {
                mang.push(item);
            })
        })
        .catch(function (error) {
            console.log(error)
        })

    this.checkEmpty = function (inputVal, spanID, message) {
        if (inputVal == "") {
            document.getElementById(spanID).innerHTML = message;
            return false;
        } else {
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
    }

    this.checkTrungTK = function (inputVal, spanID, message) {
        var isExsit = false;
        isExsit = mang.some(function (item) {
            return item.taiKhoan === inputVal.trim();
        })
        if (isExsit) {
            document.getElementById(spanID).innerHTML = message;
            return false;
        } else {
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
    }

    this.checkHoTen = function (inputVal, spanID, message) {
        var isExsit = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$");
        if (isExsit.test(inputVal)) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else {
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }

    this.checkPass = function (inputVal, spanID, message) {
        var regexp = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,8}$/);
        if (regexp.test(inputVal)) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else {
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }

    this.checkEmail = function (inputVal, spanID, message) {
        var regexp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        if (regexp.test(inputVal)) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else {
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }

    this.checkLoaiND = function (inputVal, spanID, message) {
        if (inputVal !== "Chọn loại người dùng") {
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else {
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }

    this.checkLoaiNN = function (inputVal, spanID, message) {
        if (inputVal !== "Chọn ngôn ngữ") {
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else {
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }

    this.checkText = function (inputVal, spanID, message) {
        if (inputVal.length > 0 && inputVal.length < 61) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else {
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }

    this.timKiemTK = function (tk) {
        var tkThuong = tk.trim().toLowerCase();
        var newMang = [];
        mang.map(function (item) {
            var viTri = -1;
            viTri = item.taiKhoan.trim().toLowerCase().indexOf(tkThuong);
            if (viTri >= 0) {
                newMang.push(item);
            }
        })
        return newMang;
    }
}
