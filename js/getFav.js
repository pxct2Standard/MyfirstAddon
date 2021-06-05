let others = document.getElementById("result-list-other");

andere = browser.bookmarks.getChildren("-YYFy6oxWMHp")

andere.then(onFulfilled=>{
    let a = document.createElement("a")
    a.innerText = onFulfilled[0]["title"]
    a.href = onFulfilled[0]["url"]
    others.appendChild(a)
    let br = document.createElement("br")
    others.appendChild(br)

    let a2 = document.createElement("a")
    a2.innerText = onFulfilled[1]["title"]
    a2.href = onFulfilled[1]["url"]
    others.appendChild(a2)
    let br2 = document.createElement("br")
    others.appendChild(br2)

    let a3 = document.createElement("a")
    a3.innerText = onFulfilled[2]["title"]
    a3.href = onFulfilled[2]["url"]
    others.appendChild(a3)
    let br3 = document.createElement("br")
    others.appendChild(br3)

    let a4 = document.createElement("a")
    a4.innerText = onFulfilled[3]["title"]
    a4.href = onFulfilled[3]["url"]
    others.appendChild(a4)
    let br4 = document.createElement("br")
    others.appendChild(br4)

    let a5 = document.createElement("a")
    a5.innerText = onFulfilled[4]["title"]
    a5.href = onFulfilled[4]["url"]
    others.appendChild(a5)
    let br5 = document.createElement("br")
    others.appendChild(br5)

    let a6 = document.createElement("a")
    a6.innerText = onFulfilled[5]["title"]
    a6.href = onFulfilled[5]["url"]
    others.appendChild(a6)
    let br6 = document.createElement("br")
    others.appendChild(br6)

    let a7 = document.createElement("a")
    a7.innerText = onFulfilled[6]["title"]
    a7.href = onFulfilled[6]["url"]
    others.appendChild(a7)
    let br7 = document.createElement("br")
    others.appendChild(br7)

    let a8 = document.createElement("a")
    a8.innerText = onFulfilled[7]["title"]
    a8.href = onFulfilled[7]["url"]
    others.appendChild(a8)
    let br8 = document.createElement("br")
    others.appendChild(br8)

    let a9 = document.createElement("a")
    a9.innerText = onFulfilled[8]["title"]
    a9.href = onFulfilled[8]["url"]
    others.appendChild(a9)
    let br9 = document.createElement("br")
    others.appendChild(br9)

    let a10 = document.createElement("a")
    a10.innerText = onFulfilled[9]["title"]
    a10.href = onFulfilled[9]["url"]
    others.appendChild(a10)
    let br10 = document.createElement("br")
    others.appendChild(br10)

    let a11 = document.createElement("a")
    a11.innerText = onFulfilled[10]["title"]
    a11.href = onFulfilled[10]["url"]
    others.appendChild(a11)
    let br11 = document.createElement("br")
    others.appendChild(br11)

    let a12 = document.createElement("a")
    a12.innerText = onFulfilled[11]["title"]
    a12.href = onFulfilled[11]["url"]
    others.appendChild(a12)
    let br12 = document.createElement("br")
    others.appendChild(br12)


}, onRejected=>{
    console.log(onRejected)
});

let music = document.getElementById("result-list-music");

music_let = browser.bookmarks.getChildren("2fhtg_JofyK2")

music_let.then(onFulfilled=>{
    let a = document.createElement("a")
    a.innerText = onFulfilled[0]["title"]
    a.href = onFulfilled[0]["url"]
    music.appendChild(a)
    let br = document.createElement("br")
    music.appendChild(br)

    let a2 = document.createElement("a")
    a2.innerText = onFulfilled[1]["title"]
    a2.href = onFulfilled[1]["url"]
    music.appendChild(a2)
    let br2 = document.createElement("br")
    music.appendChild(br2)

    let a3 = document.createElement("a")
    a3.innerText = onFulfilled[2]["title"]
    a3.href = onFulfilled[2]["url"]
    music.appendChild(a3)
    let br3 = document.createElement("br")
    music.appendChild(br3)

    let a4 = document.createElement("a")
    a4.innerText = onFulfilled[3]["title"]
    a4.href = onFulfilled[3]["url"]
    music.appendChild(a4)
    let br4 = document.createElement("br")
    music.appendChild(br4)

    let a5 = document.createElement("a")
    a5.innerText = onFulfilled[4]["title"]
    a5.href = onFulfilled[4]["url"]
    music.appendChild(a5)
    let br5 = document.createElement("br")
    music.appendChild(br5)

    let a6 = document.createElement("a")
    a6.innerText = onFulfilled[5]["title"]
    a6.href = onFulfilled[5]["url"]
    music.appendChild(a6)
    let br6 = document.createElement("br")
    music.appendChild(br6)

    let a7 = document.createElement("a")
    a7.innerText = onFulfilled[6]["title"]
    a7.href = onFulfilled[6]["url"]
    music.appendChild(a7)
    let br7 = document.createElement("br")
    music.appendChild(br7)

    let a8 = document.createElement("a")
    a8.innerText = onFulfilled[7]["title"]
    a8.href = onFulfilled[7]["url"]
    music.appendChild(a8)
    let br8 = document.createElement("br")
    music.appendChild(br8)

    let a9 = document.createElement("a")
    a9.innerText = onFulfilled[8]["title"]
    a9.href = onFulfilled[8]["url"]
    music.appendChild(a9)
    let br9 = document.createElement("br")
    music.appendChild(br9)

    let a10 = document.createElement("a")
    a10.innerText = onFulfilled[9]["title"]
    a10.href = onFulfilled[9]["url"]
    music.appendChild(a10)
    let br10 = document.createElement("br")
    music.appendChild(br10)

    let a11 = document.createElement("a")
    a11.innerText = onFulfilled[10]["title"]
    a11.href = onFulfilled[10]["url"]
    music.appendChild(a11)
    let br11 = document.createElement("br")
    music.appendChild(br11)

    let a12 = document.createElement("a")
    a12.innerText = onFulfilled[11]["title"]
    a12.href = onFulfilled[11]["url"]
    music.appendChild(a12)
    let br12 = document.createElement("br")
    music.appendChild(br12)


}, onRejected=>{
    console.log(onRejected)
});

let buy = document.getElementById("result-list-buy");

buy_let = browser.bookmarks.getChildren("I5sO5NCRrEnS")

buy_let.then(onFulfilled=>{
    let a = document.createElement("a")
    a.innerText = onFulfilled[0]["title"]
    a.href = onFulfilled[0]["url"]
    buy.appendChild(a)
    let br = document.createElement("br")
    buy.appendChild(br)

    let a2 = document.createElement("a")
    a2.innerText = onFulfilled[1]["title"]
    a2.href = onFulfilled[1]["url"]
    buy.appendChild(a2)
    let br2 = document.createElement("br")
    buy.appendChild(br2)

    let a3 = document.createElement("a")
    a3.innerText = onFulfilled[2]["title"]
    a3.href = onFulfilled[2]["url"]
    buy.appendChild(a3)
    let br3 = document.createElement("br")
    buy.appendChild(br3)

    let a4 = document.createElement("a")
    a4.innerText = onFulfilled[3]["title"]
    a4.href = onFulfilled[3]["url"]
    buy.appendChild(a4)
    let br4 = document.createElement("br")
    buy.appendChild(br4)

    let a5 = document.createElement("a")
    a5.innerText = onFulfilled[4]["title"]
    a5.href = onFulfilled[4]["url"]
    buy.appendChild(a5)
    let br5 = document.createElement("br")
    buy.appendChild(br5)

    let a6 = document.createElement("a")
    a6.innerText = onFulfilled[5]["title"]
    a6.href = onFulfilled[5]["url"]
    buy.appendChild(a6)
    let br6 = document.createElement("br")
    buy.appendChild(br6)

    let a7 = document.createElement("a")
    a7.innerText = onFulfilled[6]["title"]
    a7.href = onFulfilled[6]["url"]
    buy.appendChild(a7)
    let br7 = document.createElement("br")
    buy.appendChild(br7)

    let a8 = document.createElement("a")
    a8.innerText = onFulfilled[7]["title"]
    a8.href = onFulfilled[7]["url"]
    buy.appendChild(a8)
    let br8 = document.createElement("br")
    buy.appendChild(br8)

    let a9 = document.createElement("a")
    a9.innerText = onFulfilled[8]["title"]
    a9.href = onFulfilled[8]["url"]
    buy.appendChild(a9)
    let br9 = document.createElement("br")
    buy.appendChild(br9)

    let a10 = document.createElement("a")
    a10.innerText = onFulfilled[9]["title"]
    a10.href = onFulfilled[9]["url"]
    buy.appendChild(a10)
    let br10 = document.createElement("br")
    buy.appendChild(br10)

    let a11 = document.createElement("a")
    a11.innerText = onFulfilled[10]["title"]
    a11.href = onFulfilled[10]["url"]
    buy.appendChild(a11)
    let br11 = document.createElement("br")
    buy.appendChild(br11)

    let a12 = document.createElement("a")
    a12.innerText = onFulfilled[11]["title"]
    a12.href = onFulfilled[11]["url"]
    buy.appendChild(a12)
    let br12 = document.createElement("br")
    buy.appendChild(br12)


}, onRejected=>{
    console.log(onRejected)
});

let python = document.getElementById("result-list-python");

python_let = browser.bookmarks.getChildren("qUNVFa9csfic")

python_let.then(onFulfilled=>{
    let a = document.createElement("a")
    a.innerText = onFulfilled[0]["title"]
    a.href = onFulfilled[0]["url"]
    python.appendChild(a)
    let br = document.createElement("br")
    python.appendChild(br)

    let a2 = document.createElement("a")
    a2.innerText = onFulfilled[1]["title"]
    a2.href = onFulfilled[1]["url"]
    python.appendChild(a2)
    let br2 = document.createElement("br")
    python.appendChild(br2)

    let a3 = document.createElement("a")
    a3.innerText = onFulfilled[2]["title"]
    a3.href = onFulfilled[2]["url"]
    python.appendChild(a3)
    let br3 = document.createElement("br")
    python.appendChild(br3)

    let a4 = document.createElement("a")
    a4.innerText = onFulfilled[3]["title"]
    a4.href = onFulfilled[3]["url"]
    python.appendChild(a4)
    let br4 = document.createElement("br")
    python.appendChild(br4)

    let a5 = document.createElement("a")
    a5.innerText = onFulfilled[4]["title"]
    a5.href = onFulfilled[4]["url"]
    python.appendChild(a5)
    let br5 = document.createElement("br")
    python.appendChild(br5)

    let a6 = document.createElement("a")
    a6.innerText = onFulfilled[5]["title"]
    a6.href = onFulfilled[5]["url"]
    python.appendChild(a6)
    let br6 = document.createElement("br")
    python.appendChild(br6)

    let a7 = document.createElement("a")
    a7.innerText = onFulfilled[6]["title"]
    a7.href = onFulfilled[6]["url"]
    python.appendChild(a7)
    let br7 = document.createElement("br")
    python.appendChild(br7)

    let a8 = document.createElement("a")
    a8.innerText = onFulfilled[7]["title"]
    a8.href = onFulfilled[7]["url"]
    python.appendChild(a8)
    let br8 = document.createElement("br")
    python.appendChild(br8)

    let a9 = document.createElement("a")
    a9.innerText = onFulfilled[8]["title"]
    a9.href = onFulfilled[8]["url"]
    python.appendChild(a9)
    let br9 = document.createElement("br")
    python.appendChild(br9)

    let a10 = document.createElement("a")
    a10.innerText = onFulfilled[9]["title"]
    a10.href = onFulfilled[9]["url"]
    python.appendChild(a10)
    let br10 = document.createElement("br")
    python.appendChild(br10)

    let a11 = document.createElement("a")
    a11.innerText = onFulfilled[10]["title"]
    a11.href = onFulfilled[10]["url"]
    python.appendChild(a11)
    let br11 = document.createElement("br")
    python.appendChild(br11)

    let a12 = document.createElement("a")
    a12.innerText = onFulfilled[11]["title"]
    a12.href = onFulfilled[11]["url"]
    python.appendChild(a12)
    let br12 = document.createElement("br")
    python.appendChild(br12)


}, onRejected=>{
    console.log(onRejected)
});

let hacking = document.getElementById("result-list-hacking");

hacking_let = browser.bookmarks.getChildren("lvm7aig8SDs1")

hacking_let.then(onFulfilled=>{
    let a = document.createElement("a")
    a.innerText = onFulfilled[0]["title"]
    a.href = onFulfilled[0]["url"]
    hacking.appendChild(a)
    let br = document.createElement("br")
    hacking.appendChild(br)

    let a2 = document.createElement("a")
    a2.innerText = onFulfilled[1]["title"]
    a2.href = onFulfilled[1]["url"]
    hacking.appendChild(a2)
    let br2 = document.createElement("br")
    hacking.appendChild(br2)

    let a3 = document.createElement("a")
    a3.innerText = onFulfilled[2]["title"]
    a3.href = onFulfilled[2]["url"]
    hacking.appendChild(a3)
    let br3 = document.createElement("br")
    hacking.appendChild(br3)

    let a4 = document.createElement("a")
    a4.innerText = onFulfilled[3]["title"]
    a4.href = onFulfilled[3]["url"]
    hacking.appendChild(a4)
    let br4 = document.createElement("br")
    hacking.appendChild(br4)

    let a5 = document.createElement("a")
    a5.innerText = onFulfilled[4]["title"]
    a5.href = onFulfilled[4]["url"]
    hacking.appendChild(a5)
    let br5 = document.createElement("br")
    hacking.appendChild(br5)

    let a6 = document.createElement("a")
    a6.innerText = onFulfilled[5]["title"]
    a6.href = onFulfilled[5]["url"]
    hacking.appendChild(a6)
    let br6 = document.createElement("br")
    hacking.appendChild(br6)

    let a7 = document.createElement("a")
    a7.innerText = onFulfilled[6]["title"]
    a7.href = onFulfilled[6]["url"]
    hacking.appendChild(a7)
    let br7 = document.createElement("br")
    hacking.appendChild(br7)

    let a8 = document.createElement("a")
    a8.innerText = onFulfilled[7]["title"]
    a8.href = onFulfilled[7]["url"]
    hacking.appendChild(a8)
    let br8 = document.createElement("br")
    hacking.appendChild(br8)

    let a9 = document.createElement("a")
    a9.innerText = onFulfilled[8]["title"]
    a9.href = onFulfilled[8]["url"]
    hacking.appendChild(a9)
    let br9 = document.createElement("br")
    hacking.appendChild(br9)

    let a10 = document.createElement("a")
    a10.innerText = onFulfilled[9]["title"]
    a10.href = onFulfilled[9]["url"]
    hacking.appendChild(a10)
    let br10 = document.createElement("br")
    hacking.appendChild(br10)

    let a11 = document.createElement("a")
    a11.innerText = onFulfilled[10]["title"]
    a11.href = onFulfilled[10]["url"]
    hacking.appendChild(a11)
    let br11 = document.createElement("br")
    hacking.appendChild(br11)

    let a12 = document.createElement("a")
    a12.innerText = onFulfilled[11]["title"]
    a12.href = onFulfilled[11]["url"]
    hacking.appendChild(a12)
    let br12 = document.createElement("br")
    hacking.appendChild(br12)


}, onRejected=>{
    console.log(onRejected)
});

let server = document.getElementById("result-list-server");

server_let = browser.bookmarks.getChildren("JAxY5Z0x7zZe")

server_let.then(onFulfilled=>{
    let a = document.createElement("a")
    a.innerText = onFulfilled[0]["title"]
    a.href = onFulfilled[0]["url"]
    server.appendChild(a)
    let br = document.createElement("br")
    server.appendChild(br)

    let a2 = document.createElement("a")
    a2.innerText = onFulfilled[1]["title"]
    a2.href = onFulfilled[1]["url"]
    server.appendChild(a2)
    let br2 = document.createElement("br")
    server.appendChild(br2)

    let a3 = document.createElement("a")
    a3.innerText = onFulfilled[2]["title"]
    a3.href = onFulfilled[2]["url"]
    server.appendChild(a3)
    let br3 = document.createElement("br")
    server.appendChild(br3)

    let a4 = document.createElement("a")
    a4.innerText = onFulfilled[3]["title"]
    a4.href = onFulfilled[3]["url"]
    server.appendChild(a4)
    let br4 = document.createElement("br")
    server.appendChild(br4)

    let a5 = document.createElement("a")
    a5.innerText = onFulfilled[4]["title"]
    a5.href = onFulfilled[4]["url"]
    server.appendChild(a5)
    let br5 = document.createElement("br")
    server.appendChild(br5)

    let a6 = document.createElement("a")
    a6.innerText = onFulfilled[5]["title"]
    a6.href = onFulfilled[5]["url"]
    server.appendChild(a6)
    let br6 = document.createElement("br")
    server.appendChild(br6)

    let a7 = document.createElement("a")
    a7.innerText = onFulfilled[6]["title"]
    a7.href = onFulfilled[6]["url"]
    server.appendChild(a7)
    let br7 = document.createElement("br")
    server.appendChild(br7)

    let a8 = document.createElement("a")
    a8.innerText = onFulfilled[7]["title"]
    a8.href = onFulfilled[7]["url"]
    server.appendChild(a8)
    let br8 = document.createElement("br")
    server.appendChild(br8)

    let a9 = document.createElement("a")
    a9.innerText = onFulfilled[8]["title"]
    a9.href = onFulfilled[8]["url"]
    server.appendChild(a9)
    let br9 = document.createElement("br")
    server.appendChild(br9)

    let a10 = document.createElement("a")
    a10.innerText = onFulfilled[9]["title"]
    a10.href = onFulfilled[9]["url"]
    server.appendChild(a10)
    let br10 = document.createElement("br")
    server.appendChild(br10)

    let a11 = document.createElement("a")
    a11.innerText = onFulfilled[10]["title"]
    a11.href = onFulfilled[10]["url"]
    server.appendChild(a11)
    let br11 = document.createElement("br")
    server.appendChild(br11)

    let a12 = document.createElement("a")
    a12.innerText = onFulfilled[11]["title"]
    a12.href = onFulfilled[11]["url"]
    server.appendChild(a12)
    let br12 = document.createElement("br")
    server.appendChild(br12)


}, onRejected=>{
    console.log(onRejected)
});

let cloud = document.getElementById("result-list-cloud");

cloud_let = browser.bookmarks.getChildren("qLOgs-EKZZUz")

cloud_let.then(onFulfilled=>{
    let a = document.createElement("a")
    a.innerText = onFulfilled[0]["title"]
    a.href = onFulfilled[0]["url"]
    cloud.appendChild(a)
    let br = document.createElement("br")
    cloud.appendChild(br)

    let a2 = document.createElement("a")
    a2.innerText = onFulfilled[1]["title"]
    a2.href = onFulfilled[1]["url"]
    cloud.appendChild(a2)
    let br2 = document.createElement("br")
    cloud.appendChild(br2)

    let a3 = document.createElement("a")
    a3.innerText = onFulfilled[2]["title"]
    a3.href = onFulfilled[2]["url"]
    cloud.appendChild(a3)
    let br3 = document.createElement("br")
    cloud.appendChild(br3)

    let a4 = document.createElement("a")
    a4.innerText = onFulfilled[3]["title"]
    a4.href = onFulfilled[3]["url"]
    cloud.appendChild(a4)
    let br4 = document.createElement("br")
    cloud.appendChild(br4)

    let a5 = document.createElement("a")
    a5.innerText = onFulfilled[4]["title"]
    a5.href = onFulfilled[4]["url"]
    cloud.appendChild(a5)
    let br5 = document.createElement("br")
    cloud.appendChild(br5)

    let a6 = document.createElement("a")
    a6.innerText = onFulfilled[5]["title"]
    a6.href = onFulfilled[5]["url"]
    cloud.appendChild(a6)
    let br6 = document.createElement("br")
    cloud.appendChild(br6)

    let a7 = document.createElement("a")
    a7.innerText = onFulfilled[6]["title"]
    a7.href = onFulfilled[6]["url"]
    cloud.appendChild(a7)
    let br7 = document.createElement("br")
    cloud.appendChild(br7)

    let a8 = document.createElement("a")
    a8.innerText = onFulfilled[7]["title"]
    a8.href = onFulfilled[7]["url"]
    cloud.appendChild(a8)
    let br8 = document.createElement("br")
    cloud.appendChild(br8)

    let a9 = document.createElement("a")
    a9.innerText = onFulfilled[8]["title"]
    a9.href = onFulfilled[8]["url"]
    cloud.appendChild(a9)
    let br9 = document.createElement("br")
    cloud.appendChild(br9)

    let a10 = document.createElement("a")
    a10.innerText = onFulfilled[9]["title"]
    a10.href = onFulfilled[9]["url"]
    cloud.appendChild(a10)
    let br10 = document.createElement("br")
    cloud.appendChild(br10)

    let a11 = document.createElement("a")
    a11.innerText = onFulfilled[10]["title"]
    a11.href = onFulfilled[10]["url"]
    cloud.appendChild(a11)
    let br11 = document.createElement("br")
    cloud.appendChild(br11)

    let a12 = document.createElement("a")
    a12.innerText = onFulfilled[11]["title"]
    a12.href = onFulfilled[11]["url"]
    cloud.appendChild(a12)
    let br12 = document.createElement("br")
    cloud.appendChild(br12)


}, onRejected=>{
    console.log(onRejected)
});

let android = document.getElementById("result-list-android");

android_let = browser.bookmarks.getChildren("dpM3-dkJ7tLW")

android_let.then(onFulfilled=>{
    let a = document.createElement("a")
    a.innerText = onFulfilled[0]["title"]
    a.href = onFulfilled[0]["url"]
    android.appendChild(a)
    let br = document.createElement("br")
    android.appendChild(br)

    let a2 = document.createElement("a")
    a2.innerText = onFulfilled[1]["title"]
    a2.href = onFulfilled[1]["url"]
    android.appendChild(a2)
    let br2 = document.createElement("br")
    android.appendChild(br2)

    let a3 = document.createElement("a")
    a3.innerText = onFulfilled[2]["title"]
    a3.href = onFulfilled[2]["url"]
    android.appendChild(a3)
    let br3 = document.createElement("br")
    android.appendChild(br3)

    let a4 = document.createElement("a")
    a4.innerText = onFulfilled[3]["title"]
    a4.href = onFulfilled[3]["url"]
    android.appendChild(a4)
    let br4 = document.createElement("br")
    android.appendChild(br4)

    let a5 = document.createElement("a")
    a5.innerText = onFulfilled[4]["title"]
    a5.href = onFulfilled[4]["url"]
    android.appendChild(a5)
    let br5 = document.createElement("br")
    android.appendChild(br5)

    let a6 = document.createElement("a")
    a6.innerText = onFulfilled[5]["title"]
    a6.href = onFulfilled[5]["url"]
    android.appendChild(a6)
    let br6 = document.createElement("br")
    android.appendChild(br6)

    let a7 = document.createElement("a")
    a7.innerText = onFulfilled[6]["title"]
    a7.href = onFulfilled[6]["url"]
    android.appendChild(a7)
    let br7 = document.createElement("br")
    android.appendChild(br7)

    let a8 = document.createElement("a")
    a8.innerText = onFulfilled[7]["title"]
    a8.href = onFulfilled[7]["url"]
    android.appendChild(a8)
    let br8 = document.createElement("br")
    android.appendChild(br8)

    let a9 = document.createElement("a")
    a9.innerText = onFulfilled[8]["title"]
    a9.href = onFulfilled[8]["url"]
    android.appendChild(a9)
    let br9 = document.createElement("br")
    android.appendChild(br9)

    let a10 = document.createElement("a")
    a10.innerText = onFulfilled[9]["title"]
    a10.href = onFulfilled[9]["url"]
    android.appendChild(a10)
    let br10 = document.createElement("br")
    android.appendChild(br10)

    let a11 = document.createElement("a")
    a11.innerText = onFulfilled[10]["title"]
    a11.href = onFulfilled[10]["url"]
    android.appendChild(a11)
    let br11 = document.createElement("br")
    android.appendChild(br11)

    let a12 = document.createElement("a")
    a12.innerText = onFulfilled[11]["title"]
    a12.href = onFulfilled[11]["url"]
    android.appendChild(a12)
    let br12 = document.createElement("br")
    android.appendChild(br12)


}, onRejected=>{
    console.log(onRejected)
});

let school = document.getElementById("result-list-school");

school_let = browser.bookmarks.getChildren("oGOJC1XtHRwA")

school_let.then(onFulfilled=>{
    let a = document.createElement("a")
    a.innerText = onFulfilled[0]["title"]
    a.href = onFulfilled[0]["url"]
    school.appendChild(a)
    let br = document.createElement("br")
    school.appendChild(br)

    let a2 = document.createElement("a")
    a2.innerText = onFulfilled[1]["title"]
    a2.href = onFulfilled[1]["url"]
    school.appendChild(a2)
    let br2 = document.createElement("br")
    school.appendChild(br2)

    let a3 = document.createElement("a")
    a3.innerText = onFulfilled[2]["title"]
    a3.href = onFulfilled[2]["url"]
    school.appendChild(a3)
    let br3 = document.createElement("br")
    school.appendChild(br3)

    let a4 = document.createElement("a")
    a4.innerText = onFulfilled[3]["title"]
    a4.href = onFulfilled[3]["url"]
    school.appendChild(a4)
    let br4 = document.createElement("br")
    school.appendChild(br4)

    let a5 = document.createElement("a")
    a5.innerText = onFulfilled[4]["title"]
    a5.href = onFulfilled[4]["url"]
    school.appendChild(a5)
    let br5 = document.createElement("br")
    school.appendChild(br5)

    let a6 = document.createElement("a")
    a6.innerText = onFulfilled[5]["title"]
    a6.href = onFulfilled[5]["url"]
    school.appendChild(a6)
    let br6 = document.createElement("br")
    school.appendChild(br6)

    let a7 = document.createElement("a")
    a7.innerText = onFulfilled[6]["title"]
    a7.href = onFulfilled[6]["url"]
    school.appendChild(a7)
    let br7 = document.createElement("br")
    school.appendChild(br7)

    let a8 = document.createElement("a")
    a8.innerText = onFulfilled[7]["title"]
    a8.href = onFulfilled[7]["url"]
    school.appendChild(a8)
    let br8 = document.createElement("br")
    school.appendChild(br8)

    let a9 = document.createElement("a")
    a9.innerText = onFulfilled[8]["title"]
    a9.href = onFulfilled[8]["url"]
    school.appendChild(a9)
    let br9 = document.createElement("br")
    school.appendChild(br9)

    let a10 = document.createElement("a")
    a10.innerText = onFulfilled[9]["title"]
    a10.href = onFulfilled[9]["url"]
    school.appendChild(a10)
    let br10 = document.createElement("br")
    school.appendChild(br10)

    let a11 = document.createElement("a")
    a11.innerText = onFulfilled[10]["title"]
    a11.href = onFulfilled[10]["url"]
    school.appendChild(a11)
    let br11 = document.createElement("br")
    school.appendChild(br11)

    let a12 = document.createElement("a")
    a12.innerText = onFulfilled[11]["title"]
    a12.href = onFulfilled[11]["url"]
    school.appendChild(a12)
    let br12 = document.createElement("br")
    school.appendChild(br12)


}, onRejected=>{
    console.log(onRejected)
});

let js = document.getElementById("result-list-js");

js_let = browser.bookmarks.getChildren("At7VfJQF4blB")

js_let.then(onFulfilled=>{
    let a = document.createElement("a")
    a.innerText = onFulfilled[0]["title"]
    a.href = onFulfilled[0]["url"]
    js.appendChild(a)
    let br = document.createElement("br")
    js.appendChild(br)

    let a2 = document.createElement("a")
    a2.innerText = onFulfilled[1]["title"]
    a2.href = onFulfilled[1]["url"]
    js.appendChild(a2)
    let br2 = document.createElement("br")
    js.appendChild(br2)

    let a3 = document.createElement("a")
    a3.innerText = onFulfilled[2]["title"]
    a3.href = onFulfilled[2]["url"]
    js.appendChild(a3)
    let br3 = document.createElement("br")
    js.appendChild(br3)

    let a4 = document.createElement("a")
    a4.innerText = onFulfilled[3]["title"]
    a4.href = onFulfilled[3]["url"]
    js.appendChild(a4)
    let br4 = document.createElement("br")
    js.appendChild(br4)

    let a5 = document.createElement("a")
    a5.innerText = onFulfilled[4]["title"]
    a5.href = onFulfilled[4]["url"]
    js.appendChild(a5)
    let br5 = document.createElement("br")
    js.appendChild(br5)

    let a6 = document.createElement("a")
    a6.innerText = onFulfilled[5]["title"]
    a6.href = onFulfilled[5]["url"]
    js.appendChild(a6)
    let br6 = document.createElement("br")
    js.appendChild(br6)

    let a7 = document.createElement("a")
    a7.innerText = onFulfilled[6]["title"]
    a7.href = onFulfilled[6]["url"]
    js.appendChild(a7)
    let br7 = document.createElement("br")
    js.appendChild(br7)

    let a8 = document.createElement("a")
    a8.innerText = onFulfilled[7]["title"]
    a8.href = onFulfilled[7]["url"]
    js.appendChild(a8)
    let br8 = document.createElement("br")
    js.appendChild(br8)

    let a9 = document.createElement("a")
    a9.innerText = onFulfilled[8]["title"]
    a9.href = onFulfilled[8]["url"]
    js.appendChild(a9)
    let br9 = document.createElement("br")
    js.appendChild(br9)

    let a10 = document.createElement("a")
    a10.innerText = onFulfilled[9]["title"]
    a10.href = onFulfilled[9]["url"]
    js.appendChild(a10)
    let br10 = document.createElement("br")
    js.appendChild(br10)

    let a11 = document.createElement("a")
    a11.innerText = onFulfilled[10]["title"]
    a11.href = onFulfilled[10]["url"]
    js.appendChild(a11)
    let br11 = document.createElement("br")
    js.appendChild(br11)

    let a12 = document.createElement("a")
    a12.innerText = onFulfilled[11]["title"]
    a12.href = onFulfilled[11]["url"]
    js.appendChild(a12)
    let br12 = document.createElement("br")
    js.appendChild(br12)


}, onRejected=>{
    console.log(onRejected)
});

let voicea = document.getElementById("result-list-voicea");

voicea_let = browser.bookmarks.getChildren("rSSxFokKRmuy")

voicea_let.then(onFulfilled=>{
    let a = document.createElement("a")
    a.innerText = onFulfilled[0]["title"]
    a.href = onFulfilled[0]["url"]
    voicea.appendChild(a)
    let br = document.createElement("br")
    voicea.appendChild(br)

    let a2 = document.createElement("a")
    a2.innerText = onFulfilled[1]["title"]
    a2.href = onFulfilled[1]["url"]
    voicea.appendChild(a2)
    let br2 = document.createElement("br")
    voicea.appendChild(br2)

    let a3 = document.createElement("a")
    a3.innerText = onFulfilled[2]["title"]
    a3.href = onFulfilled[2]["url"]
    voicea.appendChild(a3)
    let br3 = document.createElement("br")
    voicea.appendChild(br3)

    let a4 = document.createElement("a")
    a4.innerText = onFulfilled[3]["title"]
    a4.href = onFulfilled[3]["url"]
    voicea.appendChild(a4)
    let br4 = document.createElement("br")
    voicea.appendChild(br4)

    let a5 = document.createElement("a")
    a5.innerText = onFulfilled[4]["title"]
    a5.href = onFulfilled[4]["url"]
    voicea.appendChild(a5)
    let br5 = document.createElement("br")
    voicea.appendChild(br5)

    let a6 = document.createElement("a")
    a6.innerText = onFulfilled[5]["title"]
    a6.href = onFulfilled[5]["url"]
    voicea.appendChild(a6)
    let br6 = document.createElement("br")
    voicea.appendChild(br6)

    let a7 = document.createElement("a")
    a7.innerText = onFulfilled[6]["title"]
    a7.href = onFulfilled[6]["url"]
    voicea.appendChild(a7)
    let br7 = document.createElement("br")
    voicea.appendChild(br7)

    let a8 = document.createElement("a")
    a8.innerText = onFulfilled[7]["title"]
    a8.href = onFulfilled[7]["url"]
    voicea.appendChild(a8)
    let br8 = document.createElement("br")
    voicea.appendChild(br8)

    let a9 = document.createElement("a")
    a9.innerText = onFulfilled[8]["title"]
    a9.href = onFulfilled[8]["url"]
    voicea.appendChild(a9)
    let br9 = document.createElement("br")
    voicea.appendChild(br9)

    let a10 = document.createElement("a")
    a10.innerText = onFulfilled[9]["title"]
    a10.href = onFulfilled[9]["url"]
    voicea.appendChild(a10)
    let br10 = document.createElement("br")
    voicea.appendChild(br10)

    let a11 = document.createElement("a")
    a11.innerText = onFulfilled[10]["title"]
    a11.href = onFulfilled[10]["url"]
    voicea.appendChild(a11)
    let br11 = document.createElement("br")
    voicea.appendChild(br11)

    let a12 = document.createElement("a")
    a12.innerText = onFulfilled[11]["title"]
    a12.href = onFulfilled[11]["url"]
    voicea.appendChild(a12)
    let br12 = document.createElement("br")
    voicea.appendChild(br12)


}, onRejected=>{
    console.log(onRejected)
});

let addon = document.getElementById("result-list-addon");

addon_let = browser.bookmarks.getChildren("kpcLYWAKAq5s")

addon_let.then(onFulfilled=>{
    let a = document.createElement("a")
    a.innerText = onFulfilled[0]["title"]
    a.href = onFulfilled[0]["url"]
    addon.appendChild(a)
    let br = document.createElement("br")
    addon.appendChild(br)

    let a2 = document.createElement("a")
    a2.innerText = onFulfilled[1]["title"]
    a2.href = onFulfilled[1]["url"]
    addon.appendChild(a2)
    let br2 = document.createElement("br")
    addon.appendChild(br2)

    let a3 = document.createElement("a")
    a3.innerText = onFulfilled[2]["title"]
    a3.href = onFulfilled[2]["url"]
    addon.appendChild(a3)
    let br3 = document.createElement("br")
    addon.appendChild(br3)

    let a4 = document.createElement("a")
    a4.innerText = onFulfilled[3]["title"]
    a4.href = onFulfilled[3]["url"]
    addon.appendChild(a4)
    let br4 = document.createElement("br")
    addon.appendChild(br4)

    let a5 = document.createElement("a")
    a5.innerText = onFulfilled[4]["title"]
    a5.href = onFulfilled[4]["url"]
    addon.appendChild(a5)
    let br5 = document.createElement("br")
    addon.appendChild(br5)

    let a6 = document.createElement("a")
    a6.innerText = onFulfilled[5]["title"]
    a6.href = onFulfilled[5]["url"]
    addon.appendChild(a6)
    let br6 = document.createElement("br")
    addon.appendChild(br6)

    let a7 = document.createElement("a")
    a7.innerText = onFulfilled[6]["title"]
    a7.href = onFulfilled[6]["url"]
    addon.appendChild(a7)
    let br7 = document.createElement("br")
    addon.appendChild(br7)

    let a8 = document.createElement("a")
    a8.innerText = onFulfilled[7]["title"]
    a8.href = onFulfilled[7]["url"]
    addon.appendChild(a8)
    let br8 = document.createElement("br")
    addon.appendChild(br8)

    let a9 = document.createElement("a")
    a9.innerText = onFulfilled[8]["title"]
    a9.href = onFulfilled[8]["url"]
    addon.appendChild(a9)
    let br9 = document.createElement("br")
    addon.appendChild(br9)

    let a10 = document.createElement("a")
    a10.innerText = onFulfilled[9]["title"]
    a10.href = onFulfilled[9]["url"]
    addon.appendChild(a10)
    let br10 = document.createElement("br")
    addon.appendChild(br10)

    let a11 = document.createElement("a")
    a11.innerText = onFulfilled[10]["title"]
    a11.href = onFulfilled[10]["url"]
    addon.appendChild(a11)
    let br11 = document.createElement("br")
    addon.appendChild(br11)

    let a12 = document.createElement("a")
    a12.innerText = onFulfilled[11]["title"]
    a12.href = onFulfilled[11]["url"]
    addon.appendChild(a12)
    let br12 = document.createElement("br")
    addon.appendChild(br12)


}, onRejected=>{
    console.log(onRejected)
});