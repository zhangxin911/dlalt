module.exports=function(tUrl,resolveFunc,rejectFunc){
    "use strict";
    return new Promise(function(resolve,reject){
        wx.request({
            url:tUrl,
            success:resolve,
            fail:reject
        })
    }).then(resolveFunc,rejectFunc);
}