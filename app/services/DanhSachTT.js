function DanhSach() {

    this.layDS = function () {
     return  axios({
            method: 'get',
            url: 'https://6130d9518066ca0017fdaade.mockapi.io/Products'
        });
    }

    this.them = function(sp) {
        return axios({
            method: 'post',
            url: 'https://6130d9518066ca0017fdaade.mockapi.io/Products',
            data:sp
        })
    }

    this.xoa = function(id) {
        return  axios({
            method: 'delete',
            url: `https://6130d9518066ca0017fdaade.mockapi.io/Products/${id}`
        });
    }

    this.xem = function(id) {
        return  axios({
            method: 'get',
            url: `https://6130d9518066ca0017fdaade.mockapi.io/Products/${id}`
        });
    }

    this.capNhat = function(id,ds) {
        return  axios({
            method: 'put',
            url: `https://6130d9518066ca0017fdaade.mockapi.io/Products/${id}`,
            data: ds
        });
    }


}