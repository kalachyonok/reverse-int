module.exports = function reverse(n) {
    let res = String(n);
    let arr = res.split("");
    if (n > 0) {
        let revArr = arr.reverse();
        let num = Number(revArr.join(""));
        return num;
    } else {
        let cut = arr.slice(1);
        let revArr = cut.reverse();
        let num = Number(revArr.join(""));
        return num;
    }
};
