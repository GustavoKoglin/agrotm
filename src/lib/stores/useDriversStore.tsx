import { create } from "zustand";

import { DriversProps } from "../services/drivers";

interface FormStore {
  data: DriversProps;
  setData: (newData: Partial<DriversProps>) => void;
}

const useDriversStore = create<FormStore>((set) => ({
  data: {
    name: "",
    cpf: "",
    birthDate: "",
    phone: "",
    email: "",
    cnhNumber: "",
    cnhCategory: "",
    antt: "",
    anttValidity: "",
    vehicleType: "",
    vehicleBrand: "",
    vehicleYear: "",
    vehiclePlate: "",
    experience: 0,
    workingAreas: "",
    availability: "",
    notes: "",
  },
  setData: (newData) =>
    set((state) => ({ data: { ...state.data, ...newData } })),
}));

export default useDriversStore;
