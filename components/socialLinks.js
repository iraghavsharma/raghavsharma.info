import links from "../assets/json/socialLinks.json"
import AtomLink from "./atoms/link" 

const SocialLinks = props => {
    let list = (props.for) ? links[props.for]: links;
    let link_list = list.map((list) => {
            return <AtomLink key={list.id} {...list} />
    });
   return (
        <div className={`social-links link-for__${props.for}`}>{link_list}</div>
   );
}

export default SocialLinks;