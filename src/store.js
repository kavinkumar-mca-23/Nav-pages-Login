import { create } from 'zustand';

const useDoctorStore = create((set) => ({
  selectedDoctorId: null,
  setSelectedDoctorId: (id) => set({ selectedDoctorId: id }),
}));

export default useDoctorStore;
