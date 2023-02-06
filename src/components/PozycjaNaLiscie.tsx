
const PozycjaNaLiscie = ({ title = "Loren Ipsum Dolar Sit Amet." }: { title: string }) => {
    return (
        <div className="columns is-vcentered mt-3">
            <div className="image is-48x48">
                <img src="https://bulma.io/images/placeholders/48x48.png" alt="" onClick={() => alert('Kliknięto ikonę')} />
            </div>
            <div className="column">
                <span className="subtitle">{title}</span>
            </div>
        </div>
    )
};

export default PozycjaNaLiscie;