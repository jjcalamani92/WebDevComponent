const initialState = {
  links: ["nosotros", "productos", "contacto", "blog"],
  activeLinks: null
};

export const startReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
