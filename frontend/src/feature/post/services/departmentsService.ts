import { departmentType } from "@/feature/browse/types/departmentType";

export default async function getDepartments (): Promise<Array<departmentType>> {
    const response = await fetch('http://localhost:5004/backend/department');
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
}