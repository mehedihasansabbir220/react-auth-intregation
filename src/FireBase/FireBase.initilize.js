import { initializeApp } from "firebase/app";
import firebaseConfig from "./FireBase.config";

const initializeAuthantication = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthantication;