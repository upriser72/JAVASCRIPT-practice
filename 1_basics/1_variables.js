const accountId = 14635;
let accountEmail = "vanshika@gmail.com";
var accountPw = "12345";
accountCity = "Kanpur";
let accountState;

// accountId=554 //not allowed to change constant
accountEmail = "vs@gmail.com";
accountPw = "527347";
accountCity = "Lucknow";

/*
Prefer not to use var because it has issues with block and functional scope
*/ //

console.log(accountId);
console.table([accountId, accountEmail, accountPw, accountCity, accountState]);
