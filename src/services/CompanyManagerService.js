import axios from 'axios';

const COMPANYMANAGER_API_BASE_URL = "http://localhost:8082/api/v2/Stock";

class CompanyManagerService {

    getStock(){
        return axios.get(COMPANYMANAGER_API_BASE_URL);
    }

    createStock(stock){
        return axios.post(COMPANYMANAGER_API_BASE_URL, stock);
    }

    getStockById(companyId){
        return axios.get(COMPANYMANAGER_API_BASE_URL + '/' + companyId);
    }

    updateStock(stock, companyId){
        return axios.put(COMPANYMANAGER_API_BASE_URL + '/' + companyId, stock);
    }

    deleteStock(companyId){
        return axios.delete(COMPANYMANAGER_API_BASE_URL + '/' + companyId);
    }
}

export default new CompanyManagerService()