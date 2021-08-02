function _instanceof(l, r) {
    var o = r.prototype
    l = l.__proto__

    while(true) {
        if(l === null) return false
        if(l === o) return true
        l = l.__proto__
    }
}