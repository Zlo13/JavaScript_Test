let many = +prompt("ваш бюджет на месяц");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: many,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");

    if (
        (typeof (a)) === 'string' &&
        (typeof (a)) != null &&
        (typeof (b)) != null &&
        a != ' ' &&
        b != ' ' &&
        a.length < 50
    ) {
        console.log("All right");
        appData.expenses[a] = b;
    } else {
        console.log("bad");
        //нужно придумать как вернуться обратно к запросам
    }
}

appData.manyPerDay = appData.budget / 30;
alert("Ежедневный бюджет = " + appData.manyPerDay);

if (appData.manyPerDay < 1000) {
    console.log('Ваш бюджет ниже среднего');
} else if (appData.manyPerDay > 1000 && appData.manyPerDay < 5000) {
    console.log('У вас средний доход');
} else if (appData.manyPerDay > 5000) {
    console.log('У вас высокий доход');
} else {
    console.log('ОШИБКА');
}