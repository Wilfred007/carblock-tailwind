import React, {useState, useEffect}  from 'react'
import {abi, contractAddress} from '../config.json'
import {ethers} from "ethers"

export const BlockchainContext = React.createContext();

const getContract = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    
    const address = contractAddress;
    const contractAbi = abi
    const contract = new ethers.Contract(address, contractAbi, signer);
    return contract
}
export const BlockchainProvider = ({children}) => {

    const [ currentAccount, setCurrentAccount ] = useState('');
    const [balance, setBalance] = useState ([]);


    const connectWallet = async () => {
  
        try{
            if(!ethereum) return alert('Please install metamask');

            const accounts = await ethereum.request({method: 'eth_requestAccounts'});

            setCurrentAccount(accounts[0]);
        } catch (error){ 
            console.log(error); 

           // throw new Error('No ethereum object.');
        }
    }


    const checkIfWalletIsConnected = async () =>{
        try {
            // this checks if metamask is installed;
            if(!ethereum) return alert('Please install metamask'); 

            const accounts = await ethereum.request({method: 'eth_accounts'});
    
            if (accounts.length){
                setCurrentAccount(accounts[0]);
    
            } else {
                console.log('No accounts found')
            }  
        } catch (error) {
            console.log(error);

           // throw new Error('No ethereum object.');
        }
    }

    const getBalance = async () => {
        try {
            const contractBalance = await contract.balanceOf()
            setBalance(ethers.utils.formatEther(contractBalance))
            console.log(contractBalance)
        } catch (error) {
            console.log(error)
        }
}




    useEffect(()=>{
        checkIfWalletIsConnected()
        getBalance()


    }, []);



    return (
        <BlockchainContext.Provider 
            value={{connectWallet, currentAccount}}>
                {children}
            </BlockchainContext.Provider>
    )
}
