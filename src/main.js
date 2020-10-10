const express = require('express')  //导入express
const app = express()     // 制造出一个应用交给app
const port = 3000    //端口


//创建服务
app.listen(port,()=>{
  console.log('服务已启动')
})

//定义一条支持http的get方法请求的路由,函数代表这个接口要做的事情
app.get('/',(request,response)=>{
   response.send('你好')    //给客户端响应
})

const data = [
    {
        id:1,
        title:'关山月',
        content:'明月出天山，苍茫云海间'
    },
    {
        id:2,
        title:'关山月1',
        content:'明月出天山，苍茫云海间'
    },
    {
        id:3,
        title:'关山月2',
        content:'明月出天山，苍茫云海间'
    }
]

app.get('/posts',(request,response)=>{
   response.send(data)
})

app.get('/posts/:postId',(request,response)=>{
   //获取内容id
   const {postId} = request.params

   //根据id查找
   const posts = data.filter(item=>item.id==postId)

   //做出响应
   response.send(posts[0])
})