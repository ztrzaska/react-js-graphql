
const ButtonWithAlert = ({ name = "" }: { name: string }) => {
    return (
        <button className="button is-info mb-3 mr-3" onClick={() => alert('Kliknieto')}>{name}</button>
    )
};

export default ButtonWithAlert;