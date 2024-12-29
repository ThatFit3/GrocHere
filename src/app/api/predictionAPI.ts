import axios from "axios";

const items:any = require("../../jsons/items.json");

export const predict = async(inputs : Array<string>, location: number) => {
    let items_cat = inputs.map((input) => items[input]) 
    
    let res = await axios.post("http://127.0.0.1:5000", {
        "category": items_cat,
        "location": location
    })

    return res.data
}