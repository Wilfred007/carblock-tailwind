import React, {useContext} from 'react'
import { BlockchainContext } from '../pages/context/BlockchainContext'
import { ConnectKitProvider, ConnectKitButton, getDefaultClient } from "connectkit";



const navigation = () => {
 const {connectWallet, currentAccount} = useContext (BlockchainContext)
  return (
    <nav className='flex justify-between items-center w-full p-6 bg-gray-800'>
      <div className='flex items-center space-x-2'>
          <img className='w-14 rounded-full' src='./images/logo.png' />
          <p className='text-white font-semibold text-3xl'>CarBlock</p>
      </div>
      <ConnectKitButton />
    </nav>
    )
}

export default navigation