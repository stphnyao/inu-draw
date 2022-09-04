import { ArrowUturnDownIcon, CurrencyDollarIcon, ArrowPathIcon, StarIcon } from '@heroicons/react/24/solid'
import { useContract, useContractData, useContractCall } from '@thirdweb-dev/react'
import React from 'react'
import { ethers } from "ethers"
import { currency } from "../constants"
import toast from "react-hot-toast"

function AdminControls() {
    const { contract, isLoading } = useContract(process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS)
    const { data: operatorTotalCommission } = useContractData(contract, "operatorTotalCommission")

    const { mutateAsync: DrawWinnerTicket } = useContractCall(contract, "DrawWinnerTicket")
    const { mutateAsync: WithdrawCommission } = useContractCall(contract, "WithdrawCommission")
    const { mutateAsync: RestartDraw } = useContractCall(contract, "restartDraw")
    const { mutateAsync: RefundAll } = useContractCall(contract, "RefundAll")

    const onDrawWinnerTicket = async () => {
        const notification = toast.loading("Winner is being drawn..")
    
        try{
          const data = await DrawWinnerTicket([{}])
    
          toast.success("Winner draw successfull!", {
            id: notification
          })
        } catch(err) {
          toast.error("Whoops something went wrong!", {
            id: notification
          })
        }
    }

    const onWithdrawCommission = async () => {
        const notification = toast.loading("Withdrawing commission..")
    
        try{
          const data = await WithdrawCommission([{}])
    
          toast.success("Commission withdrawal successfull!", {
            id: notification
          })
        } catch(err) {
          toast.error("Whoops something went wrong!", {
            id: notification
          })
        }
    }

    const onRestartDraw = async () => {
        const notification = toast.loading("Restarting draw..")
    
        try{
          const data = await RestartDraw([{}])
    
          toast.success("Draw restart successfull!", {
            id: notification
          })
        } catch(err) {
          toast.error("Whoops something went wrong!", {
            id: notification
          })
        }
    }

    const onRefundAll = async () => {
        const notification = toast.loading("Refunding users..")
    
        try{
          const data = await RefundAll([{}])
    
          toast.success("Draw refund successfull!", {
            id: notification
          })
        } catch(err) {
          toast.error("Whoops something went wrong!", {
            id: notification
          })
        }
    }



    return (
        
        <div className="text-white text-center px-5 py-3 rounded-md border-emerald-300/20 border">
            <h2 className="font-bold">
                Admin Controls
            </h2>
            <p className="mb-5">
                Total Commission to be Withdrawn: {" "}
                {operatorTotalCommission && 
                      ethers.utils.formatEther(
                        operatorTotalCommission.toString()
                        )
                      }{" "}{currency}
            </p>
            <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                <button 
                    onClick={onDrawWinnerTicket}
                    className="admin-button"
                >
                    <StarIcon className="h-6 mx-auto mb-2"/>
                    Draw Winner
                </button>
                <button 
                    onClick={onWithdrawCommission}
                    className="admin-button"
                >
                    <CurrencyDollarIcon className="h-6 mx-auto mb-2"/>
                    Withdraw Commission
                </button>
                <button 
                    onClick={onRestartDraw}
                    className="admin-button"
                >
                    <ArrowPathIcon className="h-6 mx-auto mb-2"/>
                    Restart Draw
                </button>
                <button 
                    onClick={onRefundAll}
                    className="admin-button"
                >
                    <ArrowUturnDownIcon className="h-6 mx-auto mb-2"/>
                    Refund All
                </button>
            </div>
        </div>
    )
}

export default AdminControls
