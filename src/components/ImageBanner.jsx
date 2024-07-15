import "../css/components/imageBanner.css"

function ImageBanner({ url }) {
    return (
        <div className="image__banner">
            <img src={url} alt="" />
        </div>
    )
}

export default ImageBanner