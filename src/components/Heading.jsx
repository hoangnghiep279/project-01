const Heading = ({ words, size, font }) => {
    return (
        <>
            <h2 className={`text-${size} font-${font}`}>{words}</h2>
        </>
    );
};
export default Heading;
