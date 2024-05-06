let shuHan = ["Liu Bei", "Zhuge Liang", "Guan Yu", "Zhang Fei", "Huang Zhong", "Ma Chao", "Zhao Yun"];
let shuHanColors = ["green","#BFBFBF","#559F6F","#F4556F","#CFBF6F","darkolivegreen","whitesmoke"];

let ulEl = document.createElement("ul");

let LiuBeiEl = document.createElement("li");
let ZhugeLiangEl = document.createElement("li");
let GuanYuEl = document.createElement("li");
let ZhangFeiEl = document.createElement("li");
let HuangZhongEl = document.createElement("li");
let MaChaoEl = document.createElement("li");
let ZhaoYunEl = document.createElement("li");

LiuBeiEl.innerText = "green";
ZhugeLiangEl.innerText = "#BFBFBF";
GuanYuEl.innerText = "#559F6F";
ZhangFeiEl.innerText = "#F4556F";
HuangZhongEl.innerText = "#CFBF6F";
MaChaoEl.innerText = "darkolivegreen";
ZhaoYunEl.innerText = "whitesmoke";

LiuBeiEl.style.color = LiuBeiEl.innerText;
ZhugeLiangEl.style.color = ZhugeLiangEl.innerText;
GuanYuEl.style.color = GuanYuEl.innerText;
ZhangFeiEl.style.color = ZhangFeiEl.innerText;
HuangZhongEl.style.color = HuangZhongEl.innerText;
MaChaoEl.style.color = MaChaoEl.innerText;
ZhaoYunEl.style.color = ZhaoYunEl.innerText;

ulEl.appendChild(LiuBeiEl);
ulEl.appendChild(ZhugeLiangEl);
ulEl.appendChild(GuanYuEl);
ulEl.appendChild(ZhangFeiEl);
ulEl.appendChild(HuangZhongEl);
ulEl.appendChild(MaChaoEl);
ulEl.appendChild(ZhaoYunEl);

document.body.appendChild(ulEl);