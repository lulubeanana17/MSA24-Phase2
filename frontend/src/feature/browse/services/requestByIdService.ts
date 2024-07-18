import { requestsType } from "../types/requestsType";

export default async function getRequest (requestId: number | undefined): Promise<requestsType> {
    const response = await fetch(`http://localhost:5004/backend/request/${requestId}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
}