import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
    { //Northern Lights and Lighthouse
        original:"https://live.staticflickr.com/65535/54537845736_cfb2fb0982_b.jpg",
        thumbnail: "https://live.staticflickr.com/65535/54537845736_cfb2fb0982_t.jpg",
    },
    { //William as a baby
        original: "https://live.staticflickr.com/65535/54537845726_387807214b_b.jpg",
        thumbnail: "https://live.staticflickr.com/65535/54537845726_387807214b_t.jpg",
    },
    {  //Northern Lights Apartment
        original: "https://live.staticflickr.com/65535/54538081243_a82d0af44a_b.jpg",
        thumbnail: "https://live.staticflickr.com/65535/54538081243_a82d0af44a_t.jpg",
    },
    {  // Farmhouse Chic - Renee
        original: "https://live.staticflickr.com/65535/54538605135_183ffb3cba_b.jpg",
        thumbnail: "https://live.staticflickr.com/65535/54538605135_183ffb3cba_t.jpg",
    },
    {  // Caddo Lake
        original: "https://live.staticflickr.com/65535/54537845741_e69cf54ae6_b.jpg",
        thumbnail: "https://live.staticflickr.com/65535/54537845741_e69cf54ae6_t.jpg",
    },
    {  // Resting RowBoats
        original: "https://live.staticflickr.com/65535/54538501823_d26b456344_b.jpg",
        thumbnail: "https://live.staticflickr.com/65535/54538501823_d26b456344_t.jpg",
    },
    {  // Allyson in front of waterfall
        original: "https://live.staticflickr.com/65535/54538605100_4aa4d494d3_b.jpg",
        thumbnail: "https://live.staticflickr.com/65535/54538605100_4aa4d494d3_t.jpg",
    },
    {  // Big Bend Fall Trail
        original: "https://live.staticflickr.com/65535/54538605080_7bd1c2728b_b.jpg",
        thumbnail: "https://live.staticflickr.com/65535/54538605080_7bd1c2728b_t.jpg",
    },
    {  // Columbines
        original: "https://live.staticflickr.com/65535/54538266936_763d3508e0_b.jpg",
        thumbnail: "https://live.staticflickr.com/65535/54538266936_763d3508e0_t.jpg",
    },
    {  // Gjesvær at sunrise
        original: "https://live.staticflickr.com/65535/54538450184_8e9697613c_b.jpg",
        thumbnail: "https://live.staticflickr.com/65535/54538450184_8e9697613c_t.jpg",
    },
]

export default class Art extends React.Component {
    render() {
        return (
            <section id="art">
                <div className="container">
                    <div>
                        <h1 className="section-header">Photography</h1>
                    </div>
                    <div className='artInfo'>
                        <p className="artInfo">This is a sample of some of the photography that I've taken over the
                        years, and as a former professional photographer.</p>
                    </div>
                    <div className="imageGalleryContainer">
                        <ImageGallery items={images}/>
                    </div>
                </div>
            </section>
        )
    }
}