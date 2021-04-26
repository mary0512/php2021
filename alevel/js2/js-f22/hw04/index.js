//task1
console.log("task1");

let handbag = {
    lipstik : "red",
    blush : "pink",
    setItem : setInHandbag,
    delItem : delFromHandbag
  };
  function setInHandbag(key,value){
    this[key] = value; //добавляем новое свойство в объект handbag (кладём предмет в сумочку)
  };
  function delFromHandbag(key){
    delete this[key] //удаляем одно из свойств из объекта handbag (забираем предмет из сумочки)
  };
  console.log(handbag);
  handbag.setItem("phone","samsung");//это свойство появится в объекте и отобразитсяв консоли 
  handbag.setItem("hairbrush", "round");
  console.log(handbag);
  handbag.delItem("phone");//это свойство удалится из объекта и не отобразится в консоли
  console.log(handbag);

//task2
console.log("task2");

function LibraryBook(title, year, author){
  var title = title;
  var year = year;
  var author = author;
  var readerName;
  var readerData;

  function giveTheBook(client){
    readerName = client;
    readerData = new Date(); 
  };

  this.getBookInfo = function(){
      if(readerName){
        console.log(`${title} нет в наличии`)
      } else {
        console.log(`${title} в наличии`)
      };
  };

  this.getTheBook = function(client){
    if (readerName){
        return null;
      } else {
        giveTheBook(client);
        return title;
      };
  };

  this.returnBook = function(){
    readerName = null;
    readerData = null;
  };
  
  };

  let book1 = new LibraryBook("Колобок", "1965", "народная");
  book1.getBookInfo()
  console.log(book1)
  book1.getTheBook("Maryna")
  book1.getBookInfo()
  book1.returnBook()
  book1.getBookInfo()



//task3
console.log("task3");

function MasterObject() {
  // this.addProperty = function(key,value) {
  //   this[key]=value;
  // }; //оставила специально как альтернативный вариант задания;
};

MasterObject.prototype.addProperty = function(key,value) {
    this[key]=value;
};

let obj1 = new MasterObject();
let obj2 = new MasterObject();

console.log(obj1,obj2);
obj1.addProperty("color","blue");
obj2.addProperty("eyeColor", "black")
console.log(obj1,obj2);