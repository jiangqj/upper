document.querySelector('#btn').addEventListener('click', function(){ 
    ajax({ url: 'getData.php',    //接口地址
       type: 'get',     // 类型，post 或者 get,
       data: { 
       username: 'xiaoming', 
       password: 'abcd1234' 
       }, 
       success: function(ret){ 
         console.log(ret);  // {status: 0} 
       }, 
       error: function(){ 
         console.log('出错了') 
      } 
    })
});