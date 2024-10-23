import { configureStore } from "@reduxjs/toolkit";


import { roomsApi } from "./services/roomsApi";
import { reservedInfoApi } from "./services/reservedInfoApi";
import{foodsApi} from "./services/foodsApi";
import { customerApi } from "./services/cusomerApi";

const customStore = configureStore({
  reducer: {

    [roomsApi.reducerPath]:roomsApi.reducer,
    [foodsApi.reducerPath]:foodsApi.reducer,
    [reservedInfoApi.reducerPath]:reservedInfoApi.reducer,
    [customerApi.reducerPath]:customerApi.reducer,
    // [specialRoomsApi.reducerPath]:specialRoomsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
     
      .concat(roomsApi.middleware)
      .concat(foodsApi.middleware)
      .concat(reservedInfoApi.middleware)
      .concat(customerApi.middleware)
      // .concat(specialRoomsApi.middleware)
});

export default customStore;
