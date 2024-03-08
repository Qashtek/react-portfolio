function NavLinks(props){
    return(
        <ul className='Nav-links drop-links'>
                {props.children}
        </ul>
    )
}

export default NavLinks;