const AtomLink = props => {
    return (
        <div className={`link-container__${props.id}`}>
            <a className="link" id={props.id} href={props.href}>{props.name}</a>
        </div>
   );
}

export default AtomLink;