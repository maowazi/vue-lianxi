import Vue from "vue";

Vue.directive("drga", (el, info) => {
    let { x, y } = info.modifiers;        //结构出x,y修饰符
    if (!x && !y) {                       //如果两个修饰符都没有时,让x,y都成为true
        x = y = true;
    }
    el.onmousedown = (e) => {
        var e = e || enent;            //鼠标按下不抬起
        let defaultX = e.offsetX;      //获得元素内部偏移量
        let defaultY = e.offsetY;

        document.onmousemove = (e) => {        //鼠标在文档上移动
            var e = e || enent;
            let ClX = e.clientX;               //获得鼠标相对于可视窗口的距离
            let ClY = e.clientY;
            if (x)
                el.style.left = ClX - defaultX + "px";
            if (y)
                el.style.top = ClY - defaultY + "px";

        }
        document.onmouseup = () => {          //鼠标从元素上抬起

            document.onmousemove = null;
        }
    }
})