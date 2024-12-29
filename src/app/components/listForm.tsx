"use client"

import { useState } from "react";
import { predict } from "../api/predictionAPI";

export default function ListForm() {
    const [textAreaValue, setTextAreaValue] = useState("")
    const [locationInput, setLocationInput] = useState(1)

    const test = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        const items = textAreaValue
            .split(/[\n,-]+|\d+\.\s*/)
            .map(item => item.trim())
            .filter(item => item);

        console.log(items)

        let res = await predict(items, locationInput)
        console.log(res)
    }

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextAreaValue(e.target.value);
    };

    const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLocationInput(parseInt(e.target.value))
    }

    return (
        <form action="POST" onSubmit={test} className="flex flex-col w-full">
            <div className="join join-horizontal text-white border-primary bg-primary w-fit flex items-center" >
                <p className="join-item mx-4">Select location</p>
                <select className="join-item select select-bordered" value={locationInput} onChange={handleLocationChange}>
                    <option value="1">Tier 1</option>
                    <option value="2">Tier 2</option>
                    <option value="3">Tier 3</option>
                </select>
            </div>
            <span className="label label-text">Write your grocery list here</span>
            <textarea
                className="input input-primary text-white resize-none p-3 h-28"
                placeholder="The grocery list..."
                onChange={handleTextAreaChange}
                value={textAreaValue}></textarea>
            <button className="btn btn-primary px-7 mt-3" type="submit">Submit</button>
        </form>
    );
}