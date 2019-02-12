var config = {
    apiKey: "AIzaSyDfiBzLoNU4t5q_hOdcFjg-RGKNFnZ5wxg",
    authDomain: "berks-technology-club-admin.firebaseapp.com",
    databaseURL: "https://berks-technology-club-admin.firebaseio.com",
    projectId: "berks-technology-club-admin",
    storageBucket: "berks-technology-club-admin.appspot.com",
    messagingSenderId: "203643757535"
  };
  firebase.initializeApp(config);
  
  // global variable for referencing the database
  var db = firebase.firestore();
  // global variable for referencing storage
  var storage = firebase.storage();
  var storageRef = storage.ref();
  
  console.log("testing");

  // add a card for each event in the db
  
  function getEvents() {
      db.collection('events').onSnapshot(function(snapshot) {
        snapshot.docChanges().forEach(function(change) {
          var name = change.doc.data().name;
          var desc = change.doc.data().desc;
          var imageUrl = change.doc.data().imageUrl;
          var eventID = change.doc.id;
          if (change.type == "added") {
            console.log('Event card added');
            // @TODO update this mobile version
            document.getElementById('event_cards_mobile').innerHTML += '\
              <div class="card" id="mevent_'+eventID+'">\
                  <div class="card-image">\
                    <img src='+imageUrl+'>\
                    <span class="card-title">'+name+'</span>\
                  </div>\
                  <div class="card-content">\
                    <p>'+desc+'</p>\
                  </div>\
                </div>\
            ';
  
              document.getElementById('event_cards_desktop').innerHTML += '\
              <div class="card medium horizontal pwhite" id="devent_'+eventID+'">\
                <div class="card-image">\
                  <img src="'+imageUrl+'">\
                </div>\
                <div class="card-stacked">\
                  <div class="card-content">\
                      <h2 class="header">'+name+'</h2>\
                      <p>'+desc+'</p>\
                  </div>\
                </div>\
            </div>\
                  ';
          }
          if (change.type == "modified") {
            console.log('Event card modified');
            // desktop
            document.getElementById('devent_'+eventID).innerHTML = '\
            <div class="card medium horizontal pwhite" id="devent_'+eventID+'">\
              <div class="card-image">\
                <img src="'+imageUrl+'">\
              </div>\
              <div class="card-stacked">\
                <div class="card-content">\
                    <h2 class="header">'+name+'</h2>\
                    <p>'+desc+'</p>\
                </div>\
              </div>\
          </div>\
                '
          }
          if (change.type == "removed") {
            console.log('Event card deleted');
            // desktop
            document.getElementById('devent_'+eventID).remove();
          }
        });
      });
  }
  getEvents();