function commonParentNode(oNode1, oNode2) {
    while(true) {
        if(oNode1.contains(oNode2)) return oNode1

        oNode1 = oNode1.parentNode
    }
}