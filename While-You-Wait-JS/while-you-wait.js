var daysUntilMyBirthday = 60;

for(i = daysUntilMyBirthday; i >= 0; i--){
      if(daysUntilMyBirthday === 0){
            console.log("It's my birthday, give me presents!!")
      }
      else if(i === 1){
            console.log("1 day until my birthday!")
            break;
      }
      else if(i === 2){
            console.log("2 days until my birthday!")
            break;
      }
      else if(i < 5){
            console.log("ALMOST THERE!")
            break;
      }
      else if(i < 30){
            console.log("Getting closer!")
            break;
      }
      else if(i > 30){
            console.log("Aww, not even close..")
            break;
      }
}
