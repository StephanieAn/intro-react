export default function List(){
    return(
        <>
        <div className="list">
            <h2>Todos</h2>
            <ul className="list__ul">
            <li className="list__item"><input type="checkbox"/>Learn React</li>
            <li className="list__item"><input type="checkbox"/>Add some effect</li>
            <li className="list__item"><input type="checkbox"/>Add some effect</li>
            <li className="list__item"><input type="checkbox"/>Add some effect</li>
            </ul>
        </div>
        </>
    )
};