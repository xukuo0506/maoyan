// const MovieData = require('./public/mock/movie.json')
const mostExpectData = require('./public/mock/mostExpected.json')

// const UpcomingData = require('./public/mock/upcoming.json')

module.exports={
    lintOnSave: false, // 关闭代码检测工具
    devServer:{
        before(app){
            //列表接口
            app.get('/list',(req,res)=>{
                res.json({
                    list:mostExpectData,
                    errCoer:0
                })
            })
            //详情页接口
            app.get('/item',(req,res)=>{
                //解析求求参数
                let {id}=req.query
                // console.log(mostExpectData.coming);
                res.json({
                    list:mostExpectData.coming.filter(v=>v.id==id),
                    errCoer:0
                })
            })
        }
    }
}