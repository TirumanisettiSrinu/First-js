function Off(){
    document.getElementById("Status").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("cat-img").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switch-info").textContent="Switched Off";
    document.getElementById("onstyle").style.backgroundColor="#22c55e";
    document.getElementById("offstyle").style.backgroundColor="#cbd2d9";
 }
 
 function on(){
    document.getElementById("Status").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("cat-img").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switch-info").textContent="Switched On";
    document.getElementById("onstyle").style.backgroundColor="#ffffff";
    document.getElementById("offstyle").style.backgroundColor="#e12d39";
 }