let many, time;

function start() { // функция по запуску программы
    many = +prompt("ваш бюджет на месяц");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(many) || many == null || many == '') {
        many = +prompt("ваш бюджет на месяц");
    }

}
start();




let appData = {
    budget: many, // общий бюджет
    timeDate: time, //дата
    expenses: {}, // статья и обязательные расходы в месяц
    optionalExpenses: {}, //статья не обязательных расходов
    income: [],
    savings: true //накопления
};

function cooseExpeses() { // функция по наполнению обязательных расходов
    for (let i = 0; i < 2; i++) {

        let a = prompt("Введите обязательную статью расходов в этом месяце"),
            b = prompt("Во сколько обойдется?");

        if (a != null && b != null && a != '' && b != '') {
            console.log("All right");
            appData.expenses[a] = b;
        } else {
            console.log("bad");
            i = i - 1;
            //перезапускаем цикл заново при не правильном заполнении формы
        }
    }
}
cooseExpeses();


function detectDayBudget() {
    appData.manyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет = " + appData.manyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.manyPerDay < 1000) {
        console.log('Ваш бюджет ниже среднего');
    } else if (appData.manyPerDay > 1000 && appData.manyPerDay < 5000) {
        console.log('У вас средний доход');
    } else if (appData.manyPerDay > 5000) {
        console.log('У вас высокий доход');
    } else {
        console.log('ОШИБКА');
    }
}
detectLevel();

function checkSavings() { //расчет дохода от накоплений в месяц
    if (appData.savings == true) { //если накопления есть идем дальше
        let save = +prompt("Укажите сумму накоплений"),
            percent = +prompt("Под какой процент");

        appData.monthIncome = save / 100 / 12 * percent; // расчитываем доход от накоплений в месяц
        alert("Доход с вашего депозита в месяц " + appData.monthIncome);

    }
}
checkSavings();

function chooseOptExpenses() { // функция по наполнению не обязательных расходов
    for (let i = 0; i < 3; i++) {
        let a = prompt('Статья необязательных расходов?'),
            b = prompt('во сколько обойдется?');

        if (a != null && a != '' && b != null && b != '') {
            appData.optionalExpenses[a] = b;
        } else {
            i = i - 1;
        }
    }
}

chooseOptExpenses();