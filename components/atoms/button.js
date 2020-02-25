const AtomButton = props => {
    return (
        <div className={`button-container__${props.id}`}>
            <button className="button" id={props.id} href={props.href} onClick={props.onClick}>{props.name}</button>
        </div>
   );
}

export default AtomButton;