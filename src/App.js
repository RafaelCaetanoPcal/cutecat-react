import React from "react";
import Contact from "./Contact";
import cutecat from "./cutecat.jpeg";
import catsmoking from "./images/catsmoking.jpeg"


export default function App() {
    return (
        <div className="contacts">
            <Contact
            img={cutecat}
            name="Mr. Whiskerson" 
            phone="(212) 555-1234"
            email="mr.whiskerson@catnap.meow"
            />
             <Contact
            img={catsmoking}
            name="Mr. Fluffykins" 
            phone="(212) 555-2345"
            email="fluff@meow.com"
            />

        </div>
    )
    }
