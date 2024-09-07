const asynchandler = require('express-async-handler');

const getPic=asynchandler(async(req,res)=>{
    res.json({
        "img1":"https://sarahclaysocial.com/wp-content/uploads/2020/10/sarah-clay-3.jpg",
        "img2":"https://media.licdn.com/dms/image/v2/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705940048112?e=1730937600&v=beta&t=gmFzuuhmecCMfCZk3SdGIeCLrZdtn5HqEdfkBokUj78",
        "img3":"https://www.corporatephotographerslondon.com/wp-content/uploads/2022/02/FRA-1699dark-sq.jpg",
        "img4":"https://artriva.com/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg"
      })
})
module.exports={getPic}