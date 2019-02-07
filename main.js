var config = {
    apiKey: "AIzaSyAeI5kTLe6xckSP6HQ9nPiJll5TyVydbZI",
    authDomain: "fir-177d6.firebaseapp.com",
    databaseURL: "https://fir-177d6.firebaseio.com",
    projectId: "fir-177d6",
    storageBucket: "",
    messagingSenderId: "561463223606"
  };
  firebase.initializeApp(config);

  var Gname = document.querySelector('#name');
  var insert = document.querySelector('#insert');
  var update = document.querySelector('#update');
  var remove = document.querySelector('#delete');


  // Insert code
  insert.addEventListener('click', function(){
   var name = Gname.value;
   var dbInsert =  firebase.database().ref().child('name2').set(name);

  });

  // update code
  update.addEventListener('click', function(){
    var name = Gname.value;
    var dbUpdate = firebase.database().ref().update({name2 : name});
  });

  //Delete code
  remove.addEventListener('click' , function(){
      var name = Gname.value;
      var dbRemove = firebase.database().ref().child(name).remove();
  });