import React, { createContext, useEffect, useState } from "react";

import Axios from "axios";
import ReactSwitch from "react-switch";
import style from './style.module.scss';

export const ThemeContext = createContext(null);

const ArtgalleryScreen = () => {

    // light/dark mode
    const [ theme, setTheme ] = useState("dark");
    const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };
     // light/dark mode

    const [art, setArt] = useState(null);
    // const [artTwo, setArtTwo] = useState(null);
    // const [artThree, setArtThree] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const randomID = Math.floor((Math.random() * 50) +1);

    useEffect(() => {

        const fetchArtData = async() => {
            const randomArt = await Axios(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomID}`);
            console.log(randomArt.data);
            setArt(randomArt.data);
        };

        if (art) {
            setArt(false);
        
        }
        const timer = setTimeout(() => {
            !art && fetchArtData();
        }, 1000);
        return () => clearTimeout(timer);
    }, [art]);
        //console.log(jsonData))
 
            // console.log(randomArt);
    //     });
    // })
    // .catch(err => console.log(err));
       
    
    
    // const
    // useEffect(() => {
    //     const fetchArtData = async () => {

//             const randomID = randomArt[Math.floor(Math.random() * randomArt.length)];
//             const result =  Axios(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomID}`);
//             console.log(result.data);
// // //             // setArt(randomID.data);
//     }
//     });
// }
// .catch(err => console.log(err));
// });
       
        // randomArt (art); {
        //     return art[Math.floor(Math.random() * art.length)];
        // }
        
        // if(art) {
        //     setLoading(false);
        // }
        // const timer = setTimeout(() => {
        //     !art && fetchArtData();
        // }, 500);
        
        // return () => clearTimeout(timer);
        // }, [art]);
        
        // useEffect(() => {
        //     const fetchArtTwoData = async () => {
        //         const result = await Axios(`https://collectionapi.metmuseum.org/public/collection/v1/objects/432`);
        //         console.log(result.data);
        //         setArtTwo(result.data);
        //     };
            
        //     if(artTwo) {
        //         setLoading(false);
        //     }
        //     const timer = setTimeout(() => {
        //         !artTwo && fetchArtTwoData();
        //     }, 500);
            
        //     return () => clearTimeout(timer);
        //     }, [artTwo]);

        //     useEffect(() => {
        //         const fetchArtThreeData = async () => {
        //             const result = await Axios(`https://collectionapi.metmuseum.org/public/collection/v1/objects/326717`);
        //             console.log(result.data);
        //             setArtThree(result.data);
        //         };
                
        //         if(artThree) {
        //             setLoading(false);
        //         }
        //         const timer = setTimeout(() => {
        //             !artThree && fetchArtThreeData();
        //         }, 500);
                
        //         return () => clearTimeout(timer);
        //         }, [artThree]);
            
  

    return (
        // loading ? <h3>Creating art...</h3> :
         // light/dark mode
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="Artgallery" id={theme} >   
      <div className={theme=== 'dark' ? style.dark : style.light}>
      <div className="switch">
          {/* <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label> */}
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
        </div>
    {/* light/dark mode */}
         <div>
            <section className ={style.artContainer}>
              {/* <h1>The Metropolitan Museum of Art</h1>
          <h2>{art.title}</h2>
          <h5>{art.accessionYear}</h5>
          <h3>{art.artistDisplayName}</h3>
          <img src={art.primaryImage} />    */}
          
        {/* light/dark mode */}
        </section>
        <button onClick="window.location.href=window.location.href">See More!</button>
        </div>
        </div>
        </div>
         </ThemeContext.Provider>
    );


}

export default ArtgalleryScreen;