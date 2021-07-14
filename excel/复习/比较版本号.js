function compareVersion(version1, version2) {
    const v1 = version1.split(".")
    const v2 = version2.split(".")

    const len = Math.max(v1.length, v2.length)

    for(let i = 0; i < len; i++) {
        const t1 = Number(v1[i] || 0)
        const t2 = Number(v2[i] || 0)

        if(t1 > t2) return 1
        if(t1 < t2) return -1
    }

    return 0
}