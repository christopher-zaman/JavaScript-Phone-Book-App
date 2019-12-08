
names = ["Chris","Mike","Zed","Jones"];
var phones = new Array(917,347,718,516);
count = 0;
var i;
var myBooln;

window.onload = function()
{
  document.getElementById("feature-one").style.display = 'none';
  document.getElementById("feature-two").style.display = 'none';
  document.getElementById("feature-three").style.display = 'none';
  document.getElementById("feature-four").style.display = 'none';
  document.getElementById("feature-five").style.display = 'none';
}

//EXAMPLE
var input = document.getElementById("theMainMenu");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myMainBtn").click();
  }
});

var displayMainMenu = document.getElementById("mainMenu").innerHTML = "Select one:<br> 1. Search By Name<br> 2. Search By Number<br> 3. Add Name<br> 4. Display all Records<br> 5. Delete a record";

// Feature Zero
function mainFunction()
{
  userChoice = document.getElementById("theMainMenu").value;
  userChoiceToInteger = parseFloat(userChoice);
  if(userChoiceToInteger === 1)
  {
    document.getElementById("feature-one").style.display = 'block';
    var entryWas = document.getElementById("useChoice").innerHTML = "You chose: " + userChoiceToInteger;
  }
  else if(userChoiceToInteger != 1) {
      console.log(userChoiceToInteger);
  }
  if(userChoiceToInteger === 2)
  {
    document.getElementById("feature-two").style.display = 'block';
  }
  if(userChoiceToInteger === 3)
  {
    document.getElementById("feature-three").style.display = 'block';
  }
  if(userChoiceToInteger === 4)
  {
    document.getElementById("feature-four").style.display = 'block';
    document.getElementById("displayAllResult").style.display = 'block';
    document.getElementById("display-all").click();
  }
  if(userChoiceToInteger === 5)
  {
    document.getElementById("feature-five").style.display = 'block';
  }
}

// Feature One
function searchByName()
{

    var nameEntered = document.getElementById("searchName").value;
    console.log("The variable entered is type " + typeof(nameEntered));
    console.log(nameEntered);

    for(i = 0; i < names.length; i++)
    {
      if(names.indexOf(nameEntered)>=0)
      {
        var nameLocatedAtIndex = (names.indexOf(nameEntered));
        var theNameWasFound = document.getElementById("nameResult").innerHTML = "The name was found, the number is " + phones[nameLocatedAtIndex];
      }
    }
}
// Enter Button for Feature one search by name (cannot be within function itself because it calls itself)
var input = document.getElementById("searchName");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("searchableFunction").click();
  }
});

// Feature Two
function lookUp()
{
  var submittedNumber = document.getElementById("lookitup").value;
  var changeInputToNumber = parseFloat(submittedNumber);
  console.log("The variable type is " + typeof(changeInputToNumber));
  for(i = 0; i <= names.length; i++)
  {
    if (phones.indexOf(changeInputToNumber)>=0)
    {
      console.log(changeInputToNumber);
      var acc = phones.indexOf(changeInputToNumber)
      var theName = document.getElementById("result").innerHTML = "Yes that number is in the book. It's " + names[acc] + "'s number";
    }
    else if(phones.indexOf(changeInputToNumber)<0)
      {
        var theNotFoundName = document.getElementById("result").innerHTML = "Nope, that number is not in file but let's add it<br> Enter the Name";
        console.log(changeInputToNumber);
        var myBooln = true;
      }
  }
  if(myBooln)
  {
    var btn = document.createElement("INPUT");
    btn.id = 'usersinputs';
    document.body.appendChild(btn);

    var moveIt = document.getElementById("moveithere").innerHTML = btn;

    /*var makeaNewButton = document.createElement("BUTTON");
    document.body.appendChild(makeaNewButton);
    makeaNewButton.innerHTML = "Add new name";
    makeaNewButton.setAttribute("onclick","addName");*/
  }
  count++;
}

// Enter Button for Feature Two search by number (cannot be within function itself because it calls itself)
var input = document.getElementById("lookitup");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("searchByNumberFunction").click();
  }
});

// Feature Three
function addName()
{
    var newNumber = document.getElementById("lookitup").value;
    var nameFieldForThreeVar = document.getElementById("nameFieldForThree").value;
    var numFieldForThreeVar = document.getElementById("numFieldForThree").value;

    names.push(nameFieldForThreeVar);
    var parsednumFieldForThreeVar = parseFloat(numFieldForThreeVar);
    phones.push(parsednumFieldForThreeVar);
    /*if(newNumber == false)
    {
      var makefieldToGrabName = document.createElement("INPUT");
      makefieldToGrabName.id = 'take-name';
      document.body.appendChild(makefieldToGrabName);
      console.log(newNumber);

      var gotIt = document.getElementById("take-name").value;
      names.push(gotIt);
      console.log(names);
    }

      var parsedNewNumber = parseFloat(newNumber);
      phones.push(parsedNewNumber);
      console.log(phones);

      var takeUserInput = document.getElementById("usersinputs").value;
      names.push(takeUserInput);
      console.log(names);*/

}
// Enter Button for Feature Three Add NAME FIELD (cannot be within function itself because it would call itself)
var input = document.getElementById("nameFieldForThree");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("addNameAndNumFunction").click();
  }
});
// Enter Button for Feature Three Add NUMBER FIELD (cannot be within function itself because it would call itself)
var input = document.getElementById("numFieldForThree");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("addNameAndNumFunction").click();
  }
});

// Enter Button for Feature Four (cannot be within function itself because it would call itself)
var input = document.getElementById("numFieldForThree");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("addNameAndNumFunction").click();
  }
});

// Feature Four
function displayAll()
{
  for(i = 0; i < names.length; i++)
  {
    //var reportAll = "Here are all the names and numbers in file" + names[i] + " " + phones[i] + "<br>";
    var eachRow = document.getElementById("displayAllResult").innerHTML += (i+1) + ": " + names[i] + " " + phones[i] + "<br>";
  }
}

// Feature Five (95% COMPLETE)
function deleteNameAndNumber()
{
  var takeNameToBeDeleted = document.getElementById("deleteThis").value;
  for(i = 0; i < names.length; i++)
  {
    if(names.indexOf(takeNameToBeDeleted)>=0)
    {
      var weRemoveThisIndex = (names.indexOf(takeNameToBeDeleted));
      var showWhoDeleted = document.getElementById("whoGotDeleted").innerHTML = names[weRemoveThisIndex] + " was deleted";
      names.splice(weRemoveThisIndex, 1);
      phones.splice(weRemoveThisIndex, 1);
      console.log(weRemoveThisIndex);
      console.log(names.length);
      console.log(phones);
      var setHtml = document.getElementById("showNewArray").innerHTML = "the new records are " + names + " " + phones;
    }
    //var checkIfEmpty = document.getElementById("deleteThis").value;
    //console.log(checkIfEmpty);
    if(names.length == 0)
    {
      var newSetHtml = document.getElementById("showNewArray").innerHTML = "No records in the book";
    }
  }

}
// Enter Button for Feature Five Delete Record (cannot be within function itself because it would call itself)
var input = document.getElementById("deleteThis");
input.addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
   event.preventDefault();
   document.getElementById("deleteRecord").click();
  }
});
