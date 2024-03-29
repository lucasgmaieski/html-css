type Props = {
    url: string;
    legend: string;
}

export const Photo = ({ url, legend}: Props) => {
    return (
        <div>
            <img src={url} alt={legend} />
            <p>...{legend }</p>
        </div>
    );
}