type Props = {
    title: string;
    // title?: string
    // deixa essa prop opcional e assim posso usar o componente sem passar props
}

// forma alternativa de passar a props  ({ title }: Props)   ai pode usar só title no componente ao invés de props.title
export const Header = (props: Props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <hr />
        </div>
    );
}