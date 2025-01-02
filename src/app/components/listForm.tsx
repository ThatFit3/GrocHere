"use client"

import { useState } from "react";
import { predict } from "../api/predictionAPI";
import SuccessModal from "./successModal";

export default function ListForm() {
    const [textAreaValue, setTextAreaValue] = useState("")
    const [locationInput, setLocationInput] = useState(1)
    const [prediction, setPrediction] = useState({})
    const [canShow, setCanShow] = useState(false)

    const test = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const items = textAreaValue
            .split(/[\n,-]+|\d+\.\s*/)
            .map(item => item.trim())
            .filter(item => item);

        console.log(items)

        let res = await predict(items, locationInput)

        if (res.status == 250) {
            (document.getElementById('fail-modal') as HTMLDialogElement).showModal()
        } else {
            console.log(res.data.summary_prediction);
            (document.getElementById('success-modal') as HTMLDialogElement).showModal()
            setPrediction(res.data.summary_prediction)
            setCanShow(true)
        }
    }

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextAreaValue(e.target.value);
    };

    const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLocationInput(parseInt(e.target.value));
    }

    const handleShowModal = () => {
        if (canShow) {
            (document.getElementById('success-modal') as HTMLDialogElement).showModal()
        }
    };


    return (
        <>
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
                <div className="md:block hidden join join-horizontal w-full mt-3">
                    <button className="join-item btn btn-primary px-7 w-full md:w-3/4" type="submit">Submit</button>
                    <button className={`join-item btn btn-${canShow ? "accent" : "disabled"} px-7 w-1/4`} disabled={!canShow} type="button" onClick={handleShowModal}>See result</button>
                </div>
                <button className="md:hidden join-item btn btn-primary px-7 w-full md:w-3/4 mt-4" type="submit">Submit</button>

                <button className={`md:hidden join-item btn btn-${canShow ? "accent" : "disabled"} px-7 w-full mt-4`} disabled={!canShow} type="button" onClick={handleShowModal}>See result</button>

            </form>

            <dialog id="success-modal" className="modal">
                <div className="modal-box w-11/12 h-fit max-w-5xl overflow-auto">
                    <SuccessModal prediction={prediction} />
                </div>
            </dialog >

            <dialog id="fail-modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <h3 className="font-bold text-lg">Fail modal</h3>
                    <p className="py-4">There is no valid item in the list</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog >
        </>
    );
}