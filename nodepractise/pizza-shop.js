const EventEmitter = require('events')

class PizzaShop extends EventEmitter {
    constructor(){
        super();
        this.orderNumber = 0;
    }
    order( size,type){
        this.orderNumber++
        this.emit('order',size,type)
    }
    displayOrderNumber(){
        console.log(`Current order number: ${this.orderNumber}`);
    }
}
module.exports = PizzaShop;