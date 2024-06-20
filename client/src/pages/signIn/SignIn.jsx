import { signInWithGooglePopup } from "../../components/firebase/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../components/firebase/Firebase";
import { getFirestore, doc, setDoc, addDoc ,collection,updateDoc} from "firebase/firestore";
import { app } from "../../components/firebase/Firebase";


import { useSignIn } from "../../contexts/SignInContext";
import { FaTimes } from "react-icons/fa";



const db = getFirestore(app);
const SignIn = () => {
const {open,Setopen} = useSignIn()    

const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
    // console.log(response._tokenResponse);
    const user = {
        email: response._tokenResponse.email,
        name: response._tokenResponse.fullName,
        photourl: response._tokenResponse.photoUrl,
        token : response._tokenResponse.idToken
    }

    try {
        const collectionRef = collection(db, 'users');
        await addDoc(collectionRef, user);
        window.localStorage.setItem('user', JSON.stringify(user)) 
        
        window.location.replace('/dashboard')
        
    }catch(e) { 
        const error = e
        console.log(error)
    }

    console.log(user)
    }
    return (
    // <section className="b bg-gray-900 h-screen  flex items-center  justify-center">
        <>{ open &&
            <>
                <div className=" h-[200px] absolute top-0 mt-[70px] mr-4 right-0 border z-[100] bg-black   text-white   border-black   w-1/4 rounded-lg flex flex-col items-center ">
                <button className="absolute top-2 right-2 text-red-500" onClick={()=>{ Setopen(false) }}>
                    <FaTimes size={24} />
                </button>
            <div className=" p-4">
                <h2 className="text-2xl ">Motion : Sigin In</h2>
            </div>
            <div className=" border border-red-500 bg-red-600 text-white  rounded-lg flex ml-4 flex-row justify-center items-center gap-x-3 mt-9    p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-google" viewBox="0 0 16 16">
                        <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
                    </svg>
                <button onClick={logGoogleUser} className=" z-[200] cursor-pointer ">Sign In With Google</button>
            </div>
        </div >
            </>
    }</>
    // </section>
    )
}
export default SignIn;

