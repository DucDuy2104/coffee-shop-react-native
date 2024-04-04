import InterImg from "../assets/interImg/InterImg"
function SizeItems(name, price, amount) {
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.total = (price * amount);
}
const OrderList = [
    {
        date: '20th March 16:23',
        total: 74.40,
        listCart: [
            {
                name: 'Cappuccino',
                topping: 'Steamed Milk',
                img: InterImg.cappuccinoSteamMilk,
                listSize: [
                    new SizeItems('S', 4.20, 2),
                    new SizeItems('M', 6.20, 2),
                    new SizeItems('L', 8.02, 2)
                ]
            },
            {
                name: 'Cappuccino',
                topping: 'Froam',
                img: InterImg.cappuccinoFroam,
                listSize: [
                    new SizeItems('S', 4.20, 2),
                    new SizeItems('M', 6.20, 2)
                ]
            }
        ]
    },
    {
        date: '19th March 2023',
        total: '34.40',
        listCart: [
            {
                name: 'Liberica Beans',
                img: InterImg.bean1,
                listSize: [
                    new SizeItems('250mg', 4.20, 2),
                    new SizeItems('500mg', 6.20, 2),
                    new SizeItems('1000gm', 8.20, 2)
                ]
            }
        ]
    }

]

export default OrderList
