import React, { useEffect } from "react";
import Filter from "../../components/Filters";

import Header from "../../components/Header";

export default function Home(){
    return (
        <div>
            <Header />
            <Filter />
        </div>
    );
}