export const List = () => {
    let list = [
        {name:'Bonieky', age: 90},
        {name:'Luan', age: 26},
        {name:'Lucas', age: 26},
        {name:'Matheus', age: 27},
        {name:'Ana', age: 18},
    ];
    return (
        <ul>
            {list.map((item, index) =>(
                <li key={index}>{item.name} - {item.age} anos</li>
            ))}
        </ul>
    );
}