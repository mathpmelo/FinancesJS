app.factory('PlanningService', function ($http, DataManagement, $q) {

    function loadBillsAndIncomes() {
        var q = $q.defer();
        DataManagement.getData("conta").then(conta => {
            DataManagement.getData("renda").then(renda => {
                var obj = {};
                //Call function to deal with the data
                obj.actual = calculateActualRemaining(renda.data, conta.data);
                obj.next = calculateProjection(renda.data, conta.data);
                q.resolve(obj);
            })
        }, () => {
            q.reject("An error occured when GETing all data")
        })
        return q.promise
    }

    function calculateActualRemaining(income, bill) {
        //This functions sums every renda and every conta, subtract and return the results
        var sumIncome = 0;
        //debugger;
        income.forEach(function (income) {
            sumIncome += income.valor;
        });

        var sumBill = 0;
        bill.forEach(function (bill) {
            sumBill += bill.valor;
        })

        return sumIncome - sumBill

    }

    function calculateProjection(income, bill) {
        var sumMonth = 0;
        var data = new Date();
        var mesAtual = data.getMonth();
        var year = [{
            month: returnMonthName(mesAtual),
            value: null
        }];

        var x = mesAtual + 1;
       //calculates a projection for one year
        for (let i = 0; i < 12; i++) {
        
        var sumIncomeMonth = 0;
        income.forEach(income => {
            sumIncomeMonth += income.valor;
        });
        var sumBillsMonth = 0;

        bill.forEach(bill => {
            if (bill.parcelas != 0) {
                sumBillsMonth += bill.valor;
                bill.parcelas -= 1;
            }
        });

        sumMonth = sumIncomeMonth - sumBillsMonth;
        year[i] = {};
        year[i].value = sumMonth;
       
        //makes month stop at december and do the loop to january
       if(x > 11){
        x = 1;
       } else x += 1;

        year[i].month = returnMonthName(x);
    }
    //debugger;
    return year
    }
// 
    function returnMonthName(month){
        switch(month){
            case 1: return "January"
            case 2: return "February"
            case 3: return "March"
            case 4: return "April"
            case 5: return "May"
            case 6: return "June"
            case 7: return "July"
            case 8: return "August"
            case 9: return "September"
            case 10: return "October"
            case 11: return "November"
            case 12: return "December"
            default: return "Invalid Month"
        }

    }



    return {

        loadBillsAndIncomes: loadBillsAndIncomes,
        calculateActualRemaining: calculateActualRemaining,
        calculateProjection: calculateProjection,
        returnMonthName: returnMonthName
    };
});
