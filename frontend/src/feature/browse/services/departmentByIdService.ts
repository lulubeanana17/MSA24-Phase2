import { departmentType } from "../types/departmentType";

export default async function getDepartment (departmentId: number): Promise<departmentType> {
    const response = await fetch(`http://localhost:5004/backend/department/${departmentId}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
}