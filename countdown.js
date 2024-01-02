let datefetch = ""

function showSubmit() {   
    document.getElementById("submit").style.display = "block";
    var x = document.getElementById('date')
    var y = x.value
    
    document.getElementById("datedtime").innerHTML = "Event Date : " + " " + y;
    datefetch = y
}

function count(){
	var today = new Date
	var hour = today.getHours()

	//console.log(today)
	var time = +datefetch.slice(11,13)
	var mints = +datefetch.slice(14,16)
    console.log(mints)
	//var time = (time+":"+mints+":00")*1
	console.log(time)
	// var tomorrow = today.getDate() + 1
	var month = (+datefetch.slice(5,7))-1
	var year = +datefetch.slice(0,4)
	var dey = +datefetch.slice(8,10)
	//console.log(datefetch)
	var morning = new Date(year,month,dey,time,mints)

	
	var dayofweek = morning
	
	var remtime = morning - today

	var secs = Math.floor(remtime/1000)
	var mins = Math.floor(secs/60)
	var hours = Math.floor(mins/60)
	var days = Math.floor(hours/24)

	
	var hours = hours%24
	var mins = mins% 60
	var secs = secs%60 

	document.getElementById('days').innerHTML = days
	document.getElementById('hours').innerHTML = hours
	document.getElementById('mins').innerHTML = mins
	document.getElementById('secs').innerHTML = secs
	document.getElementById('dayof').innerHTML = dayofweek.toString().slice(0,16)

	if(days&&hour&&mints&&secs <=0){
		document.getElementById('datedtime').innerHTML= "Time out"
	}
   


	setTimeout(count,1000);
	

}
count();

function submit(){
   var date = document.getElementById('date')
	var x = date.value
	console.log(x)
}
submit()

document.createElement('year')