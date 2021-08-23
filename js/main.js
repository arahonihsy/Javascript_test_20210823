
//問題１
//配列の重複を削除する。

const array = [2, 4, 7, 5, 4, 3, 8];


//コールバック関数の定義
//array.filterから引数を3つもらう、a - 要素、b - index、cは配列そのもの

function func1(a, b, c) {
  //indexOfは配列要素のindexを返す、重複がある場合小さい方のindexを返す。
  //そのため、indexOf(a)とインデックスbが一致しない場合は重複している。
  let x = c.indexOf(a);
  console.log("要素", a, "インデックス", b, "IndexOf", x);
  if (b === x) {
    return true;
    //一致しているときはfilterにtrueを返して、新しい配列要素を吐き出す
  } else {
    return false;
    //一致しないときは、重複しているので、filyterにfalseを返して要素を消す
  }

}

const result = array.filter(func1);

console.log(array)
console.log(result);


//テスト
const array1 = [2, 2, 2, 2, 2, 2, 8];
const result1 = array1.filter(func1);

console.log(array1)
console.log(result1);




//問題2
//2020と2021がうるう年を判定

//うるう年の判定
function leapyear(y) {

  if (y % 4 === 0) {
    //4で割り切れる年がうるう年の必須条件

    if (y % 100 === 0 && y % 400 !== 0) {
    //ただし4で割れても、100で割り切れて、かつ、400で割り切れないときは平年
      return false

    //例外以外はうるう年
    } else {
      return true

    }

    //4で割り切れない年は平年
  } else {
    return false
  }

}


//結果を表示させる、関数も引数に
function showresult(d,hoge) {

  if (hoge(d) === true) {
  console.log(`${d}はうるう年です`)
  } else {
  console.log(`${d}はうるう年ではありません`)

  }

}

showresult(2020,leapyear);
showresult(2021,leapyear);
showresult(2100,leapyear);



//結果を表示させる、関数内でleapyearを使う
function showresult1(e) {

  if (leapyear(e) === true) {
    console.log(`${e}はうるう年です`)
  } else {
    console.log(`${e}はうるう年ではありません`)

  }
}

showresult1(2020);
showresult1(2021);
showresult1(2024);