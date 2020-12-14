import axios from 'axios';

const INVESTOR_API_BASE_URL = "http://localhost:8082/api/v2/";

class InvestorService {

    getStock(){
        return axios.get(INVESTOR_API_BASE_URL +'stock');
    }

    buyStock(investment){
        console.log("i")
        return axios.post(INVESTOR_API_BASE_URL +'buystock/' , investment);
    }
    
    getwatchlist(investorId){
          return axios.get(INVESTOR_API_BASE_URL +'watchlist/' + investorId);
   }

    sellStock(investmentId){
        return axios.delete(INVESTOR_API_BASE_URL + 'sell/' + investmentId);
    }
    getStockById(companyId){
        return axios.get(INVESTOR_API_BASE_URL + 'stock/' + companyId);
    }
}

export default new InvestorService()