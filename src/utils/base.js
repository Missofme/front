const base = {
    get() {
        return {
            url : "http://localhost:8080/guangyoujiyiwz/",
            name: "guangyoujiyiwz",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/guangyoujiyiwz/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "“广油”记忆摄影分享管理系统"
        } 
    }
}
export default base
