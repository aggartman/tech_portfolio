import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        width: 100%;
        padding: 0;
        margin: 0;
        overflow-x: hidden;
        background: ${({theme}) => theme.colors.body};
        color: ${({theme}) => theme.colors.text};
        font-family: ${({theme}) => theme.font};
        font-size: ${({theme}) => theme.fontSize};
        transition: all 0.50s linear;
        text-align: center;
    }

    a {
        color: ${({theme}) => theme.colors.link.text};
        cursor: pointer;
    }

    button {
        border: 0;
        display: inline-block;
        padding: 10px 10px;
        font-size: ${({theme}) => theme.fontSize};
        border-radius: 4px;
        margin-top: 5px;
        cursor: pointer;
        background-color: #1064EA;
        color: #FFFFFF;
        font-family: ${({theme}) => theme.font};
    }

    section div {
        width: 100%;
        margin: 0;
    }

    .img-fluid {
        width: 100px;
        display: flex;
        margin: auto;
        flex-wrap: nowrap;
        padding: 0.5rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        column-gap: 15px;
    }

    .section-header {
        background: ${({theme}) => theme.colors.sectionHeader};
        padding: 8px 4px;
    }

    .icon {
        width: 15px;
    }
    
    .icon:hover {
        transform: scale(1.2);
    }
    
    .skillIcon {
        width: 50px;
        padding: 0;
        margin: 0 auto;
    }
    
    .skillSectionHeader {
        margin-top: 3px;
    }

    .container {
        padding: 5px 10px;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
    }

    .title {
        font-size: 3rem;
    }
    
    .intro {
        margin-left: 1rem;
    }

    .subHeader {
        font-size: 20px;
    }

    .navBarHeader {
        position: sticky;
        top: 0;
        z-index: 10;
    }

    .navBar {
        display: flex;
        margin: auto;
        flex-wrap: nowrap;
        padding: 0.5rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        column-gap: 15px;
    }

    .navContainer {
        margin-right: auto;
        margin-left: 4rem;
        padding: 1rem 4rem;
    }

    .navItem {
        margin-right: 5rem;
    }
    
    .selectedTheme {
        font-size: 1rem;
        margin: 0;
        
        p {
            margin: 0;
        }
    }

    // About Section 
    #about h1 {
        width: 100%;
        text-align: left;
        margin-bottom: 3rem;
    }

    .profilePhoto {
        width: 400px;
        border-radius: 25%;
        margin-top: 10px;
    }
    
    .nav-links a {
        padding: 1rem 1rem;
    }
    
    .nav-links p {
        line-height: 2rem;
    }
    
    .nav-links {
        width: 50%;
    }

    .profilePhotoContainer {
        width: 45%;
    }

    .trailheadBadge {
        width: 20%;
        margin-bottom: 10px;
    }
    

    .experienceItem {
        width: 97vw;
        border: 2px solid ${({theme}) => theme.colors.borderColor};
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 4px;
    }
    
    .expanded {
        background-color: ${({theme}) => theme.colors.borderColor};
        color: ${({theme}) => theme.colors.altText};
        border-radius: 15px;
    }

    .imageGalleryContainer {
        background: ${({theme}) => theme.colors.imageGallery};
        padding: 1rem;
    }
    
    .googleMapComponent {
        width: 25%;    
    }
    
    .googleMap {
        width: 400px;
        height: 400px;
        border: 0;
        margin: 0;
    }
    
    .personalInformation, .contactForm {
        width: 35%;
    }
    
    .emailTitle, .phoneTitle {
            margin-top: 40px;
    }
    
    .contactForm {
        form div {
            margin: 10px 0;
        }
        form label {
            margin-right: 5px;
            display: inline-block;
            font-weight: bold;
            font-size: 18px;
            text-align: right;
        }
        form input {
            width: 50%;
            display: inline-block;
            float: right;
        }
        
        justify-content: space-between;
    }

    #footer {
        display: flex;
        position: relative;
        margin: auto;
        flex-wrap: nowrap;
        padding: 0.5rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        column-gap: 15px;
        bottom: 0;
    }


`;