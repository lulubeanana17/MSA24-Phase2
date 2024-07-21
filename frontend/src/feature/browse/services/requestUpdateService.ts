import { requestPutType } from '../types/requestPUTType';
import axios from 'axios';

export default async function putRequest (requestUpdate: requestPutType): Promise<requestPutType> {
    const { id, ...data } = requestUpdate;
  const response = await axios.put(`http://localhost:5004/backend/request/${id}`, data);
  return response.data;
}
