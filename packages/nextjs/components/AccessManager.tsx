import React, { useState } from 'react';
import CustomInput from './CustomInput';
import { zkexchange } from '~~/contracts/zkexchange';
import { useReadContract } from 'wagmi';
import { useScaffoldWriteContract } from '~~/hooks/scaffold-eth';

const AccessManager = () => {
    const openModal = () => {
        const modal = document.getElementById('my_modal_2') as HTMLDialogElement | null;
        if (modal) {
            modal.showModal();
        }
    };

    const { writeContractAsync: writeYourContractAsync } = useScaffoldWriteContract("Zkexchange");


   

    const { data: manager_rol } = useReadContract({
        address: zkexchange.address,
        abi: zkexchange.abi,
        functionName: "MANAGER_ROLE",
        args: []
    })

    console.log(manager_rol)
    // 0x241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b08


const handleClear = () => {
    setAccount("")
}
   

    const [accountM, setAccount] = useState('')
    // const isFormFilled = tokenAddress && fee && min && max

    const manager_role = "0x241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b08"

    const addManager = async (e: any) => {
        e.preventDefault();
        // setLoading(true)
        try {
            await writeYourContractAsync({
                functionName: "grantRole",
                args: [manager_role, accountM as `0x${string}`]
              });
              handleClear()
            // setLoading(false)
        } catch (error) {
            // setLoading(false)
            console.log(error)
        }
    }


    return (
        <div>
            <button className="btn" onClick={openModal}>Add Manager</button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello Admin!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="" >
                        <form method="dialog">
                        <label htmlFor="label" className=" text-lg mb-3 text-center font-bold p-10">Address to be manager</label>
                            <CustomInput
                                type="string"
                                name="string"
                                // required
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAccount(e.target.value)}
                                className="w-full py-3 rounded-lg flex text-black items-center px-3 bg-[#EAF0F7]"
                            />
                            <div>

                            <button  className=' py-5 px-5 rounded-xl bg-[#2b3655]' onClick={addManager}>Add </button>
                            <button className="btn mt-5 btn-xs sm:btn-sm md:btn-md lg:btn-lg" >Close</button>
                            </div>

                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AccessManager;
