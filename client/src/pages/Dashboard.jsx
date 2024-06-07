import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import Main from '../components/dashboard/Main';
import { PageProvider } from '../contexts/Dashboardcontext';
import { useSignIn } from '../contexts/SignInContext';
import { useEffect } from 'react';
function Dashboard(props) {
    const { data, Setdata } = useSignIn()
    useEffect(() => {
        const user = JSON.parse(window.localStorage.getItem('user'));
         
        Setdata(user)
    console.log(user)    
    },[])
    
    return (
        <PageProvider>
            {data &&
                <div >
                <div className='flex flex-row'>
                    <Sidebar />
                    <Main />
                </div>
            </div>}
        </PageProvider>
    );
}

export default Dashboard;