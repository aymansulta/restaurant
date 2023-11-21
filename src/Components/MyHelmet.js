import React from "react";
import Helmet from "react-helmet";

function MyHelmet() {
    return(
        <>
            <Helmet>
                <title>Little Lemon</title>
                <meta name="description" content="Little Lemon Restaurant"/>
                <meta name="og:title" content="Little Lemon"/>
                <meta property="og:type" content="website"/>
                <meta property="og:local" content="en_US"/>
                <meta property="og:url" content="https://"/>
                <meta name="og:description" content="Little Lemon Restaurant"/>
                <meta name="og:image" content="../icons_assets/Logo.svg"/>
                <meta name="author" content="Ayman Sultan"/>
                <meta name="robots" content="index,follow"/>
                <meta name="language" content="english"/>
                {/* <meta http-equiv="refresh" content="30"/> */}
                <meta http-equiv="content-type" content="text/html"/>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Helmet>
        </>
    )
}

export default MyHelmet;