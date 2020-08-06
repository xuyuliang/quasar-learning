
function tom () {
    for (var counter = 0; counter < 10; counter++) {
        console.log(counter)
    }
    console.log('last line:' + counter)
    var i = 0
    var a = i++
    console.log('a=' + a)
    console.log('i=' + i)
    i = 0
    console.log('i++=' + i++)
    console.log('i finally:' + i)
    i = 0
    console.log('++i=' + ++i)
    console.log('i finally:' + i)
    i = 0
    a = i++
    console.log(i)
    console.log(a)
}

var name = 'cartoon'

tom()
