export function foodItems(){
    return{
        type:'FOOD_ITEMS', // this is the type of my action
        payload: 
        [
            {id:1, name:"Donuts"},
            {id:2, name:"Ice-cream"},
            {id:3, name:"Chocolates"} // this is the data that needs to be displayed
        ]
    }
}