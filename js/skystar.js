// poem
var words=[
    '愿你是披荆斩棘的大英雄',
    '也是能被人疼爱的小朋友',
    '当年明月在',
    '曾照彩云归',
    '归去来兮',
    '真堪偕隐',
    '画船听雨眠',
    '愿为江水',
    '一支蜡烛',
    '一个心愿',
    '一切如意',
    '一生平安',
    '锦瑟年华岁岁拥',
    '偷偷表白一个叫zy的女孩',
    '生日也要成为欢笑与歌声最多的日子',
    '尘埃落定之后',
    '依旧炙热欢畅',
    '祝你一生明朗',
    '无惧岁月冗长',
    '取次花丛懒回顾',
    '半缘修道半缘君',
    '取次花丛懒回顾',
    '盈盈今日如天水',
    '恋恋当年水似天',
    '岁岁年年',
    '万喜万般皆宜',
    '一愿岁月无可回顾',
    '二愿人生无可辜负',
    '全世界都为这一天而高兴',
    '有来有往有憧憬',
    '前程似锦美梦成',
    '今夜何夕',
    '开心作伴',
    '愿我如星君如月',
    '夜夜流光相皎洁',
    '情不所起',
    '一往而深',
    '祝你常拾理想',
    '终得浪漫',
    '从今把定春风笑',
    '且作人间长寿仙',
    '若有知音见采',
    '不辞唱遍阳春',
    '休言半纸无多重',
    '万斛离愁尽耐担',
    '夜月一帘幽梦',
    '和光同尘',
    '杳霭流玉',
    '月落星沉',
    '霞姿月韵',
    '喜上眉梢',
    '醉后不知天在水',
    '满船星梦压星河',
    '不必万丈光芒',
    '但愿始终温暖有光',
    '生活的热闹与生命的骄傲',
    '年年皆胜意',
    '岁岁皆欢愉',
    '人间颜色如尘土',
    '若非群玉山头见',
    '会向瑶台月下逢',
    '祝你相逢一生',
    '尽是坦诚',
    '生日快乐',
    '旧梦常温'
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
        textone.innerHTML = '小张同学，生日快乐';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '';
      },28000)
      setTimeout(function(){
        textone.innerHTML = '愿你';
        texttwo.innerHTML = '想要的都得到';
        textthree.innerHTML = '得到的都美好';
      },112500)


 
