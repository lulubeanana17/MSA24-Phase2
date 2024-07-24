import { requestsType } from "../types/requestsType";

export default async function getRequests (): Promise<Array<requestsType>> {
    const response = await fetch('http://localhost:5004/backend/request?SortBy=startTime&IsDesending=true');
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
}