import React, { useContext, useState, useEffect } from "react";








const ContextApp = React.createContext();


const api_url = ` https://apidata1.herokuapp.com/apidata`;

const AppProvider = (({ children }) => {

    const [fund, setFund] = useState([]);
    const[money , setMoney]=useState([]);




    const getProject = async (url) => {

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if (data.Response === "True") {
                setFund(data.Search);
                setMoney(data.Recived_Dollar)
            }
            else {
                console.log("Error Accurs");
            }




        }
        catch (error) {
            console.log("error");

        }

    }








    useEffect(() => {
        getProject(api_url);

    }, [])




    return (
        <ContextApp.Provider value={{ fund ,money }}>
            {children}
        </ContextApp.Provider>
    )

})


const useGlobalContext = () => {
    return (
        useContext(ContextApp)
    )
}

export { AppProvider, ContextApp, useGlobalContext };