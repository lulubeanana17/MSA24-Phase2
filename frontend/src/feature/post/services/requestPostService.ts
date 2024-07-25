import { requestPostType } from '../types/requestPOSTType';
import axios from 'axios';

export default async function postRequest(requestData: requestPostType): Promise<requestPostType> {
    const { urgencyId, departmentId, progressId, ...data } = requestData;
    const response = await axios.post(`http://localhost:5004/backend/request/${urgencyId}/${departmentId}/${progressId}`, data);
    return response.data;
}
