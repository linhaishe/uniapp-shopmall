export default {
  common: {
    baseUrl: "",
    data: {},
    header: "",
    method: "GET",
    dataType: "json",
  },
  request(options = {}) {
    options.url = this.common.baseUrl + options.url;
    options.data = options.data || this.common.data;
    options.header = options.header || this.common.header;
    options.method = options.method || this.common.method;
    options.dataType = options.dataType || this.common.dataType;

    return new Promise((res, rej) => {
      uni.request({
        ...options,
        success: (res) => {
          if (res.statusCode !== 200) {
            return rej();
          }

          setTimeout(function () {
            uni.hideLoading()
          }, 2000)
          let data = res.data.data;
          res(data);
        },
      });
    });
  },
};
