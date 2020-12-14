import axios from 'axios';

const INVESTOR_API_BASE_URL = "http://localhost:8082/api/v2/Investor";

class InvestorService {
    
    getInvestor(){
        return axios.get(INVESTOR_API_BASE_URL);
    }

    createInvestor(investor){
        return axios.post(INVESTOR_API_BASE_URL, investor);
    }

    getInvestorById(investorId){
        return axios.get(INVESTOR_API_BASE_URL + '/' + investorId);
    }
    
    updateInvestor(investor, investorId){
        return axios.put(INVESTOR_API_BASE_URL + '/' + investorId, investor);
    }

    deleteInvestor(investorId){
        return axios.delete(INVESTOR_API_BASE_URL + '/' + investorId);
    }

}

export default new InvestorService()