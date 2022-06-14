"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  props: {
    detail: Object,
    type: Number
  },
  setup(props) {
    var _a;
    const information = common_vendor.reactive({
      comName: props.detail.company,
      comAddress: (_a = props.detail.city) == null ? void 0 : _a.cityName,
      posName: props.detail.post,
      posSalary: props.detail.salary,
      credibility: props.detail.credibility,
      quantity: 0,
      releaseTime: props.detail.createTime
    });
    const enterDetail = () => {
      common_vendor.index.navigateTo({
        url: "/pages/Professional/professionalDetail/professionalDetail?type=" + props.type + "&id=" + props.detail.id
      });
    };
    return {
      enterDetail,
      information
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($setup.information.comName),
    b: common_vendor.t($setup.information.comAddress),
    c: common_vendor.t($setup.information.posName),
    d: common_vendor.t($setup.information.posSalary),
    e: common_vendor.t($setup.information.credibility),
    f: common_vendor.t($setup.information.quantity),
    g: common_vendor.t($setup.information.releaseTime),
    h: common_vendor.o((...args) => $setup.enterDetail && $setup.enterDetail(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-43b3d620"]]);
tt.createComponent(Component);
