import axios from 'axios'




let pre ='https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/';
let slideData = null;

let URL = {
	theater:pre+'movie/in_theaters'
}
async function getSlideData(start=0) {		
  let url = URL.theater+'?start'+start
  let res = await axios.get(url);

  	return res.data;
   	      
}

export default{
	getSlideData
}