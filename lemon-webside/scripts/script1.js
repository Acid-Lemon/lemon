$(document).keyup(function (event) {
  if (event.keyCode == "13") {
    //回车执行查询
    let search = document.getElementById("search").value;
    window.location.href = "https://cn.bing.com/search?q=" + search;
  }
});
