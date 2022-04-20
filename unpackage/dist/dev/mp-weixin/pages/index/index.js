"use strict";
var common_vendor = require("../../common/vendor.js");
var pages_utils_createDataInfo = require("../utils/createDataInfo.js");
require("../utils/utils/sendPostRequest.js");
require("../utils/route.js");
const _sfc_main = {
  onShareAppMessage(res) {
    if (res.from === "button") {
      console.log(res.target);
    }
    return {
      title: "\u81EA\u5B9A\u4E49\u5206\u4EAB\u6807\u9898",
      path: "/pages/test/test?id=123"
    };
  },
  setup() {
    const content = common_vendor.reactive();
    const enterProfessional = (target) => {
      common_vendor.index.navigateTo({
        url: `../Professional/Professional/Professional?target=${target}`
      });
    };
    pages_utils_createDataInfo.createProfession();
    pages_utils_createDataInfo.getAllProfession();
    const getPhoneNumber = (e) => {
    };
    function enter() {
      common_vendor.index.navigateTo({
        url: "#"
      });
    }
    return {
      createProfession: pages_utils_createDataInfo.createProfession,
      getPhoneNumber,
      content,
      enterProfessional,
      enter
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $setup.enter && $setup.enter(...args)),
    b: common_vendor.o(($event) => $setup.enterProfessional(1)),
    c: common_vendor.o(($event) => $setup.enterProfessional(2)),
    d: common_vendor.o((...args) => $setup.createProfession && $setup.createProfession(...args)),
    e: common_vendor.o((...args) => $setup.getPhoneNumber && $setup.getPhoneNumber(...args)),
    f: common_vendor.f($setup.content, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-57280228"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
