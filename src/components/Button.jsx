const Button = ({ words, padding }) => {
    return (
        <>
            <button
                className={`text-primaryColor border-2 border-primaryColor py-${padding} w-56 rounded-xl duration-700 inline-block text-base hover:bg-primaryColor hover:text-white`}
            >
                {words}
            </button>
        </>
    );
};
export default Button;
