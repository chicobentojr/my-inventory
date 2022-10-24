import { INVENTORY_API_HOST } from "@/utils/constants";
import axios from "axios";

export interface AirConditioner {
    id: string;
    branchId: string;
    description: string;
    quantity: number;
    btu: number;
}

// export const getAirConditioners = (branch: Branch): Promise<void> => {
//     return axios.get(`${INVENTORY_API_HOST}/air-conditioners/by-branch/${branch.id}`)
// }

// export const createAirConditioner = (branch: Branch, airConditioner: AirConditioner): Promise<void> => {
//     return axios.post(`${INVENTORY_API_HOST}/air-conditioners`, {
//         ...airConditioner,
//         branchId: branch.id
//     })
// }

export const getAirConditioners = (): Promise<void> => {
    return axios.get(`${INVENTORY_API_HOST}/air-conditioners`)
}

export const addAirConditioner = (airConditioner: AirConditioner): Promise<void> => {
    return axios.post(`${INVENTORY_API_HOST}/air-conditioners`, {
        ...airConditioner
    })
}

export const editAirConditioner = (airConditioner: AirConditioner): Promise<void> => {
    return axios.put(`${INVENTORY_API_HOST}/air-conditioners/${airConditioner.id}`, {
        ...airConditioner
    })
}

export const removeAirConditioner = (airConditioner: AirConditioner): Promise<void> => {
    return axios.delete(`${INVENTORY_API_HOST}/air-conditioners/${airConditioner.id}`)
}