interface SocialButtonProps {
    image?: string;
    imageAlt?: string;
    text: string;
}

const SocialButton = ({image, imageAlt, text}: SocialButtonProps) => {
    return (
        <button className="socialButton">
            {image && <img src={image} alt={imageAlt}/>}
            <div>{text}</div>
        </button>
    )
}

export default SocialButton;