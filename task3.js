////task3
////decleration
var counter=1;
var users= document.getElementById("user");
console.log(users);
var books= document.getElementById("books");
console.log(books);
var ok_btn=document.getElementById("btn1");
console.log(ok_btn);
var error= document.getElementById("errors")
console.log(error);
var bookform= document.getElementsByClassName("books-form")[0];
console.log(bookform);
var bookname= document.getElementById('book_name');
console.log(bookname);
var bookprice= document.getElementById('book_price');
console.log(bookprice);
var authorname= document.getElementById('author_name');
console.log(authorname);
var authormail= document.getElementById('author_mail');
console.log(authormail);
var submit=document.getElementById("submit");
console.log(submit);
var text=document.getElementById("txt");
console.log(text);
var text1= document.getElementById("txt1");
var text2=document.getElementById("txt2");
var text3=document.getElementById('txt3');
var tableform= document.getElementsByClassName('table')[0];
var tbody= document.getElementsByTagName("tbody")[0];
var user_array=[];
var book_array=[];
var price_array=[];
var author_array=[];
var mail_array=[];

////create object//////

// var book1= new Books(bookname.value,bookprice.value);
// var author1= new Author(authorname.value,authormail.value);
// user_array.push(book1);
// console.log(user_array);




//validation for book numbers/////
function books_numvalidation(e){
  e.preventDefault();
if(books.value==""){
error.innerHTML=("This field is required");

}
else if(isNaN(books.value)){
  error.innerHTML=("please enter only numbers");
 
  }
  else if(books.value<1){
    error.innerHTML=("please enter valid number");
    
  }else{
    // console.log(books.value);
    users.style.display="none";
    bookform.style.display="inline";
    // mail_array.push(books.value)
    return true;
  }

} 
ok_btn.addEventListener('click',books_numvalidation);

//////////////////////////
function Books(){
  this.namebook=bookname.value;
  this.price=bookprice.value;
  this.author= new Author(authorname.value,authormail.value);

}
function Author(n1,m){
  this.authorname=n1;
  this.authormail=m;
}

///// validation for books

function books_validation(e){
  ////////book name validation
function name_validation(e){
    var booksname= bookname.value;
    // console.log(booksname);
  if (booksname==""){
      text.innerHTML="This field is required";
      e.preventDefault();
  }
  else if(isFinite(booksname)) {
      text.innerHTML="Please enter strings only";
      e.preventDefault();
  } else if (booksname.length<3){
      text.innerHTML="please enter valid name";
      e.preventDefault();
  } else{
      console.log(booksname);
      text.innerText=""
      // book_array.push(booksname);
      // console.log(book_array);
      // return true;
  }
  }
  // submit.addEventListener('click',name_validation);

  //////price validation
  function price_validation(e){
        var price=bookprice .value;
        // console.log(bookprice);
      if (price==""){
          text1.innerHTML="This field is required";
          e.preventDefault();
      }
      else if(isNaN(price)) {
          text1.innerHTML="Please enter numbers only";
          e.preventDefault();
      } else if (price<1){
          text1.innerHTML="please enter valid price";
          e.preventDefault();
      } else{
          console.log(price);
          text1.innerText="";
          // price_array.push(price);
          // console.log(price_array);
          // return true;
      }
      }
      // submit.addEventListener('click',price_validation);


  ////////author name validation
  function author_validation(e){
    var author_name= authorname.value;
    // console.log(author_name);
  if (author_name==""){
      text2.innerHTML="This field is required";
      e.preventDefault();
  }
  else if(isFinite(author_name)) {
      text2.innerHTML="Please enter strings only";
      e.preventDefault();
  } else if (author_name.length<3){
      text2.innerHTML="please enter valid name";
      e.preventDefault();
  } else{
      console.log(author_name);
      text2.innerText=""
      // author_array.push(author_name);
      // console.log(author_array);
      // return true;
  }
  }
  // submit.addEventListener('click',author_validation);

//////mail validation
  function mail_validation(event){
    // console.log(authormail.value);
    var author_mail=authormail.value;
    var mail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var mail_test=mail.test(author_mail);

    if(author_mail==""){
        text3.innerHTML="This field is required";
        event.preventDefault();
        }
    else if(mail_test!=true){
        text3.innerHTML="please enter valid mail";
        event.preventDefault();
        }
    else{
      text3.innerText="";
      // mail_array.push(authormail.value);
      console.log(mail_array);
     
      console.log("mm");
   
    
      var book1= new Books;
      book_array.push(book1.namebook);
      price_array.push(book1.price);
      author_array.push(book1.author.authorname);
      mail_array.push(book1.author.authormail);
      console.log(book_array);
      console.log(price_array);
      console.log(author_array);
      console.log(mail_array);

           if (counter == books.value)
           {
          console.log("hello bh");
          bookform.style.display="none";
          tableform.style.display="inline";
          for(i=0;i<book_array.length;i++){
          var tr= document.createElement('tr');
          console.log(tr);
         tr.innerHTML+="<td>"+book_array[i]+"</td><td>"+price_array[i]+"</td><td>"+author_array[i]+"</td><td>"+mail_array[i]+"</td>";
         tbody.append(tr);
      }
           }
           console.log(books.value);
    counter++;

    console.log(counter);
      bookname.value="";
      bookprice.value="";
      authorname.value="";
      authormail.value="";
      console.log(book_array);
      console.log(price_array);
      console.log(author_array);
      console.log(mail_array);
    }
}

name_validation()
price_validation()
author_validation()
mail_validation(e)
}
submit.addEventListener('click',books_validation);


