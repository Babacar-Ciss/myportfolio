import create from 'zustand'

const Store = create((set) => ({
  amountOfProjectsVisible: 4,
  LoadMoreProjectsHandler: () => set((state) => ({ amountOfProjectsVisible: state.amountOfProjectsVisible + 4 })),
  
  isSwitchChecked : false,
  setIsSwitchCheckedHandler :() => set((state) => ({ isSwitchChecked: !state.isSwitchChecked})),

  isAboutModalDisplay : false,
  setIsAboutModalDisplay : () => set((state) => ({ isAboutModalDisplay: !state.isAboutModalDisplay})),

  isContactModalDisplay : false,
  setIsContactModalDisplay : () => set((state) => ({ isContactModalDisplay: !state.isContactModalDisplay})),

}))


export default Store;