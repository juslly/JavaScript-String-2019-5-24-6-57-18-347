// 阅读以上推荐链接，了解所有的JavaScript字符串方法。


// 完成下面程序，将`name`变量中的字母全部转为为大写，输出：`'HELLO'`。
var name = 'hello';
name.toUpperCase()
alert(name);
// TODO write your code here...


// 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。
var sentence = 'good afternoon, mr mike.';
var convertToArray = sentence.split(" "); 
      for (var i = 0; i < convertToArray.length; i++) {  
        var char = convertToArray[i].charAt(0);  
        //使用 replace()方法将数组中的每个首字母大写化  
        convertToArray[i] = convertToArray[i].replace(char, function replace(char) {  
             return char.toUpperCase();  
        });  
    }  
    convertToArray.join(" ");  
  alert(convertToArray);
//TODO write your code here...


// 完成下面程序，将money变量中的金额提取出来，输出：20。
var money = '￥20';
var num = money.split('￥');
alert(num[1]);
//TODO write your code here...
