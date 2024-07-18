/*

1) What is callback hell, How we can prevent, How we can resolve by Promise, Aysnc etc..
2)query("SELECT clientId FROM clients WHERE clientName='picanteverde';", function(id){
  query(SELECT * FROM transactions WHERE clientId=${id}, function(transactions){
    transactions.each((transac) => {
      query(UPDATE transactions SET value = ${transac.value*0.1} WHERE id=${transac.id}, (error) => {
        if(!error){
          console.log("success!!");
        }else{
          console.log("error");
        }
      });
    });
  });
});

Is there hell in this if yes resolved it
3) How much complexity you worked in your project
4)  Show me the Code of any Project that you worked

*/