function BTN() {
  var userInput = document.getElementById("userID").value;
  alert(
    "Hello Mr/Mrs. " +
      userInput +
      "  Your request cannot be completed at the moment because this website isn't hosted on internet !"
  );
}
/* below code is for calculator program*/
Addition = (a, b) => {
  return a + b;
};

Subtraction = (a, b) => {
  return a - b;
};

Multiplication = (a, b) => {
  return a * b;
};

Division = (a, b) => {
  return a / b;
};

Calculate = () => {
  as = document.getElementById("firstNoID").value;
  bs = document.getElementById("secNoID").value;
  a = parseFloat(as);
  b = parseFloat(bs);

  let c;
  if (!as == "") {
    stresponse = document.getElementById("choicer").value;
    if (stresponse == "Addition") {
      c =
        "The Result for addition between " +
        as +
        " and " +
        bs +
        " is " +
        Addition(a, b);
    } else if (stresponse == "Subtraction") {
      c =
        "The Result for substraction between " +
        as +
        " and " +
        bs +
        " is " +
        Subtraction(a, b);
    } else if (stresponse == "Multiplication") {
      c =
        "The Result for multiplication between " +
        as +
        " and " +
        bs +
        " is " +
        Multiplication(a, b);
    } else if (stresponse == "Division") {
      c =
        "The Result for division between " +
        as +
        " and " +
        bs +
        " is " +
        Division(a, b);
    } else {
      c = "Invalid Option";
      alert(
        "please enter correct option within the range of 1 to 4 !" + stresponse
      );
      // te = getElementById("tetter")
      // te.innerText=stresponse;
    }
  } else {
    c = "Both Numbers Must be inserted to perform the calculation !";
    // alert(c)
  }
  document.getElementById("resultID").innerText = c;
};

document.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    Calculate();
  }
});

 
function jsc(){
  console.log("On-click action even performed succesfully seems that js is working with current html file of the document visible |!")

}
a = document.getElementById("top-cover");
a.style.height=400;
