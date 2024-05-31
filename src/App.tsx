type Props = {
    name: string;
};

export const App = ({ name }: Props) => {
    const a: string = 'Lorem ipsum dolor sit amet';

    return (
        <h1>
            {name} {a}
        </h1>
    );
};
