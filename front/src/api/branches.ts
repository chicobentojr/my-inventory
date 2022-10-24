import { INVENTORY_API_HOST } from "@/utils/constants";
import axios from "axios";

export interface Branch {
    id: string;
    name: string;
    description: string;
}

export const createBranch = (branch: Branch): Promise<void> => {
    return axios.post(`${INVENTORY_API_HOST}/branches`, {
        ...branch
    })
}
export const getBranches = (): Promise<void> => {
    return axios.get(`${INVENTORY_API_HOST}/branches`)
}


export const addBranch = (branch: Branch): Promise<void> => {
    return axios.post(`${INVENTORY_API_HOST}/branches`, {
        ...branch
    })
}

export const editBranch = (branch: Branch): Promise<void> => {
    return axios.put(`${INVENTORY_API_HOST}/branches/${branch.id}`, {
        ...branch
    })
}

export const removeBranch = (branch: Branch): Promise<void> => {
    return axios.delete(`${INVENTORY_API_HOST}/branches/${branch.id}`)
}