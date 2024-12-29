import SummaryPrediction from "./graph";

export default function SuccessSummary({ prediction }: { prediction: Record<string, number> }) {
    // Determine the best outlet based on the highest value
    const bestOutlet = Object.entries(prediction).reduce(
        (best, [outletId, value]) => (value > best.value ? { outletId, value } : best),
        { outletId: "", value: -Infinity }
    );

    return (
        <div className="relative p-6 h-full">
            <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>

            <h3 className="font-bold text-2xl mb-4">Result</h3>
            <div className="w-full flex justify-center p-6">
                <div className="w-1/2 px-10">
                    <h4 className="font-bold text-lg mt-4">Best outlet</h4>
                    <p>{bestOutlet.outletId ? `${bestOutlet.outletId} (${bestOutlet.value})` : "No outlets available"}</p>
                    <h4 className="font-bold pt-3 text-lg pb-1">All prediction:</h4>
                    {Object.entries(prediction).map(([outletId, value]) =>
                        value > 0 && (
                            <div key={outletId}>
                                <p className="font-bold"> - {outletId}</p>
                                <p>Value: {value}</p>
                            </div>
                        )
                    )}


                </div>
                <div className="w-1/2">
                    <SummaryPrediction summaryPrediction={prediction} />
                </div>
            </div>
        </div>
    );
}
