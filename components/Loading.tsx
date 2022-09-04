import React from 'react'
import PropogateLoader from "react-spinners/PropagateLoader"

function Loading() {
    return (
        <div className="bg-[#091B18] h-screen flex flex-col items-center justify-center">
            <div className="flex items-center space-x-2 mb-10">
                <img
                    className="rounded-full h-20 w-20"
                    src="https://img.freepik.com/premium-vector/cute-shiba-inu-dog-holding-coins-money-illustration-pet-finance-logo-vector-icon-illustration_126068-108.jpg" alt="" />
                <h1 className="text-lg text-white font-bold">Loading the Inu Draw</h1>
            </div>
            <PropogateLoader color="white" size={30} />
        </div>

    )
}

export default Loading
