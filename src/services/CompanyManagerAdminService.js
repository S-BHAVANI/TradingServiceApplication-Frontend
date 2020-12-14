import axios from 'axios';

const COMPANYMANAGER_API_BASE_URL = "http://localhost:8082/api/v2/CompanyManager";

class CompanyManagerService {

    getCompanyManager(){
        return axios.get(COMPANYMANAGER_API_BASE_URL);
    }

    createCompanyManager(companymanager){
        return axios.post(COMPANYMANAGER_API_BASE_URL, companymanager);
    }
    
    getCompanyManagerById(companyManagerId){
        return axios.get(COMPANYMANAGER_API_BASE_URL + '/' + companyManagerId);
    }
    
    updateCompanyManager(companymanager, companyManagerId){
        return axios.put(COMPANYMANAGER_API_BASE_URL + '/' + companyManagerId, companymanager);
    }

    deleteCompanyManager(companyManagerId){
        return axios.delete(COMPANYMANAGER_API_BASE_URL + '/' + companyManagerId);
    }
}

export default new CompanyManagerService()