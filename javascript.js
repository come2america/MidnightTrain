var config = {
    apiKey: "AIzaSyBJAuA5b3kr4FZQoJ7byn8KwB2Z8lv4zd8",
    authDomain: "train-71a78.firebaseapp.com",
    databaseURL: "https://train-71a78.firebaseio.com",
    projectId: "train-71a78",
    storageBucket: "train-71a78.appspot.com",
    messagingSenderId: "720645484129"
  };
  firebase.initializeApp(config);
  
        //   database variable 
        var database = firebase.database();

        // Capture Button Click
        $(".submitbtn").on("click", function (event) {
            // Don't refresh the page!
            event.preventDefault();

            // YOUR TASK!!!
            var userName = $("#nameinput").val().trim();
            var userDes = $("#desinput").val().trim();
            var userStartDate = $("#startdateinput").val().trim();
            var userRate = $("#rateinput").val().trim();

            database.ref().push({
                name: userName,
                Des: userDes,
                startDate: userStartDate,
                rate: userRate
            })

            $('#myForm')[0].reset();
        });

        database.ref().on("child_added", function (snapshot) {
            var data = snapshot.val()
            console.log(data);

            var newRow = $("<tr>");
              
            var momentMonths = function(e) {
                var diffMonth =moment().diff(moment(e), "months") ;
                return diffMonth;
         }
            var nextarrival= function(date){
                console.log(data.rate) 
var arrival = moment(date , "MM-DD-YYYY" ).add( data.rate , "months" );
console.log(date)
console.log(arrival)
           return arrival }
  nextarrival() 
            var tdName = "<td>" + data.name + "</td>"
           var tdDes = "<td>" + data.Des + "</td>" 
           var tdfirst = "<td>" + data.startDate + "</td>" 
            var tdRate = "<td>" + data.rate + "</td>"
           var months = momentMonths(nextarrival (data.startDate));
        var tdNext = "<td>" + nextarrival(months) + "</td>"
            var tdMonth = "<td>" + months + "</td>"
           

            $(newRow).append(tdName, tdDes, tdfirst, tdRate, tdNext, tdMonth, )

            $("tbody").prepend(newRow);


        })











