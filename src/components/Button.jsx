const Button = ({ words }) => {
    return (
        <>
            <button className="text-primaryColor border-2 border-primaryColor py-5 w-56 rounded-xl duration-700 inline-block text-base hover:bg-primaryColor hover:text-white">
                {words}
            </button>
        </>
    );
};
export default Button;
