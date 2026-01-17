const base = {
    get() {
        return {
            url : "http://localhost:8080/youguangsheyingwz/",
            name: "youguangsheyingwz",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/youguangsheyingwz/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "“油光”记忆摄影分享管理系统"
        } 
    }
}
export default base
