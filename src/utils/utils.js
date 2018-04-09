export default {
  install: function(Vue, options) {
    Vue.prototype.utils = {
      oneArrToTwoArr(arr, len = 2) {
        let oneArr = arr;
        let twoArr = [];
        let arrIdx = -1;
        oneArr.forEach((el, i) => {
          if (i % len == 0) {
            arrIdx += 1;
            twoArr[arrIdx] = [];
          }
          twoArr[arrIdx][i % len] = el;
        });
        return twoArr;
      }
    };
  }
};
