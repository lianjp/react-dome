import JsonP from "jsonp";
import axios from "axios";
import { Modal } from "antd";

export default class Axios {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      JsonP(
        options.url,
        {
          param: "callback",
        },
        function (err, response) {
          console.log(response);
          if (response.status == 1) {
            resolve(response);
          } else {
            reject(response.message);
          }
        }
      );
    });
  }

  static ajax(options) {
    let loading;
    if (options.data && options.data.isShowLoading !== false) {
      loading = document.getElementById("ajaxLoading");
      loading.style.display = "block";
    }

    let baseApi = "https://www.easy-mock.com/mock/5e8b0419813a9c08c0da5302/yahahaapi";

    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: "get",
        baseURL: baseApi,
        timeout: 5000,
        params: (options.data && options.data.params) || "",
      }).then((response) => {
        if (options.data && options.data.isShowLoading !== false) {
          loading = document.getElementById("ajaxLoading");
          loading.style.display = "none";
        }
        if (response.status == "200") {
          let res = response.data;
          if (res.code == 0) {
            resolve(res);
          } else {
            Modal.info({
              title: "提示",
              content: res.message,
            });
          }
        } else {
          reject(response.data);
        }
      });
    });
  }
}
