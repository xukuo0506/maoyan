import Mock from 'mockjs'


let data=Mock.mock({
    "list|20":[
        {
            "id|+1":0,
            //1  待处理   2   已发送  3  已处理
            "type|1":[1,2,3],
            "flag|1":[true,false],
            "title":"@ctitle()",
            "name":"@name()",
            

        }
        

    ]
})

Mock.mock('/list',function(){
    return data.list
})