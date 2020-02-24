import links from "../assets/json/navLinks.json"
import AtomLink from "./atoms/link" 
import AtomButton from "./atoms/button"

const NavLinks = props => {
    let list = (props.for) ? links[props.for]: links;
    let link_list = list.map((list) => {
        if(list.type == "link"){
            return <AtomLink key={list.id} {...list} />
        }
        else if(list.type =="button"){
            return <AtomButton key={list.id} {...list} />
        }
    });
   return (
        <div className={`nav-links links-for__${props.for}`}>{link_list}</div>
   );
}

export default NavLinks;