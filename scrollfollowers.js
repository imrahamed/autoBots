for(let i =0; i<20; i++) {
var div = document.getElementsByClassName("isgrP")[0];
 setTimeout(function timer() {
       div.scrollTop = div.scrollHeight - div.clientHeight;
    }, (i * 2  * 1000));
}
