async function calculatePrice() {
    if (distance && cityLoad && cityUnload) { // проверяем, заполнены ли необходимые проге поля
        // если город погрузки это Севастополь, то ставим в качестве "точки" город выгрузки. Иначе "точка" равна городу погрузки
        let to = cityLoad;
        if (to == 'Севастополь') to = cityUnload;

        let data = {
            'cityLoad': to, // "точка". ГОРОД, а не полный адрес
            'workTime': workTime, // время работы, по дефолту 1 
            'loaders': loaders, // количество грузчиков, по дефолту 0
            'distance': distance, // дистанция между пунктами погрузки и выгрузки
        };

        let priceCalc = (await axios.get(`https://api.tiger-park.ru/api/v2/calculatePrice?${new URLSearchParams(data).toString()}`)
            .then(res => res.data)).price; // получение цены

        if (noRush) priceCalc = Number(priceCalc) * 0.9; // если выбран пункт БЕССРОЧНО, то скидка -10%

        priceCalc = Math.round(priceCalc * 100) / 100; // округляем до сотни

        setPrice(priceCalc); // отображаем значение на странице
    }
}