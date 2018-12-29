let data = require("./data")
let name_map = data.name_map

module.exports = class {

    onCreate() {
        this.state = {
            z: 0,
            demo: ""


        }

    }
    onMount() {
        // alert('Hello World');
        document.getElementById('3').value = name_map.first;
        document.getElementById('4').value = name_map.last;
    }
    abc() {
        alert(3 + 4);
    }

    multiply(q, r) {
        let p = q * r;

        return p;
    }


    showResult() {

        let x = document.getElementById('1');
        let y = document.getElementById('2');
        let z = this.multiply(Number(x.value), Number(y.value));
        this.state.z = z;
    }
    showAnswer() {
        var str1 = document.getElementById('3');
        var str2 = document.getElementById('4');
        var res = str1.value + str2.value;
        this.state.demo = res;
    }
    increment() {

        let ans = name_map.first + name_map.last;
        this.state.demo = ans;


    }
    mydatefunction() {
        document.getElementById('demo').innerHTML = Date();
    }
    addfunction() {
        var x = 5 * 10;

        document.getElementById('try').innerHTML = x;
    }
    arithmeticfunction() {
        var a = 5;
        var x = (7 + 10) * a;
        document.getElementById('test').innerHTML = x;

    }

}