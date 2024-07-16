import { requestsType } from "./requestsType";

export type progressType = {
    id: number;
    title: string;
    requests: requestsType[];
};