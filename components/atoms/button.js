const AtomButton = props => {
    return (
        <div className={`button-container__${props.id}`}>
            <a className="button" id={props.id} href={props.href}>{props.name}</a>
        </div>
   );
}

export default AtomButton;